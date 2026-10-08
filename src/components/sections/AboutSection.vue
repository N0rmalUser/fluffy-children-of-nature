<script setup>
import AboutCard from '../cards/AboutCard.vue'
import PaletteIcon from '../icons/PaletteIcon.vue'
import TreeIcon from '../icons/TreeIcon.vue'
import HeartIcon from '../icons/HeartIcon.vue'
import SparklesIcon from '../icons/SparklesIcon.vue'
import Reveal from '../ui/Reveal.vue'

const emit = defineEmits(['open-panel'])

const cards = [
  { title: 'Творчество', text: 'Рисуем арты, пишем истории, создаём костюмы — делимся вдохновением каждый день', icon: PaletteIcon },
  { title: 'Природа', text: 'Любим лесные прогулки по тайным тропинкам, пикники и встречи на свежем воздухе в образах наших фурри', icon: TreeIcon, clickable: true },
  { title: 'Дружба', text: 'Безопасное пространство, где тебя примут любым — с хвостом, ушками и любым характером', icon: HeartIcon },
  { title: 'Магия', text: 'Верим в чудеса, добрые сказки и в то, что внутри каждого живёт маленький пушистый друг', icon: SparklesIcon },
]
</script>

<template>
  <section id="about" class="px-4 py-20 sm:px-8">
    <div class="mx-auto max-w-6xl">
      <Reveal><h2 class="section-title">Что мы за стая? 🌸</h2></Reveal>
      <Reveal :delay="70"><p class="section-subtitle">Маленькое уютное сообщество, где ценят творчество, доброту и пушистость во всех её проявлениях</p></Reveal>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal v-for="(card, index) in cards" :key="card.title" :delay="100 + index * 70">
          <AboutCard v-bind="card" @activate="card.clickable && emit('open-panel')" />
        </Reveal>
      </div>
    </div>
  </section>
</template>
