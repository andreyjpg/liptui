<script lang="ts" setup>
const props = defineProps({
  onclick: () => {},
  styleColor: String,
})
</script>

<template>
  <button type="button" @onClick="props.onclick" :class="props.styleColor">
    <slot></slot>
  </button>
</template>

<style scoped></style>
