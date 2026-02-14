<template>
  <LoveBackground>
    <div class="relative justify-center flex flex-col w-full text-center gap-3 z-10">
      <p class="text-pink-800 font-bold text-3xl font-playFair tracking-wider">
        Joyeuse Saint-Valentin, mon amour
      </p>
      <p class="text-rose-400 self-center sm:w-1/2 text-2xl font-light font-quicksand italic">
        J’ai choisi ces chansons parce qu’elles racontent un peu notre histoire… et ce que j’espère
        encore écrire avec toi.
      </p>
      <div
        class="relative sm:w-1/4 h-auto self-center bg-rose-50 border rounded-2xl border-rose-50"
      >
        <div class="relative flex flex-col items-center gap-2 sm:py-2 py-5">
          <motion.div
            :initial="{
              opacity: 0,
              x: -20,
            }"
            :animate="{
              opacity: 1,
              x: 0,
            }"
            :exit="{
              opacity: 0,
              x: -20,
            }"
            v-if="showDetail"
            class="py-4 w-full"
          >
            <motion.div
              :initial="{
                opacity: 0,
                x: -20,
              }"
              :animate="{
                opacity: 1,
                x: 0,
              }"
              :while-hover="{
                scale: 1.12,
              }"
              class="self-start px-8 text-pink-700"
              @click="hideDetail"
              ><ArrowLeft size="32"
            /></motion.div>
            <div class="flex flex-col justify-center items-center gap-6 px-5">
              <motion.img
                :src="photoSelected.coverPic"
                :initial="{ scale: 0.7, opacity: 0 }"
                :animate="{ scale: 1, opacity: 1 }"
                :transition="{ delay: 0.2, type: 'spring' }"
                class="w-32 h-32 rounded-xl shadow-lg shadow-rose-300"
              >
              </motion.img>
              <motion.div
                :initial="{ scale: 0.7, opacity: 0, x: -100 }"
                :animate="{ scale: 1, opacity: 1, x: 0 }"
                :transition="{ delay: 0.2, type: 'spring' }"
                class="flex flex-col gap-1"
              >
                <span class="font-playFair tracking-wide font-bold text-pink-700 text-xl">{{
                  photoSelected.name
                }}</span>
                <span class="font-nunito italic text-rose-500">{{ photoSelected.autor }}</span>
              </motion.div>

              <motion.div
                class="relative bg-white px-4 py-2 pt-6 rounded-2xl shadow-xl shadow-rose-200"
                :initial="{ scale: 0.7, opacity: 0, y: 20 }"
                :animate="{ scale: 1, opacity: 1, y: 0 }"
                :transition="{ delay: 0.2, type: 'spring' }"
              >
                <div
                  class="rounded-4xl bg-rose-500 absolute top-0 left-1/2 -translate-x-1/2 px-2 text-xs font-nunito text-white"
                >
                  Message privé
                </div>
                <p class="font-nunito text-sm text-pink-700">{{ photoSelected.description }}</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            v-else
            :initial="{
              opacity: 0,
              x: -20,
            }"
            :animate="{
              opacity: 1,
              x: 0,
            }"
            :exit="{
              opacity: 0,
              x: -20,
            }"
            class="p-4"
          >
            <div class="flex flex-row gap-4">
              <motion.div
                :animate="{
                  rotate: 360,
                }"
                :transition="{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'linear',
                }"
                class="w-20 h-20 bg-linear-to-l rounded-full shrink-0 to-rose-300 from-pink-700 flex my-auto justify-center"
              >
                <Disc size="40" class="self-center text-white/80" />
              </motion.div>
              <div class="flex flex-col items-start justify-center">
                <span class="text-pink-700 font-bold tracking-wide font-playFair text-xl"
                  >For my favorite person</span
                >
                <span class="text-rose-500 font-light text-start font-nunito"
                  >{{ songs.length }} songs ~ tap to reveal a secret</span
                >
                <a
                  href="https://link.deezer.com/s/32pnIiU995OFNpBrP8dIZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-3 inline-flex items-center gap-2 rounded-xl bg-pink-700/90 px-4 py-2 text-white font-nunito text-sm hover:bg-pink-700 transition"
                >
                  <HeartPlus></HeartPlus>
                  <span>Listen on Deezer</span>
                </a>
              </div>
            </div>
            <motion.div
              v-if="isLoading"
              class="self-center w-full text-pink-700 relative mt-5 h-24"
              :animate="{ scale: [1, 1.15, 1] }"
              :transition="{ repeat: Infinity, duration: 1, ease: 'easeInOut' }"
            >
              <motion.div
                class="absolute inset-0 flex items-center justify-center"
                :animate="{ opacity: [1, 0, 1] }"
                :transition="{ repeat: Infinity, duration: 3, times: [0, 0.5, 1] }"
              >
                <MusicIcon size="42" />
              </motion.div>
            </motion.div>
            <div v-else class="flex flex-col gap-3 mt-4">
              <div
                v-for="song in songs"
                :key="song.id"
                class="cursor-pointer"
                @click="toggle(song)"
              >
                <motion.div
                  class="shrink-0 px-5 py-3 rounded-2xl bg-white shadow-lg shadow-rose-200"
                  :initial="{
                    opacity: 0,
                    x: -20,
                  }"
                  :animate="{
                    opacity: 1,
                    x: 0,
                  }"
                  :while-hover="{
                    scale: 1.12,
                  }"
                >
                  <div class="flex flex-row gap-5 items-center">
                    <img :src="song.coverPic" alt="" class="w-12 h-12 rounded-xl" />
                    <div class="flex flex-col shrink-0 text-start">
                      <span class="text-pink-700 font-bold font-playFair tracking-wide text-wrap">
                        {{ song.name }}
                      </span>
                      <span class="text-rose-500 font-light font-nunito w-40">{{
                        song.autor
                      }}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <p class="pt-5 pb-20 font-nunito text-rose-700 italic">pssst je t'aime</p>
    </div>
  </LoveBackground>
</template>

<script lang="ts" setup>
import LoveBackground from './utils/LoveBackground.vue'
import { ref, computed } from 'vue'
import { motion } from 'motion-v'
import { useQuery } from '@tanstack/vue-query'
import { fetchSongs } from '@/queries/playlist/fetchSongs'
import Disc from 'vue-material-design-icons/Disc.vue'
import type { Song } from '@/queries/playlist/fetchSongs'
import ArrowLeft from 'vue-material-design-icons/ChevronLeft.vue'
import HeartPlus from 'vue-material-design-icons/HeartPlusOutline.vue'
import MusicIcon from 'vue-material-design-icons/Music.vue'

const photoSelected = ref<Song>({} as Song)
const showDetail = ref<boolean>(false)

const { data, isLoading } = useQuery({
  queryKey: ['songs'],
  queryFn: fetchSongs,
})
const songs = computed(() => data.value ?? [])

const hideDetail = () => {
  showDetail.value = false
}

function toggle(song: Song) {
  showDetail.value = true
  photoSelected.value = song
}
</script>

<style scoped></style>
