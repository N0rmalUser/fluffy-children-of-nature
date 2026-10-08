<script setup>
defineProps({ size: { type: [Number, String], default: 18 } })
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M20 4C11 4 5 7 5 14c0 3.2 2.3 6 6 6 7 0 9-8 9-16Z" /><path d="M4 20c3-5 7-8 13-10" />
  </svg>
</template>
