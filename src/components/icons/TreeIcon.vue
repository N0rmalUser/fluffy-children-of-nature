<script setup>
defineProps({ size: { type: [Number, String], default: 30 } })
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 21V10" /><path d="m12 10-3-3 3-4 3 4-3 3Z" /><path d="m12 13-4-4-3 4 4 4" /><path d="m12 13 4-4 3 4-4 4" /><path d="M8 21h8" />
  </svg>
</template>
