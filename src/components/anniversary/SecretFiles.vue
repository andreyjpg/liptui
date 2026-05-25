<template>
  <AnimatePresence>
    <motion.div
      @click="emit('handle-click', props.file.id)"
      :while-hover="{
        y: -10,
      }"
      class="card flex flex-col gap-2 cursor-pointer"
    >
      <div :class="['rounded-t-xl py-3 px-2', props.file.color]">{{ props.file.fileName }}</div>
      <div class="px-5">
        <div class="field">
          <p>Date enregistrée</p>
          <p class="text-2xl font-bold pl-2">{{ props.file.date }}</p>
        </div>
        <div class="field">
          <p>Lieu</p>
          <p class="text-2xl font-bold pl-2">{{ props.file.location }}</p>
        </div>
        <div class="field">
          <p>Note</p>
          <p class="text-md italic font-spaceGrotesk pl-2">"{{ props.file.note }}""</p>
        </div>
        <div class="flex flex-col mb-3">
          <p>Protocole appliqué</p>
          <p
            :class="[
              'text-md font-bold pl-2',
              props.file.color === 'blue' ? 'blue-text' : 'green-text',
            ]"
          >
            {{ props.file.protocole }}
          </p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
</template>

<script lang="ts" setup>
import type { FileProps } from './constants/ThirdStage'
import { motion, AnimatePresence } from 'motion-v'

const emit = defineEmits<{
  'handle-click': [id: number]
}>()

const props = defineProps<{
  file: FileProps
}>()
</script>

<style scoped>
.green {
  background-color: #2a6a3a;
  color: #b0e8c0;
}
.blue {
  background-color: #3a5a9a;
  color: #c8d8ff;
}
.green-text {
  color: #2a6a3a;
}
.blue-text {
  color: #3a5a9a;
}
.card {
  background-color: #f5f0e0;
  color: #7a6040;
  border-radius: 12px;
  padding: 1px;
}
.field {
  display: flex;
  flex-direction: column;
  border-bottom: 1px #7a6040 dashed;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
