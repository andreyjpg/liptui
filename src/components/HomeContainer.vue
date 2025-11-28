<template>
  <BackgroundBubbles />
  <div class="absolute flex w-full h-full z-10 items-center justify-center">
    <div
      class="relative border border-gray-200 text-center shadow-2xl md:h-1/2 md:w-1/3 rounded-xl bg-gray-50 p-4 overflow-hidden"
    >
      <div class="blob-pruple absolute top-56 left-[-50px]"></div>
      <div class="blob-green absolute top-[-40px] left-[-40px]"></div>
      <div class="blob-red absolute top-[-60px] left-28"></div>
      <div class="blob-blue absolute bottom-[-70px] right-[-15px]"></div>

      <p
        class="font-inter absolute text-3xl text-white font-bold z-30 w-full text-center wrap text-animation"
      >
        Bon anniversaire
      </p>
      <p
        class="font-inter absolute text-3xl text-white font-bold mt-8 z-30 w-full text-center wrap text-animation"
      >
        Ma chérie
      </p>
      <div
        id="counter"
        class="bg-[#fbbf24] rounded-lg h-18 bottom-[50%] left-30 absolute text-white"
      >
        <div class="flex flex-row items-center gap-3 justify-center p-2 px-5">
          <div id="day" class="flex-col">
            <p>Days</p>
            <p>{{ days }}</p>
          </div>
          <div id="hour" class="flex-col">
            <p>Hours</p>
            <p>{{ hours }}</p>
          </div>
          <div id="minute" class="flex-col">
            <p>Minutes</p>
            <p>{{ minutes }}</p>
          </div>
          <div class="flex-col">
            <p>seconds</p>
            <span ref="secondsRef" class="inline-block">{{ seconds }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import BackgroundBubbles from './utils/BackgroundBubbles.vue'
import { onMounted, ref, onUnmounted, watch } from 'vue'
const tl = gsap.timeline({ delay: 0.5 })
const targetDate = new Date('2025-12-27T23:00:00Z').getTime()

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

const intervalId: any = null

function updateCountdown() {
  const now = Date.now()
  const diff = targetDate - now

  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = '00'
    clearInterval(intervalId)
    return
  }

  const totalSeconds = Math.floor(diff / 1000)

  const d = Math.floor(totalSeconds / (60 * 60 * 24))
  const h = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  days.value = String(d)
  hours.value = String(h).padStart(2, '0')
  minutes.value = String(m).padStart(2, '0')
  seconds.value = String(s).padStart(2, '0')
}

onMounted(() => {
  updateCountdown()
  tl.intervalId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => clearInterval(intervalId))

onMounted(() => {
  tl.from('#counter', {
    y: 30,
    opacity: 0,
    ease: 'power1.in',
    stagger: 0.03,
  })
  const split = SplitText.create('.text-animation', { type: 'chars' })
  tl.from(split.chars, {
    opacity: 0,
    y: 30,
    ease: 'elastic',
    stagger: {
      each: 0.03,
      from: 'edges',
    },
  })
})

const secondsRef = ref(null)

watch([seconds, minutes, hours, days], async () => {
  gsap.fromTo(
    secondsRef.value,
    { y: -20, opacity: 0, scale: 0.7 },
    { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' },
  )
})
</script>

<style scoped>
.blob-pruple {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: #a83aff;
}

.blob-green {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: #4ade80;
}

.blob-red {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: #ff3b5f;
}
.blob-blue {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: #60a5fa;
}
</style>
