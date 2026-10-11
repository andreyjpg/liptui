<template>
  <div class="fixed inset-0 z-20 bg-black/50">
    <motion.div
      class="modal h-[80%] w-[95%] lg:w-2/3 m-auto py-5 px-2 inset-0 flex flex-col items-center justify-center"
      :initial="{ opacity: 0, scale: 0 }"
      :animate="{ opacity: 1, scale: [0, 1] }"
      :exit="{ opacity: 0, scale: 0 }"
      :transition="{ duration: 0.5 }"
    >
      <a @click="emit('close')" class="w-full flex justify-end">
        <Close fillColor="#cdbfae" />
      </a>
      <AnimatePresence mode="wait"
        ><InvitationScreen
          @changeStage="changeStage"
          key="invitation"
          v-if="stageInvitation === 0" />
        <OpenLetter @changeStage="changeStage" key="letter" v-if="stageInvitation === 1" />
        <DateTicket @changeStage="changeStage" key="ticket" v-if="stageInvitation === 2"
      /></AnimatePresence>
    </motion.div>
  </div>
</template>

<script lang="ts" setup>
import { motion, AnimatePresence } from 'motion-v'
import { ref } from 'vue'
import Close from 'vue-material-design-icons/Close.vue'

import InvitationScreen from './InvitationScreen.vue'
import OpenLetter from './OpenLetter.vue'
import DateTicket from './DateTicket.vue'

const emit = defineEmits<{ close: [] }>()

const stageInvitation = ref(0)

const changeStage = (stage: number) => {
  stageInvitation.value = stage
}
</script>

<style scoped>
.modal {
  position: absolute;
  border-radius: 10px;
  background-color: #2d2230;
}
</style>
