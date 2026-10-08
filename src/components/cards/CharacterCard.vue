<script setup>
import { ref } from 'vue'

defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  text: { type: String, required: true },
  icon: { type: Object, required: true },
  accent: { type: String, default: 'mint' },
})

const popped = ref(false)
const triggerPop = () => {
  popped.value = false
  requestAnimationFrame(() => {
    popped.value = true
    window.setTimeout(() => { popped.value = false }, 350)
  })
}
</script>

<template>
  <article class="character-card" :class="popped ? 'character-pop' : ''" @click="triggerPop">
    <div class="character-avatar">
      <slot name="avatar" />
    </div>
    <h3>{{ name }}</h3>
    <div class="role" :class="accent === 'flower' ? 'role-flower' : ''">
      <component :is="icon" :size="17" />
      <span>{{ role }}</span>
    </div>
    <p>{{ text }}</p>
  </article>
</template>
