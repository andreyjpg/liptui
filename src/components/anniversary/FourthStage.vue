<template>
  <motion.div
    class="w-full h-full"
    :initial="{
      opacity: 0,
    }"
    :animate="{
      opacity: 1,
    }"
    :transition="{ duration: 2 }"
  >
    <BackgroundImage :image="CostaRica">
      <div class="flex flex-col gap-5 justify-center pb-10">
        <div class="flex flex-row justify-between top-0 px-4 py-5 fixed w-full">
          <div class="text-lg text-spyGreen font-sourceCode">Mission 3 - Costa Rica</div>
          <div class="text-lg text-spyGreen font-sourceCode">Fragment: LIS - 06 - 04 - ??</div>
        </div>
        <div class="flex flex-col justify-center items-center mt-20">
          <p class="text-white font-sourceCode text-2xl">TRANSMISSION INTERCEPTÉE</p>
          <p class="text-white opacity-50 font-spaceGrotesk text-lg text-center">
            Des témoins ont photographié l'agent en plein nature. <br />Parmi les espèces
            ci-dessous, identifie celles qu'il a observées. Une erreur d'identification compromet la
            mission.
          </p>
        </div>
        <div class="grid grid-cols-3 w-1/2 self-center gap-3">
          <BingoCard v-for="animal in animalBingo" :key="animal.id" :animal="animal"></BingoCard>
        </div>
      </div>
    </BackgroundImage>
  </motion.div>
</template>

<script lang="ts" setup>
import BackgroundImage from '../utils/BackgroundImage.vue'
import CostaRica from '@/assets/costarica.jpg'
import { motion } from 'motion-v'
import { ANIMALS } from './constants/FourthStage'
import { ref } from 'vue'
import { shuffle } from '@/utils'
import BingoCard from './BingoCard.vue'

const animalBingo = ref(shuffle(ANIMALS))
</script>

<style scoped></style>
