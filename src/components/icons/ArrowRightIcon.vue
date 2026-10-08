<script setup>
defineProps({ size: { type: [Number, String], default: 18 } })
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
  </svg>
</template>
