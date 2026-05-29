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
    <BackgroundImage :image="lisbonImage">
      <div>
        <div class="flex flex-row justify-between top-0 px-4 py-5">
          <div class="text-lg text-spyGreen font-sourceCode">Mission 1 - Lisbonne</div>
          <div class="text-lg text-spyGreen font-sourceCode">Fragment: ??</div>
        </div>
        <div class="flex flex-col justify-center items-center h-full mt-3 gap-5">
          <div class="text-center">
            <AnimatePresence>
              <motion.div
                v-if="!showWinnerMessage"
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :transition="{ delay: 0.5, duration: 1 }"
              >
                <p class="font-spaceGrotesk text-xl text-white opacity-50">
                  Reconstituer la séquence
                </p>
                <p class="text-white text-2xl font-sourceCode">
                  Remets les événements dans le bon ordre
                </p>
              </motion.div>
              <motion.p
                v-else
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :transition="{ delay: 0.5, duration: 1 }"
                class="text-xl font-spaceGrotesk mt-2 text-spyGreen"
              >
                ACCÈS AUTORISÉ
                <br />
                Vous connaissez la vérité mieux que n'importe quel agent. <br />Fragment 01: LIS
              </motion.p>
            </AnimatePresence>
          </div>
          <div class="grid grid-cols-1">
            <VueDraggable
              ref="el"
              v-model="listOfOptions"
              class="flex flex-col gap-3"
              :animation="200"
              @update="handleUpdate"
              filter=".locked"
            >
              <div
                v-for="(item, index) in listOfOptions"
                :key="item.id"
                :class="[
                  'flex flex-row items-center gap-3 cursor-grab',
                  { locked: showWinnerMessage },
                ]"
              >
                <p class="font-sourceCode text-spyGreen">{{ index }}</p>
                <PostItNotes :color="item.color">{{ item.value }}</PostItNotes>
              </div>
            </VueDraggable>
          </div>
          <motion.button
            v-if="showWinnerMessage"
            :while-hover="{
              scale: 1.12,
            }"
            id="start-button"
            class="cursor-pointer hover:bg-green-800 boder mt-2 bg-green-600 rounded-xl px-2 py-1 font-vt323 text-white text-xl"
            @click="() => emit('change-stage', 2)"
          >
            Prochaine mission
          </motion.button>
        </div>
      </div>
    </BackgroundImage>
  </motion.div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BackgroundImage from '../../utils/BackgroundImage.vue'
import lisbonImage from '@/assets/noite-lisbon.jpg'
import { motion, AnimatePresence } from 'motion-v'
import { VueDraggable } from 'vue-draggable-plus'
import { ANSWERS } from '../constants/FirstStage'
import { shuffle } from '@/utils'
import PostItNotes from '../../utils/PostItNotes.vue'

const emit = defineEmits<{ 'change-stage': [value: number] }>()

const listOfOptions = ref(shuffle(ANSWERS))
const showWinnerMessage = ref(false)

const handleUpdate = () => {
  const options = [...listOfOptions.value]
  const filteredAnswers = options.filter((option, index) => {
    return option.id !== index + 1
  })
  if (filteredAnswers.length === 0) handleWinner()
}

const handleWinner = () => {
  showWinnerMessage.value = true
}
</script>

<style></style>
