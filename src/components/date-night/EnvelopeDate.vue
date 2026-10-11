<template>
  <div
    :class="[
      'envelope',
      props.size === 'normal' ? 'lg:w-[540px] lg:h-[300px] w-[350px] h-[200px]' : 'small',
    ]"
  >
    <div class="side-left"></div>
    <div class="side-right"></div>
    <div class="side-top"></div>
    <div class="side-bottom"></div>
    <AnimatePresence @exit-complete="emit('changeStage', 1)">
      <motion.div
        :exit="{ opacity: 0, scale: 2 }"
        :transition="{ duration: 1 }"
        :class="['seal m-auto ', props.size === 'small' ? 'w-3 h-3' : 'lg:w-24 lg:h-24 w-20 h-20']"
        @click="handleSealClick"
        v-if="isSealVisible || props.size === 'small'"
      >
        <div
          :class="[
            'secondary-seal m-auto',
            props.size === 'small' ? 'w-2 h-2' : 'lg:w-18 lg:h-18 w-14 h-14',
          ]"
        ></div>
        <HeartIcon class="heartIcon" :size="28" fillColor="#f6dccd" />
      </motion.div>
    </AnimatePresence>

    <div
      class="flex flex-col items-center justify-center w-full leading-tight bottom-1 absolute gap-0"
      v-if="props.size === 'normal'"
    >
      <span class="font-cormorant text-[#6d1f25] text-sm mt-5">Pour</span>
      <span class="font-pinyon font-thin italic text-[#6d1f25] text-3xl">Lucie Guitton</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeartIcon from 'vue-material-design-icons/HeartOutline.vue'
import { motion, AnimatePresence } from 'motion-v'
import { ref } from 'vue'
const props = defineProps<{ size: 'small' | 'normal' }>()

const isSealVisible = ref(true)

const handleSealClick = () => {
  isSealVisible.value = false
}

const emit = defineEmits<{
  (e: 'changeStage', stage: number): void
}>()
</script>

<style lang="css" scoped>
.envelope {
  background-color: #eadbc3;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  margin: auto;
}
.small {
  width: 60px;
  height: 35px;
}
.side-left {
  position: absolute;
  inset: 0;
  clip-path: polygon(0 0, 50% 56%, 0 100%);
  background-color: #e2d1b6;
}
.side-right {
  position: absolute;
  inset: 0;
  clip-path: polygon(100% 0, 50% 56%, 100% 100%);
  background-color: #e2d1b6;
}
.side-top {
  position: absolute;
  inset: 0;
  clip-path: polygon(0 0, 100% 0, 50% 58%);
  background-color: #e6d6bc;
}
.side-bottom {
  position: absolute;
  inset: 0;
  clip-path: polygon(0 100%, 50% 48%, 100% 100%);
  background-color: #efe3cf;
}
.seal {
  background-color: #6d1f25;
  border-radius: 100%;
  position: absolute;
  inset: 0;
}
.secondary-seal {
  background-color: #8e2b32;
  border-radius: 100%;
  position: absolute;
  inset: 0;
}
.heartIcon {
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
