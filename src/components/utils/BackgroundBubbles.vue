<script lang="ts" setup>
import gsap from 'gsap'

import { onMounted } from 'vue'
const colors = ['#ff3b5f', '#4ade80', '#60a5fa', '#fbbf24', '#a78bfa']

onMounted(() => {
  const moveBlob = (el: HTMLElement) => {
    gsap.to(el, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
      duration: 10,
      ease: 'sine.inOut',
      onComplete: () => moveBlob(el),
      modifiers: {
        x: (value) => {
          const v = parseFloat(value)
          return ((v + window.innerWidth) % window.innerWidth) + 'px'
        },
        y: (value) => {
          const v = parseFloat(value)
          return ((v + Math.sin(v / 20)) % window.innerHeight) + 'px'
        },
      },
    })
  }

  gsap.utils.toArray<HTMLElement>('.blob').forEach((el) => {
    el.style.backgroundColor = gsap.utils.random(colors)

    // posición inicial random
    gsap.set(el, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
    })

    moveBlob(el) // iniciar movimiento libre
  })
})
</script>

<template>
  <div class="background">
    <div v-for="i in 40" :key="i" class="blob"></div>
  </div>
</template>

<style>
.background {
  position: fixed;
  inset: 0;
  overflow: hidden;
}

.particle {
  width: 12px;
  height: 12px;
  background: red;
  position: absolute;
  border-radius: 50%;
}
.blob {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  /* animation: morph 9s infinite ease-in-out alternate; */
}

@keyframes morph {
  0% {
    border-radius: 50% 40% 30% 50% / 60% 30% 40% 40%;
  }
  50% {
    border-radius: 50% 60% 60% 20% / 50% 40% 60% 20%;
  }
  100% {
    border-radius: 70% 30% 30% 50% / 40% 60% 40% 60%;
  }
}
</style>
