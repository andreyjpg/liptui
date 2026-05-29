<template>
  <motion.div
    :while-hover="{ scale: 1.1, transition: { duration: 0.5 } }"
    :class="`card font-bold ${props.color === 'random' ? pickRandom() : props.color}`"
  >
    <slot></slot>
  </motion.div>
</template>

<script lang="ts" setup>
import type { ColorType } from '@/utils/types'
import { motion } from 'motion-v'
const props = defineProps<{
  color: ColorType
  isCorrect?: boolean
}>()
const colors = ['yellow', 'green', 'blue', 'orange', 'pink']
const pickRandom = () => {
  const color = colors[Math.floor(Math.random() * colors.length)]
  return color
}
</script>

<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.35);
  height: 64px;
  width: 500px;
  align-items: center;
  border-radius: 7px;
  padding-left: 10px;
  align-content: center;
}
.pink {
  background-color: #f48fb1;
  color: #5a0030;
}
.yellow {
  background-color: #f9e84a;
  color: #3a3000;
}
.green {
  background-color: #a5d6a7;
  color: #1b4a1e;
}
.blue {
  background-color: #81d4fa;
  color: #003a55;
}
.orange {
  background-color: #ffcc80;
  color: #4a2800;
}
</style>
