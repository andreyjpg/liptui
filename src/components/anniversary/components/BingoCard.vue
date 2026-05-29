<template>
  <motion.div
    :while-hover="{
      scale: 1.1,
      y: -5,
    }"
    :while-press="{
      scale: [0.9, 1.1, 0.9, 1.1],
    }"
    @click="() => emit('click-card', props.animal.id)"
    :class="['bingoCard', props.animal.isSelected && 'bingoCardSelected']"
  >
    <img class="bingoImg" :src="props.animal.image" />
    <p>{{ props.animal.name }}</p>
  </motion.div>
</template>

<script lang="ts" setup>
import type { AnimalProp } from '../constants/FourthStage'
import { motion } from 'motion-v'

const emit = defineEmits<{ 'click-card': [id: number] }>()

const props = defineProps<{
  animal: AnimalProp
}>()
</script>

<style scoped>
.bingoImg {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  pointer-events: none;
}
.bingoCard {
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.55);
  color: rgba(180, 220, 160, 0.8);
  border: 1px solid rgba(80, 140, 80, 0.2);
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 5px;
}
.bingoCard:hover {
  background-color: rgba(60, 160, 80, 0.25);
  color: #a0ffb0;
  border: 1px solid rgba(100, 220, 140, 0.8);
}
.bingoCardSelected {
  background-color: rgba(60, 160, 80, 0.25);
  color: #a0ffb0;
  border: 1px solid rgba(100, 220, 140, 0.8);
}
</style>
