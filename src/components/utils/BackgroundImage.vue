<template>
  <div class="relative min-h-screen overflow-auto">
    <img se :src="props.image" class="fixed inset-0 w-full h-full" draggable="false" />
    <div v-if="!props.noOverlay" class="overlay"></div>

    <div class="absolute w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['image', 'noOverlay'])
</script>

<style>
img {
  max-width: 100%;
  height: auto;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 12, 30, 0.7);
  pointer-events: none;
}
</style>
