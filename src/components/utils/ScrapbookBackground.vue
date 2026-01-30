<template>
  <div class="background-paper"></div>
  <div class="sticker default"></div>
  <div class="sticker coral"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
onMounted(() => {
  gsap.to('.blob', {
    y: 20,
    x: -10,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
})
</script>

<style scoped>
.background-paper {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #72afe0;
}
.sticker {
  position: absolute;
  width: 50px;
  height: 100px;
  border-radius: 0px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.sticker.default {
  background-color: rgba(255, 255, 255, 0.2);
  transform: rotate(130deg);
  right: 0px;
}

.sticker.coral {
  background: #ff8a80;
  opacity: 0.4;
  transform: rotate(45deg);
}

.b1 {
  background: #7c7cff;
  top: 10%;
  left: 10%;
}
.b2 {
  background: #f0ff7c;
  top: 40%;
  left: 60%;
  animation-delay: -6s;
}
.b3 {
  background: #7cffd7;
  top: 70%;
  left: 30%;
  animation-delay: -12s;
}
</style>
