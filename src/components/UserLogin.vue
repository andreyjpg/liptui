<script setup lang="ts">
import TextField from './utils/TextField.vue'
import BackgroundBubbles from './utils/BackgroundBubbles.vue'
import { ref } from 'vue'
import router from '@/router'
const email = ref('')
const password = ref('')
const handleMoveToHomeContainer = () => {
  router.push('/home')
}
</script>

<template>
  <BackgroundBubbles />
  <div class="absolute flex w-full h-full z-20 items-center justify-center">
    <div
      class="relative border border-gray-200 text-center shadow-2xl md:h-1/2 md:w-1/3 rounded-xl bg-gray-50 p-4 overflow-hidden"
    >
      <div class="blob-pruple absolute top-56 left-[-50px]"></div>
      <div class="blob-green absolute top-[-40px] left-[-40px]"></div>
      <div class="blob-red absolute top-[-60px] left-24"></div>

      <div class="z-10 relative">
        <TextField custom-style="{color: white}" :value="email" type="text" label="Email" />
        <TextField :value="password" type="password" label="Contraseña" />
      </div>

      <button
        class="bg-blue-400 rounded-md w-32 text-white px-4 py-2 mt-3 absolute z-10"
        @click="handleMoveToHomeContainer"
      >
        Enter
      </button>
    </div>
  </div>
</template>

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
</style>
