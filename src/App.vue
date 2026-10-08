<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import BackgroundBlobs from './components/layout/BackgroundBlobs.vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import CharactersSection from './components/sections/CharactersSection.vue'
import InviteSection from './components/sections/InviteSection.vue'
import { siteConfig } from './config/site.js'

const inviteCode = ref('')
const copied = ref(false)
const theme = ref('light')
let copiedTimer

const buildInvite = (code) => {
  const cleanCode = code.trim()
  const { host, port, path, security, transport, fragment } = siteConfig.invite
  return `vless://${cleanCode}@${host}:${port}?encryption=none&host=${host}&path=${encodeURIComponent(path)}&security=${security}&type=${transport}&sni=${host}#${fragment}`
}

const copyInvite = async () => {
  const code = inviteCode.value.trim()
  if (!code) return

  const invitation = buildInvite(code)

  try {
    await navigator.clipboard.writeText(invitation)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = invitation
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
  }

  copied.value = true
  window.clearTimeout(copiedTimer)
  copiedTimer = window.setTimeout(() => {
    copied.value = false
  }, 2500)
}

const applyTheme = (nextTheme) => {
  theme.value = nextTheme
  document.documentElement.dataset.theme = nextTheme
  localStorage.setItem('pushistye-theme', nextTheme)
}

const toggleTheme = () => {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('pushistye-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const openPanel = () => {
  window.location.href = siteConfig.panelUrl
}

onMounted(() => {
  applyTheme(getInitialTheme())
})

onBeforeUnmount(() => {
  window.clearTimeout(copiedTimer)
})
</script>

<template>
  <div id="top" class="site-root min-h-screen overflow-x-hidden">
    <BackgroundBlobs />
    <Navbar :is-dark="theme === 'dark'" @toggle-theme="toggleTheme" />

    <main>
      <HeroSection />
      <AboutSection @open-panel="openPanel" />
      <CharactersSection />
      <InviteSection v-model="inviteCode" @copy="copyInvite" />
    </main>

    <Footer />

    <Transition name="toast">
      <div v-if="copied" class="toast fixed bottom-6 left-1/2 z-[100] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full border px-5 py-3 text-center text-sm shadow-[0_15px_40px_rgba(61,52,80,.25)] sm:text-base" role="status" aria-live="polite">
        Приглашение в стаю скопировано 🐾
      </div>
    </Transition>
  </div>
</template>
