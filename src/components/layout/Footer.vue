<script setup>
import { siteConfig } from '../../config/site.js'
</script>

<template>
  <footer class="site-footer border-t px-4 py-10 sm:px-8">
    <div class="mx-auto flex max-w-6xl flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <div class="logo text-main flex items-center justify-center gap-2 text-2xl font-semibold sm:justify-start">
        <img class="site-paws h-7 w-14" src="/site-paws.svg" alt="" aria-hidden="true" />
        <span>Пушистые дети природы</span>
      </div>

      <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold sm:justify-end">
        <a v-for="item in siteConfig.nav" :key="item.href" :href="item.href" class="nav-link">{{ item.label === 'Вступить в стаю' ? 'Вступить' : item.label }}</a>
      </div>
    </div>

    <div class="footer-copy mx-auto mt-5 max-w-6xl text-center text-sm">
      © 2026 Пушистые дети природы. Сделано с 💖 и щепоткой магии
    </div>
  </footer>
</template>
