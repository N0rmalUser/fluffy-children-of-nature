<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HeroIllustration from '../illustrations/HeroIllustration.vue'
import Reveal from '../ui/Reveal.vue'

const hero = ref(null)
const illustration = ref(null)
let frame = 0
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0
let isAnimating = false

const animate = () => {
  currentX += (targetX - currentX) * 0.12
  currentY += (targetY - currentY) * 0.12

  illustration.value?.style.setProperty('--mouse-x', `${currentX.toFixed(2)}px`)
  illustration.value?.style.setProperty('--mouse-y', `${currentY.toFixed(2)}px`)

  const settled = Math.abs(targetX - currentX) < 0.05 && Math.abs(targetY - currentY) < 0.05
  if (!settled) {
    frame = requestAnimationFrame(animate)
  } else {
    currentX = targetX
    currentY = targetY
    isAnimating = false
  }
}

const requestAnimation = () => {
  if (isAnimating) return
  isAnimating = true
  frame = requestAnimationFrame(animate)
}

const handlePointerMove = (event) => {
  if (event.pointerType === 'touch' || !hero.value) return
  const rect = hero.value.getBoundingClientRect()
  const normalizedX = (event.clientX - rect.left) / rect.width - 0.5
  const normalizedY = (event.clientY - rect.top) / rect.height - 0.5
  targetX = normalizedX * 34
  targetY = normalizedY * 28
  requestAnimation()
}

const resetPointer = () => {
  targetX = 0
  targetY = 0
  requestAnimation()
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  hero.value?.addEventListener('pointermove', handlePointerMove, { passive: true })
  hero.value?.addEventListener('pointerleave', resetPointer, { passive: true })
  window.addEventListener('blur', resetPointer)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  hero.value?.removeEventListener('pointermove', handlePointerMove)
  hero.value?.removeEventListener('pointerleave', resetPointer)
  window.removeEventListener('blur', resetPointer)
})
</script>

<template>
  <section ref="hero" class="hero-section px-4 sm:px-8">
    <div class="hero-inner mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
      <Reveal>
        <div class="hero-text">
          <h1 class="text-main text-4xl font-bold leading-tight sm:text-6xl">
            Добро пожаловать в мир<br />
            <span class="text-brand">пушистых</span> друзей с картинки🌿
          </h1>
          <p class="text-muted mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
            Мы — тёплое сообщество фурри, где каждый найдёт свою стаю.
            Творчество, дружба и любовь к природе объединяют нас под звёздным небом.
          </p>
          <div class="mt-8 flex flex-wrap gap-4 max-md:justify-center">
            <a href="#characters" class="btn">Познакомиться с героями ✨</a>
            <a href="#invite" class="btn btn-secondary">Вступить в стаю 🐾</a>
          </div>
        </div>
      </Reveal>

      <Reveal :delay="120">
        <div ref="illustration" class="hero-illustration mx-auto w-full max-w-[430px]">
          <HeroIllustration />
        </div>
      </Reveal>
    </div>
  </section>
</template>
