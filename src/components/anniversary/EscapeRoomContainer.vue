<script lang="ts" setup>
import { provide, ref } from 'vue'
import { onMounted } from 'vue'
import IntroStage from './IntroStage.vue'
import FirstStage from './FirstStage.vue'
import SecondStage from './SecondStage.vue'
import ThirdStage from './ThirdStage.vue'
import FourthStage from './FourthStage.vue'
import FifthStage from './FifthStage.vue'
import FinalStage from './FinalStage.vue'

const stage = ref(0)
const handleChangeStage = (newValue: number) => {
  stage.value = newValue
  localStorage.setItem('stage', newValue.toString())
}
onMounted(() => {
  stage.value = parseInt(localStorage.getItem('stage') || '0')
})
provide('changeStage', (value: number) => {
  handleChangeStage(value)
})
</script>

<template>
  <IntroStage @change-stage="handleChangeStage" v-if="stage === 0" />
  <FirstStage @change-stage="handleChangeStage" v-else-if="stage === 1" />
  <SecondStage @change-stage="handleChangeStage" v-else-if="stage === 2" />
  <ThirdStage @change-stage="handleChangeStage" v-else-if="stage === 3" />
  <FourthStage @change-stage="handleChangeStage" v-else-if="stage === 4" />
  <FifthStage @change-stage="handleChangeStage" v-else-if="stage === 5" />
  <FinalStage @change-stage="handleChangeStage" v-else-if="stage === 6" />
</template>

<style></style>
