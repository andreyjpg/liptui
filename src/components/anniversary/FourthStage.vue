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
          <div class="text-lg text-spyGreen font-sourceCode">Mission 4 - Costa Rica</div>
          <div class="text-lg text-spyGreen font-sourceCode">Fragment: LIS - 06 - 04 - ??</div>
        </div>
        <div class="flex flex-col justify-center items-center mt-20">
          <p class="text-white font-sourceCode text-2xl">TRANSMISSION INTERCEPTÉE</p>
          <motion.p
            v-if="!showErrorBingo && !showWin"
            :initial="{
              opacity: 0,
              y: 3,
            }"
            :animate="{
              opacity: 1,
              y: 0,
            }"
            :transition="{ duration: 1 }"
            class="text-white opacity-50 font-spaceGrotesk text-lg text-center"
          >
            Des témoins ont photographié l'agent en plein nature. <br />Parmi les espèces
            ci-dessous, identifie celles qu'il a observées. Une erreur d'identification compromet la
            mission.
          </motion.p>
          <motion.p
            v-if="showErrorBingo"
            :initial="{
              opacity: 0,
              y: 20,
            }"
            :animate="{
              opacity: 1,
              y: 0,
            }"
            class="text-red-500 opacity-50 font-sourceCode text-lg text-center"
          >
            Erreur. L'agent a les yeux dans ses poches.
          </motion.p>
          <motion.p
            v-if="showWin"
            :initial="{
              opacity: 0,
              y: 20,
            }"
            :animate="{
              opacity: 1,
              y: 0,
            }"
            class="text-spyGreen font-sourceCode text-lg text-center"
          >
            Les souvenirs sont intacts, agent. Chaque animal, retrouvé.
            <br> FRAGMENT 04: PERUDO
          </motion.p>
        </div>
        <div class="grid grid-cols-3 w-1/2 self-center gap-3">
          <BingoCard
            @click-card="handleClickBingoCard"
            v-for="animal in animalBingo"
            :key="animal.id"
            :animal="animal"
          ></BingoCard>
        </div>
        <div class="flex justify-center">
          <motion.button
            v-if="showWin"
            :while-hover="{
              scale: 1.12,
            }"
            id="start-button"
            class="cursor-pointer hover:bg-green-800 boder bg-green-600 rounded-xl px-2 py-1 font-vt323 text-white text-xl mt-5"
            @click="() => emit('change-stage', 5)"
          >
            Prochaine mission
          </motion.button>
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
import { ref, watch } from 'vue'
import { shuffle } from '@/utils'
import BingoCard from './BingoCard.vue'

const emit = defineEmits<{ 'change-stage': [stage: number] }>()

const animalBingo = ref(shuffle(structuredClone(ANIMALS)))
const showErrorBingo = ref(false)
const showWin = ref(false)

const handleClickBingoCard = (id: number) => {
  const copyBingo = [...animalBingo.value]

  const animal = copyBingo.findIndex((animal) => animal.id === id)!
  if (!copyBingo[animal]!.isCorrect) {
    resetBingo()
    return
  }
  copyBingo[animal]!.isSelected = !copyBingo[animal]!.isSelected
  animalBingo.value[animal]! = copyBingo[animal]!
}

const resetBingo = () => {
  showErrorBingo.value = true
  console.log(ANIMALS)
  animalBingo.value = shuffle(structuredClone(ANIMALS))
}

watch(showErrorBingo, () => {
  setTimeout(() => (showErrorBingo.value = false), 3000)
})

watch(
  animalBingo,
  (newBingo) => {
    const bingoLeft = newBingo.filter((bingo) => bingo.isCorrect && !bingo.isSelected)
    if (bingoLeft.length === 0) showWin.value = true
  },
  { deep: true },
)
</script>

<style scoped></style>
