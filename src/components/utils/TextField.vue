<script lang="ts" setup>
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  type: String,
  label: String,
  customStyle: String,
})
</script>

<template>
  <div class="flex-col items-center flex gap-3 mt-4">
    <label class="font-bold text-white">{{ props.label }}</label>
    <input
      class="p-2 border border-gray-200 bg-white shadow-md rounded-lg w-2/3"
      :type="props.type"
      :value="props.value"
    />
  </div>
</template>

<style scoped></style>
