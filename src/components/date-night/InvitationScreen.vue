<template>
  <motion.div
    :initial="{ opacity: 0 }"
    :exit="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 1 }"
  >
    <p class="font-cormorant text-center text-2xl my-10 text-[#cdbfae]">
      Une lettre est arrivée pour toi
    </p>
    <EnvelopeDate
      @changeStage="(stage: number) => emit('changeStage', stage)"
      size="normal"
    ></EnvelopeDate>
    <p class="font-cormorant italic text-center text-xl my-10 text-[#cdbfae]">
      Brise le sceau pour l'ouvrir
    </p>
  </motion.div>
</template>

<script lang="ts" setup>
import EnvelopeDate from './EnvelopeDate.vue'

import { motion } from 'motion-v'

const emit = defineEmits<{ changeStage: [stage: number] }>()
</script>

<style scoped></style>
