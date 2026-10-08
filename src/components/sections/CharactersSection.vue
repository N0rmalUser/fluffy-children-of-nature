<script setup>
import CharacterCard from '../cards/CharacterCard.vue'
import PantherCharacter from '../characters/PantherCharacter.vue'
import CatCharacter from '../characters/CatCharacter.vue'
import DogCharacter from '../characters/DogCharacter.vue'
import LeafIcon from '../icons/LeafIcon.vue'
import FlowerIcon from '../icons/FlowerIcon.vue'
import PawIcon from '../icons/PawIcon.vue'
import Reveal from '../ui/Reveal.vue'

const characters = [
  { name: 'Пантера Тень', role: 'Наблюдатель', text: 'Тихо гуляет по лесу и замечает даже самые маленькие чудеса', icon: LeafIcon, component: PantherCharacter },
  { name: 'Кот Мур', role: 'Садовник', text: 'Ухаживает за цветами и знает самые уютные места для отдыха', icon: FlowerIcon, component: CatCharacter, accent: 'flower' },
  { name: 'Пёс Бублик', role: 'Друг', text: 'Всегда готов к прогулке, игре и новой доброй истории', icon: PawIcon, component: DogCharacter },
]
</script>

<template>
  <section id="characters" class="px-4 py-20 sm:px-8">
    <div class="mx-auto max-w-6xl">
      <Reveal><h2 class="section-title">Наши пушистые жители 🐾</h2></Reveal>
      <Reveal :delay="70"><p class="section-subtitle">Познакомьтесь с теми, кто делает наше сообщество таким тёплым и уютным</p></Reveal>

      <div class="grid gap-6 md:grid-cols-3">
        <Reveal v-for="(character, index) in characters" :key="character.name" :delay="120 + index * 90">
          <CharacterCard v-bind="character">
            <template #avatar><component :is="character.component" /></template>
          </CharacterCard>
        </Reveal>
      </div>
    </div>
  </section>
</template>
