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
    <BackgroundImage :image="Paracas">
      <div class="flex flex-row justify-between top-0 px-4 py-5">
        <div class="text-lg text-spyGreen font-sourceCode">Mission 3 - Perou</div>
        <div class="text-lg text-spyGreen font-sourceCode">Fragment: LIS - 06 - ??</div>
      </div>
      <div class="flex flex-col justify-center items-center mt-5 gap-1">
        <div class="flex gap-5 items-center">
          <AlertIcon class="text-spyGreen" size="40" />
          <p class="text-2xl text-white font-spaceGrotesk">Conflit de renseignement</p>
        </div>
        <motion.div
          v-if="!showError && !showWin"
          :initial="{
            opacity: 0,
          }"
          :animate="{
            opacity: 1,
          }"
          :exit="{
            opacity: 0,
          }"
          :transition="{ duration: 1 }"
        >
          <p class="text-white font-spaceGrotesk text-xl">
            Il y a deux vérités. Laquelle appartient à l'agent ?
          </p>
          <p class="text-white opacity-50 font-spaceGrotesk text-lg text-center">
            Les deux versions sont réelles. <br />Mais l'agent opère selon son propre protocole.
            <br />Identifie sa version.
          </p>
        </motion.div>
        <motion.div
          v-else-if="showError"
          :initial="{
            opacity: 0,
          }"
          :animate="{
            opacity: 1,
          }"
          :exit="{
            opacity: 0,
          }"
          :transition="{ duration: 1 }"
        >
          <p class="text-red-500 font-spaceGrotesk text-xl">
            Non, ce n'est pas la bonne reponse, cliquez l'autre choix
          </p>
        </motion.div>
        <motion.div
          v-else-if="showWin"
          :initial="{
            opacity: 0,
          }"
          :animate="{
            opacity: 1,
          }"
          :exit="{
            opacity: 0,
          }"
          :transition="{ duration: 1 }"
        >
          <p class="text-spyGreen font-spaceGrotesk text-xl">Dossier validé - Fragment 03 = 04</p>
        </motion.div>
      </div>
      <div class="flex flex-row gap-5 justify-center mt-5">
        <div v-for="file in FILES_DATA" :key="file.id" class="w-1/3">
          <SecretFiles :file="file" @handle-click="handleClickFile"></SecretFiles>
        </div>
      </div>
      <div class="flex justify-center">
        <motion.button
          v-if="showWin"
          :while-hover="{
            scale: 1.12,
          }"
          id="start-button"
          class="cursor-pointer hover:bg-green-800 boder bg-green-600 rounded-xl px-2 py-1 font-vt323 text-white text-xl mt-5"
          @click="() => emit('change-stage', 4)"
        >
          Prochaine mission
        </motion.button>
      </div>
    </BackgroundImage>
  </motion.div>
</template>

<script lang="ts" setup>
import Paracas from '@/assets/paracas.jpg'
import BackgroundImage from '../../utils/BackgroundImage.vue'
import { motion } from 'motion-v'
import AlertIcon from 'vue-material-design-icons/AlertOutline.vue'
import { ref, watch } from 'vue'
import SecretFiles from '../components/SecretFiles.vue'
import { FILES_DATA } from '../constants/ThirdStage'

const emit = defineEmits<{
  'change-stage': [stage: number]
}>()

const selectedFile = ref(0)
const showWin = ref(false)
const showError = ref(false)

const handleClickFile = (id: number) => {
  if (!showWin.value) {
    selectedFile.value = id
  }
}

watch(selectedFile, (newSelection) => {
  if (newSelection === 2) {
    showError.value = false
    showWin.value = true
  } else {
    showError.value = true
  }
})
watch(showError, () => {
  setTimeout(() => {
    showError.value = false
  }, 2000)
})
</script>

<style></style>
