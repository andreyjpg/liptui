<template>
  <div class="container">
    <p class="text-white font-spaceGrotesk text-3xl">Code d'accès requis</p>
    <p class="text-white opacity-50 font-spaceGrotesk text-xl">Assemble les fragments</p>
    <div class="grid grid-cols-1 items-center justify-center mt-10 gap-7 relative">
      <div
        class="grid grid-cols-3 gap-5 items-center"
        v-for="(mission, i) in missions"
        :key="mission.answer"
      >
        <span class="label">Mission {{ String(i + 1).padStart(2, '0') }}:</span>

        <input
          type="text"
          class="inputCode"
          :maxlength="mission.answer.length"
          v-model="mission.value"
        />
        <motion.div
          v-if="mission.error || mission.correct"
          :initial="{
            opacity: 0,
            x: -60,
          }"
          :animate="{
            opacity: 1,
            x: 0,
          }"
        >
          <AlertCircle v-if="mission.error" class="text-red-500" />
          <CheckCircle v-if="mission.correct" class="text-spyGreen" />
        </motion.div>
      </div>
      <motion.button
        v-if="showWin"
        :initial="{
          opacity: 0,
        }"
        :animate="{
          opacity: 1,
        }"
        :while-hover="{
          scale: 1.12,
        }"
        id="start-button"
        class="cursor-pointer hover:bg-green-800 boder bg-green-600 rounded-xl px-2 py-1 font-vt323 text-white text-xl"
        @click="() => handleChangeStage?.(6)"
      >
        Mission terminé
      </motion.button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'
import { inject, ref, watch } from 'vue'
import AlertCircle from 'vue-material-design-icons/AlertCircle.vue'
import CheckCircle from 'vue-material-design-icons/CheckCircle.vue'

const handleChangeStage = inject<(stage: number) => void>('changeStage')
const showWin = ref(false)

const missions = ref([
  { value: '', answer: 'LIS', correct: false, error: false },
  { value: '', answer: '06', correct: false, error: false },
  { value: '', answer: '04', correct: false, error: false },
  { value: '', answer: 'PERUDO', correct: false, error: false },
  { value: '', answer: 'LIPTUI', correct: false, error: false },
])

const timers: ReturnType<typeof setTimeout>[] = []

const checkWinner = () => {
  const missionCompleted = missions.value.filter((mission) => mission.correct)
  if (missionCompleted.length === missions.value.length) {
    showWin.value = true
  }
}

missions.value.forEach((mission, i) => {
  watch(
    () => missions.value[i]!.value,
    (newValue) => {
      missions.value[i]!.correct = false
      missions.value[i]!.error = false
      clearTimeout(timers[i])
      timers[i] = setTimeout(() => {
        if (newValue.toUpperCase() === mission.answer) {
          missions.value[i]!.correct = true
          checkWinner()
        } else {
          missions.value[i]!.error = true
        }
      }, 2000)
    },
  )
})
</script>

<style scoped>
.container {
  background-color: #06080f;
  z-index: 3;
  position: absolute;
  width: 60vw;
  height: 70vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  align-items: center;
  border: 2px solid var(--color-spyGreen);
}
.inputCode {
  border: 1px solid var(--color-spyGreen);
  background-color: #100e1e;
  border-radius: 5px;
  font-family: var(--font-sourceCode);
  color: white;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.label {
  color: var(--color-spyGreen);
  text-align: center;
  font-size: 18px;
  align-self: center;
  font-family: var(--font-sourceCode);
}
</style>
