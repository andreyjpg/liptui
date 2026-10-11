<template>
  <motion.div
    :initial="{ opacity: 0 }"
    :exit="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 2 }"
    class="flex flex-col gap-5 justify-center items-center"
  >
    <p class="font-ebGaramond text-4xl textBody">C'est un rendez-vous.</p>
    <span class="textBody font-cormorant text-md"
      >Ta réponse est bien arrivée. J'ai déjà hâte.</span
    >
    <div class="grid grid-cols-3 bg-[#f7f0e3] rounded-lg">
      <div class="bg-[#8e2b32] flex flex-col gap-5 rounded-l-lg rounded-bl-lg py-2 px-3 textBody">
        <span class="font-cormorant text-sm">Billet</span>
        <span class="font-ebGaramond text-xl">Date night</span>
        <span class="font-cormorant text-[10px]">Valable pour toi seule.</span>
      </div>
      <div class="col-span-2 py-2 px-3">
        <div class="grid grid-cols-2 gap-5">
          <div class="flex flex-col">
            <p class="secondary font-cormorant text-sm">Quand</p>
            <p class="primary font-cormorant text-xs">
              le 7 novembre 2026, <br />
              18 heures
            </p>
          </div>
          <div class="flex flex-col">
            <p class="secondary font-cormorant text-sm">Oú</p>
            <p class="primary font-cormorant text-xs">
              Little Red Door, <br />puis un dîner secret
            </p>
          </div>
          <p class="flex secondary font-cormorant text-[8px] items-end">
            Billet à présenter avant le départ.
          </p>
          <p class="primary font-pinyon text-3xl">Lucie</p>
        </div>
      </div>
    </div>
    <a class="underline textBody text-sm font-cormorant" @click="emit('changeStage', 0)"
      >Relire la lettre</a
    >
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'
const emit = defineEmits<{
  changeStage: [stage: number]
}>()
</script>

<style scoped>
.textBody {
  color: #f7f0e3;
}
.primary {
  color: #2d2330;
}
.secondary {
  color: #6b5a55;
}
</style>
