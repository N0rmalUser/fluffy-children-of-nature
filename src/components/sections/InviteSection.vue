<script setup>
import CopyIcon from '../icons/CopyIcon.vue'
import PawIcon from '../icons/PawIcon.vue'
import Reveal from '../ui/Reveal.vue'

defineProps({ modelValue: { type: String, default: '' } })
const emit = defineEmits(['update:modelValue', 'copy'])
</script>

<template>
  <section id="invite" class="px-4 py-20 sm:px-8">
    <Reveal>
      <div class="invite-panel mx-auto max-w-4xl">
        <div class="mb-6 text-center">
          <div class="text-brand mb-3 flex justify-center"><PawIcon :size="48" /></div>
          <h2 class="text-main text-3xl font-bold sm:text-4xl">Вступить в стаю</h2>
          <p class="text-muted mx-auto mt-3 max-w-2xl">Введи свой код приглашения — готовая ссылка скопируется в буфер обмена.</p>
        </div>

        <div class="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            :value="modelValue"
            class="invite-input"
            type="text"
            autocomplete="off"
            placeholder="Код приглашения"
            aria-label="Код приглашения"
            @input="emit('update:modelValue', $event.target.value)"
            @keyup.enter="emit('copy')"
          />
          <button class="btn shrink-0" type="button" @click="emit('copy')">
            <CopyIcon :size="20" />
            <span>Скопировать</span>
          </button>
        </div>
      </div>
    </Reveal>
  </section>
</template>
