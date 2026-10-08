<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  once: { type: Boolean, default: true },
})

const root = ref(null)
let observer

onMounted(() => {
  if (!root.value) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.value.classList.add('is-visible')
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      root.value?.classList.add('is-visible')
      if (props.once) observer?.unobserve(entry.target)
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )

  observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="root" class="reveal" :style="{ '--reveal-delay': `${delay}ms` }">
    <slot />
  </div>
</template>
