<template>
  <motion.div
    :initial="{ opacity: 0 }"
    :exit="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 1 }"
    class="letter w-full max-w-sm aspect-3/4 py-5 px-8"
  >
    <div class="flex flex-col gap-4">
      <span class="secondary text-xs font-cormorant">De Costa Rica</span>
      <span class="primary text-xl font-ebGaramond">Mon amour,</span>
      <span class="primary text-xs font-ebGaramond"
        >Dans quelques semaines, je traverse l'Atlantique. Et avant même de poser mes valises,
        j'aimerais réserver une soirée rien que pour nous deux.</span
      >
      <span class="primary text-xs font-ebGaramond">Juste toi, moi, et une table pour deux.</span>
      <span class="ternary text-xl font-ebGaramond">Me feras-tu l'honneur d'un date night ?</span>
      <div class="w-full border border-[#d9c9ad]"></div>
      <table>
        <thead>
          <th class="secondary text-sm font-cormorant text-left">Quand</th>
          <th class="secondary text-sm font-cormorant text-left">OÚ</th>
          <th class="secondary text-sm font-cormorant text-left">Tenue</th>
        </thead>
        <tbody>
          <tr>
            <td class="primary text-[0.65rem] font-cormorant">
              le 7 novembre 2026, <br />
              18 heures
            </td>
            <td class="primary text-[0.65rem] font-cormorant">
              Little Red Door, <br />puis un dîner secret
            </td>
            <td class="primary text-[0.65rem] font-cormorant">Ta plus jolie tenue</td>
          </tr>
        </tbody>
      </table>
      <div class="w-full border border-[#d9c9ad]"></div>
      <div class="flex flex-col items-end w-full">
        <span class="secondary text-sm font-cormorant"> Avec tout mon cœur, </span>
        <span class="primary text-2xl font-pinyon">Andrey</span>
      </div>
      <div class="flex flex-row justify-evenly">
        <motion.button
          :while-hover="{
            scale: 1.2,
            backgroundColor: '#6d1f25',
          }"
          @click="emit('changeStage', 2)"
          class="text-[#f7f0e3] bg-[#8e2b32] rounded-3xl py-1 px-2 flex flex-row gap-2 items-center"
          ><Heart size="14" /><span class="font-ebGaramond text-sm">Oui, j'accepte</span>
        </motion.button>
        <motion.button
          class="bg-transparent border rounded-3xl border-[#b9a88f] text-[#8a7a72] border-dotted py-1 px-3 line-through"
          ><span class="font-ebGaramond text-sm">Je refuse</span></motion.button
        >
      </div>
    </div>
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'
import Heart from 'vue-material-design-icons/HeartOutline.vue'

const emit = defineEmits<{
  changeStage: [stage: number]
}>()
</script>

<style scoped>
.letter {
  background-color: #f7f0e3;
}
.primary {
  color: #2d2330;
}
.secondary {
  color: #6b5a55;
}
.ternary {
  color: #8e2b32;
}
</style>
