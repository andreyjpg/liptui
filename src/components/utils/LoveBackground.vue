<template>
  <div class="relative min-h-screen overflow-hidden">
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-rose-200 py-20">
      <div v-for="(icon, i) in icons" :key="i" class="icon-floating">
        <MusicIcon v-if="icon === 'music'" />
        <HeartIcon v-else />
      </div>
    </div>
    <div class="relative z-10 min-h-screen w-full flex items-start justify-center pt-20 px-4">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MusicIcon from 'vue-material-design-icons/Music.vue'
import HeartIcon from 'vue-material-design-icons/Heart.vue'
import gsap from 'gsap'
import { onMounted } from 'vue'

const icons = Array.from({ length: 30 }, () => (Math.random() > 0.5 ? 'music' : 'heart'))

onMounted(() => {
  gsap.utils.toArray<HTMLElement>('.icon-floating').forEach((el) => {
    const startY = window.innerHeight + gsap.utils.random(50, 200)
    const endY = -gsap.utils.random(50, 200)
    gsap.set(el, {
      x: gsap.utils.random(0, window.innerWidth),
      y: startY,
      rotate: gsap.utils.random(0, 45),
      scale: gsap.utils.random(0.6, 1.2),
      opacity: gsap.utils.random(0.3, 0.7),
    })

    gsap.to(el, {
      y: endY,
      x: `+=${gsap.utils.random(-100, 100)}`,
      duration: gsap.utils.random(8, 14),
      rotate: gsap.utils.random(0, 45),
      ease: 'none',
      repeat: -1,
      delay: gsap.utils.random(0, 5),
    })
  })
})
</script>

<style scoped>
.icon-floating {
  position: absolute;
  height: 30px;
  width: 30px;
  color: oklch(71.2% 0.194 13.428);
}
</style>
