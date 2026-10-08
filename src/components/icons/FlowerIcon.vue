<script setup>
defineProps({ size: { type: [Number, String], default: 18 } })
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="2" /><path d="M12 10c-4-5-7-1-5 2-5-1-5 4 0 4-2 4 2 6 5 2 3 4 7 2 5-2 5 0 5-5 0-4 2-4-1-7-5-2Z" />
  </svg>
</template>
