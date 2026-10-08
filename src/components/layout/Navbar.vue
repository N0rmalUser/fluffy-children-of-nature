<script setup>
import MoonIcon from '../icons/MoonIcon.vue'
import SunIcon from '../icons/SunIcon.vue'
import { siteConfig } from '../../config/site.js'

defineProps({ isDark: { type: Boolean, default: false } })
const emit = defineEmits(['toggle-theme'])
</script>

<template>
  <nav class="site-nav sticky top-0 z-50 border-b px-4 py-3 backdrop-blur-xl sm:px-8">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4">
      <a href="#top" class="logo text-main flex min-w-0 items-center gap-2 text-2xl font-semibold no-underline">
        <img class="site-paws h-7 w-14 shrink-0" src="/site-paws.svg" alt="" aria-hidden="true" />
        <span class="truncate">Пушистые дети природы</span>
      </a>

      <div class="flex items-center gap-3">
        <ul class="hidden items-center gap-8 font-semibold md:flex">
          <li v-for="item in siteConfig.nav" :key="item.href"><a :href="item.href" class="nav-link">{{ item.label }}</a></li>
        </ul>

        <button
          class="theme-toggle"
          type="button"
          :aria-label="isDark ? 'Включить светлую тему' : 'Включить тёмную тему'"
          :title="isDark ? 'Светлая тема' : 'Тёмная тема'"
          @click="emit('toggle-theme')"
        >
          <SunIcon v-if="isDark" :size="19" />
          <MoonIcon v-else :size="19" />
        </button>
      </div>
    </div>
  </nav>
</template>
