<template>
  <div
    class="absolute z-20 flex justify-center p-4 rounded-lg gap-8 mt-4 left-1/2 -translate-x-[50%] blur-bg"
  >
    <RouterLink
      exact-active-class="active-link"
      class="hover:text-sky-500 menu-option"
      to="/counter"
      >Counter</RouterLink
    >
    <RouterLink exact-active-class="active-link" class="hover:text-sky-500 menu-option" to="/bucket"
      >Bucket List</RouterLink
    >
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.active-link {
  font-weight: 700;
  color: #a78bfa;
  -webkit-text-decoration: #ff3b5f underline wavy;
  text-decoration: #ff3b5f underline wavy;
}
.blur-bg {
  background-color: transparent;
  backdrop-filter: blur(10px);
}
.menu-option {
  transition: transform 0.2s ease;
}

.menu-option:hover {
  transform: scale(1.1);
}
</style>
