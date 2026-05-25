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
    <BackgroundImage :image="parisImage">
      <div>
        <div class="flex flex-row justify-between top-0 px-4 py-5">
          <div class="text-lg text-spyGreen font-sourceCode">Mission 2 - Paris</div>
          <div class="text-lg text-spyGreen font-sourceCode">Fragment: LIS - ??</div>
        </div>
        <AnimatePresence>
          <motion.p
            v-if="showWin"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ delay: 0.5, duration: 1 }"
            class="text-xl font-spaceGrotesk text-spyGreen text-center mt-10"
          >
            MESSAGE DÉCHIFFRÉ
            <br />Fragment 02: 06
          </motion.p>
        </AnimatePresence>
        <div class="bg-[#f5f0e0] p-5 rounded-xl flex flex-col gap-5 w-1/2 m-auto h-full mt-5">
          <div class="flex justify-between border-b pb-3 border-[#c8b880]">
            <p class="text-[#8a7a50] font-spaceGrotesk">Transmission Chiffré:</p>
            <p class="text-[#8a7a50] font-spaceGrotesk">Origine: Paris</p>
          </div>

          <p class="text-[#8a7a50] font-sourceCode text-sm">Message reçu:</p>

          <div class="flex flex-row gap-5 border-b border-[#c8b880] border-dashed pb-7">
            <div v-for="(char, index) in SECRET_WORD" :key="`${char}-${index}`">
              <PidgenChar :char="char" />
              <input
                type="text"
                class="bg-none text-[#3a2a10] w-5 mt-3 self-center text-center"
                placeholder="?"
                maxlength="1"
                v-model="answerCode[index]"
                :key="index"
              />
            </div>
          </div>
          <!-- <p class="font-sourceCode text-[#8a7a50] text-sm">Clé de déchiffrement</p> -->
          <div class="flex flex-row justify-evenly mt-4">
            <AIPigpen />
            <JRPidgen />
            <SXPidgen />
            <YZPidgen />
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
            @click="() => emit('change-stage', 3)"
          >
            Prochaine mission
          </motion.button>
        </div>
      </div>
    </BackgroundImage>
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'
import BackgroundImage from '../utils/BackgroundImage.vue'
import parisImage from '@/assets/paris.jpg'
import AIPigpen from './svg/AIPigpen.vue'
import JRPidgen from './svg/JRPidgen.vue'
import SXPidgen from './svg/SXPidgen.vue'
import YZPidgen from './svg/YZPidgen.vue'
import PidgenChar from './svg/PidgenChar.vue'
import { ref, watch } from 'vue'
import { AnimatePresence } from 'motion-v'

const emit = defineEmits<{ 'change-stage': [value: number] }>()

const SECRET_WORD = 'FLASHINVADERS'

const answerCode = ref(new Array(SECRET_WORD.length).fill(''))
const showWin = ref(false)

watch(
  answerCode,
  (newAnswer) => {
    const code = newAnswer.join('').toLocaleUpperCase()
    if (code === SECRET_WORD) showWin.value = true
  },
  { deep: true },
)
</script>

<style></style>
