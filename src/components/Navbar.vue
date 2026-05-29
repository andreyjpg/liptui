<template>
  <div
    class="absolute z-20 flex justify-center p-4 items-center rounded-lg gap-8 mt-4 left-1/2 -translate-x-[50%] blur-bg"
  >
    <RouterLink
      exact-active-class="active-link"
      class="hover:text-pink-500 text-blue-400 menu-option text-nowrap"
      to="/counter"
      >Nos retrouvailles</RouterLink
    >
    <RouterLink
      exact-active-class="active-link"
      class="hover:text-pink-500 text-blue-400 menu-option text-nowrap"
      to="/playlist"
      >Notre histoire</RouterLink
    >
    <RouterLink
      exact-active-class="active-link"
      class="hover:text-pink-500 text-blue-400 menu-option text-nowrap"
      to="/first-anniversary"
      >La mission
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.active-link {
  font-weight: 700;
  color: var(--color-pink-800);
  -webkit-text-decoration: #ff3b5f underline wavy;
  text-decoration: #ff3b5f underline wavy;
}
.blur-bg {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.menu-option {
  transition: transform 0.2s ease;
}

.menu-option:hover {
  transform: scale(1.1);
}
</style>
