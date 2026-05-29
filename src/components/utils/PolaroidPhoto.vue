<template>
  <AnimatePresence>
    <motion.div
      class="polaroid"
      :initial="{
        opacity: 0,
        scale: 3,
      }"
      :animate="{
        opacity: 1,
        scale: 0.8,
        rotate: randomRotation(),
      }"
      :transition="{ duration: 2 }"
    >
      <img class="image" :src="props.photo.imageUrl" alt="" />
      <p class="font-playFair text-blue-400 text-center text-xs">
        {{ props.photo.place }}, {{ formatDateMonthYear(props.photo.date) }}
      </p>
    </motion.div>
  </AnimatePresence>
</template>

<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
import { formatDateMonthYear } from '@/utils'
const props = defineProps<{
  photo: { imageUrl: string; place: string; date: Date; id: string }
}>()

const randomRotation = () => {
  const response = Math.random() > 0.5 ? Math.random() * 30 : Math.random() * -30
  return response
}
</script>

<style scoped>
.polaroid {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: white;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 30px;
  border-radius: 7px;
}
.image {
  height: 250px;
  width: 100%;
}
</style>
