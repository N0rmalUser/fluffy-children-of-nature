<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  icon: { type: Object, required: true },
  clickable: { type: Boolean, default: false },
})

defineEmits(['activate'])
</script>

<template>
  <article
    class="about-card"
    :class="clickable ? 'cursor-pointer' : ''"
    :tabindex="clickable ? 0 : undefined"
    :role="clickable ? 'link' : undefined"
    :aria-label="clickable ? title : undefined"
    @click="clickable && $emit('activate')"
    @keydown.enter.prevent="clickable && $emit('activate')"
    @keydown.space.prevent="clickable && $emit('activate')"
  >
    <div class="about-icon text-forest"><component :is="icon" :size="30" /></div>
    <h3 class="text-main">{{ title }}</h3>
    <p>{{ text }}</p>
  </article>
</template>
