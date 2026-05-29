<template>
  <div class="background">
    <div class="grid-container">
      <aside class="left">
        <PhotoLayout
          v-for="photo in getPartArray(photos as PhotosProps[], true)"
          :key="photo?.id!"
          :photo="photo"
        ></PhotoLayout>
      </aside>
      <div class="content leading-relaxed">
        Hi!, congratulations for finishing the game agent <b class="text-[#D4789A]">Lucie</b>, my
        kidnap was a little lie I just wanted to entretain yourself until you reached this point. I
        will continue in english because I don't have that much time left hehe. <br /><br />
        I hope you enjoyed it. My idea was to remember our trips and moments together. It's already
        a year that we had met wow. And any second I spent with you is simply
        <b class="text-[#D4789A]">wonderful</b>, maybe we're at the distance for now but we had been
        in many adventures so far, and more to come... so excited for that! <br />
        <br />
        All this time with you had showed me how <b class="text-[#D4789A]">amazing</b> you are,
        thank you for the talks, laughts, dances you always find a way to make me happy and give
        support me even if I'm not in the best of the times. <br /><br />

        You really mean a lot to me, I can't really described how much in simple words, but I
        believe that also by doing this app shows it too.
        <br />
        <br />

        <b class="text-[#D4789A]"
          >I'm really in love with you, I love you from the sun to Venus.
        </b>

        <p class="font-parisienne text-[#D4789A] text-5xl font-bold text-center mt-10">
          Joyeux premier anniversaire, <br />
          mi princesa
        </p>
      </div>
      <aside>
        <PhotoLayout
          v-for="photo in getPartArray(photos as PhotosProps[])"
          :key="photo?.id!"
          :photo="photo"
        ></PhotoLayout>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import confetti from 'canvas-confetti'
import { onMounted, onUnmounted } from 'vue'
import {
  useGetPhotosAnniversary,
  type PhotosProps,
} from '@/queries/anniversary/useGetPhotosAnniversary'
import PhotoLayout from '@/components/utils/PolaroidPhoto.vue'
const { data: photos } = useGetPhotosAnniversary()

let interval: ReturnType<typeof setInterval> | null = null

const getPartArray = (array: PhotosProps[], isHalfDown: boolean = false) => {
  if (!!array) {
    const half = Math.ceil(array.length / 2)
    const response = isHalfDown ? array.slice(0, half) : array.slice(half, array.length)
    return response
  }
}

const fireFirework = () => {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() * 0.6,
    },
  })
}

onMounted(() => {
  interval = setInterval(fireFirework, 500)
  setTimeout(() => {
    if (interval) clearInterval(interval)
  }, 10000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.content {
  background-color: #fdf6e8;
  font-family: var(--font-lora);
  font-size: 16px;
  width: 40vw;
  height: 80%;
  padding: 20px;
  border-radius: 10px;
  color: #1e2a3a;
}
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 20px;
  min-height: 100vh;
}
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}

aside :deep(.polaroid) {
  margin-top: -80px;
}

.background {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 112px;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-color: var(--color-rose-200);
}
</style>
