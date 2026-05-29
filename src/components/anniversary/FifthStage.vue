<template>
  <CodeEnter v-if="true"></CodeEnter>

  <BackgroundImage :noOverlay="true" :image="Forest">
    <div class="flex flex-row justify-between top-0 px-4 py-5 fixed w-full z-10">
      <div class="text-lg text-spyGreen font-sourceCode">Mission 5 - La base secrète.</div>
      <div class="text-lg text-spyGreen font-sourceCode">Fragment: LIS - 06 - 04 - PERUDO</div>
    </div>
    <SecurityCode @click="toogleOpenCode" class="codeInvisible"></SecurityCode>

    <div class="scene">
      <SecurityCode class="code"></SecurityCode>
      <div @mousemove="coodinatesCapture" class="spotlight">
        <div class="light"></div>
      </div>
    </div>
  </BackgroundImage>
</template>

<script lang="ts" setup>
import BackgroundImage from '../utils/BackgroundImage.vue'
import CodeEnter from './CodeEnter.vue'
import Forest from '@/assets/forest.png'
import SecurityCode from './svg/SecurityCode.vue'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const showEnterCode = ref(false)

let xSetter: (val: number) => void
let ySetter: (val: number) => void

onMounted(() => {
  gsap.set('.light', { xPercent: -50, yPercent: -50 })

  xSetter = gsap.utils.pipe(
    gsap.utils.clamp(0, window.innerWidth),
    gsap.utils.snap(5),
    gsap.quickSetter('.light', 'x', 'px') as (val: number) => void,
  )
  ySetter = gsap.utils.pipe(
    gsap.utils.clamp(0, window.innerHeight),
    gsap.utils.snap(5),
    gsap.quickSetter('.light', 'y', 'px') as (val: number) => void,
  )
})

const toogleOpenCode = () => {
  showEnterCode.value = !showEnterCode.value
}
const coodinatesCapture = (event: MouseEvent) => {
  xSetter(event.x)
  ySetter(event.y)
}
</script>

<style scoped>
.scene {
  position: absolute;
  width: 100vw;
  height: 100vh;
  inset: 0;
}
.spotlight {
  background-color: #000;
  position: absolute;
  width: 100vw;
  height: 100vh;
  mix-blend-mode: multiply;
  overflow: hidden;
}
.light {
  position: absolute;
  background-image: radial-gradient(transparent 0em, white 0em);
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.code {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 70%;
  right: 15%;
  cursor: pointer;
}
.codeInvisible {
  width: 50px;
  height: 50px;
  top: 70%;
  right: 15%;
  opacity: 0.1;
  z-index: 1;
  position: absolute;
}
</style>
