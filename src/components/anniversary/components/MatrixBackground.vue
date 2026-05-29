<template>
  <div class="relative min-h-screen overflow-auto">
    <canvas ref="canvasRef" class="fixed inset-0 w-full h-full bg-black" />

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  const canvas = canvasRef.value!
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d')!

  const fontSize = 16
  const columns = Math.floor(canvas.width / fontSize)
  const drops = new Array(columns).fill(1)

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#00ff41'
    ctx.font = `${fontSize}px monospace`

    drops.forEach((y, i) => {
      const char = String.fromCharCode(0x30a0 + Math.random() * 96)
      ctx.fillText(char, i * fontSize, y * fontSize)
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
      drops[i]++
    })
  }
  setInterval(draw, 33)
})
</script>

<style scoped></style>
