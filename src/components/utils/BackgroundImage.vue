<template>
  <div class="relative min-h-screen overflow-auto">
    <img se :src="props.image" class="fixed inset-0 w-full h-full" draggable="false" />
    <div class="overlay"></div>

    <div class="absolute w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['image'])
</script>

<style>
img {
  max-width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(10, 12, 30, 0.82);
  pointer-events: none;
}
</style>
