<template>
  <AnimatePresence>
    <motion.div class="div" :exit="{ opacity: 0 }">
      <MatrixBackground>
        <div class="absolute flex flex-col w-full text-white h-full py-28 px-10 font-vt323">
          <div class="text-3xl font-bold text-left relative">
            <p id="text-original">
              <span>MESSAGE CHIFFRÉ - NIVEAU DE SÉCURITÉ: MAXIMAL </span>
              <span>Agent Lucie,</span>
              <span>Ce message s'autodétruira dans quelques secondes. Lisez attentivement </span>
              <span
                >Agent Andrey a disparu. Dernière location: inconnue. Dernièr contact: il ya
                longetemps.</span
              >
              <span
                >Les indices toruvés sont dispersées à travers des lieux que vous seul pouvez
                reconnaître.</span
              >
              <span
                >Vous avez été sélectioné pour cette mision car vous êtes la personne qui
                connaissant l'agent le mieux. Mieux que quiconque</span
              >
              <span>
                Cinq missions vous devez compléter, vous devez trouver des fragments quand vous
                finissez la mission, Assemblez-les pour découvrir la location finale.
              </span>
            </p>
            <p class="text-scramble__text">
              <span id="scramble-text-1"></span>
              <span id="scramble-text-2"></span>
              <span id="scramble-text-3"></span>
              <span id="scramble-text-4"></span>
              <span id="scramble-text-5"></span>
              <span id="scramble-text-6"></span>
              <span id="scramble-text-7"></span>
              <span id="scramble-text-8"></span>
              <span id="scramble-text-9"></span>
              <span id="scramble-cursor" class="inline-block w-auto">|</span>
              <motion.button
                :while-hover="{
                  scale: 1.12,
                }"
                id="start-button"
                class="cursor-pointer hover:bg-green-800 boder mt-2 bg-green-600 rounded-xl px-2 py-1"
                @click="() => emit('change-stage', 1)"
              >
                Commencer la mission
              </motion.button>
            </p>
          </div>
        </div>
      </MatrixBackground>
    </motion.div>
  </AnimatePresence>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/all'
import MatrixBackground from '../components/MatrixBackground.vue'
import { onMounted } from 'vue'
import { motion, AnimatePresence } from 'motion-v'

const emit = defineEmits<{ 'change-stage': [value: number] }>()

gsap.registerPlugin(ScrambleTextPlugin)

const buttonTl = gsap.timeline()

const tl = gsap.timeline({
  id: 'text-scramble',
  defaults: { ease: 'none' },
  onComplete: () => {
    buttonTl.play()
  },
})
const cursorTl = gsap.timeline({ repeat: -1 })

onMounted(() => {
  gsap.set('#text-original', {
    opacity: 0,
  })

  const katakanaArray = Array.from({ length: 5 }, () =>
    String.fromCharCode(0x30a0 + Math.random() * 96),
  )

  const kanjiArray = Array.from({ length: 5 }, () =>
    String.fromCharCode(0x4e00 + Math.random() * 96),
  )

  const numbers = '0123456789'
  const characters = `!@#$%^&*<>[]{}|/\\`

  buttonTl
    .from('#start-button', {
      opacity: 0,
      duration: 0.5,
      ease: 'none',
      delay: 0.2,
    })
    .to('#start-button', {
      opacity: 1,
      duration: 0.5,
      ease: 'none',
      delay: 0.2,
    })

  cursorTl
    .to('#scramble-cursor', {
      opacity: 0,
      duration: 0.5,
      ease: 'none',
      delay: 0.2,
    })
    .to('#scramble-cursor', {
      opacity: 1,
      duration: 0.5,
      ease: 'none',
      delay: 0.2,
    })

  tl.to('#scramble-text-1', {
    scrambleText: {
      text: 'MESSAGE CHIFFRÉ - NIVEAU DE SÉCURITÉ: MAXIMAL',
      chars: 'lowerCase',
    },
    duration: 3,
  })
    .to('#scramble-text-2', {
      scrambleText: {
        text: 'Agent Lucie,',
        chars: katakanaArray.join().toString(),
        speed: 0.4,
      },
      duration: 1.5,
    })
    .to('#scramble-text-3', {
      scrambleText: {
        text: "Ce message s'autodétruira dans quelques secondes. Lisez attentivement",
        chars: numbers,
      },
      duration: 2,
    })
    .to('#scramble-text-4', {
      scrambleText: {
        text: 'Un autre agent a disparu. Dernière location: inconnue. Dernièr contact: il ya longetemps.',
        chars: kanjiArray.join().toString(),
        speed: 0.3,
      },
      duration: 2,
    })
    .to('#scramble-text-5', {
      scrambleText: {
        text: 'Les indices toruvés sont dispersées à travers des lieux que vous seul pouvez reconnaître.',
        chars: '█▓▒░',
        speed: 0.3,
      },
      duration: 1.5,
    })
    .to('#scramble-text-6', {
      scrambleText: {
        text: `Vous avez été sélectioné pour cette mision pour votre entraînement, mais parce que vous êtes la personne qui connaissant
            l'agent le mieux. Mieux que quiconque.`,
        chars: kanjiArray.join().toString(),
        speed: 0.3,
      },
      duration: 3,
    })
    .to('#scramble-text-7', {
      scrambleText: {
        text: `Cinq missions vous devez compléter, vous devez trouver des fragments quand vous finissez la mission, Assemblez-les pour découvrir la location finale.`,
        chars: katakanaArray.join().toString(),
        speed: 0.3,
      },
      duration: 2.5,
    })
    .to('#scramble-text-8', {
      scrambleText: {
        text: `Ne perdez pas de temps et surtout... ne l'abandonnez pas.`,
        chars: numbers,
        speed: 0.5,
      },
      duration: 1,
    })
    .to('#scramble-text-9', {
      scrambleText: {
        text: `Bonne courage, Agent.`,
        chars: characters,
      },
      duration: 3,
    })
    .add(cursorTl)
    .add(buttonTl)
})
</script>

<style lang="css" scoped>
.text-scramble__text {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  line-height: 1.5em;
  letter-spacing: 0.1em;
}
.text-scramble__text span {
  word-break: break-word;
  display: block;
}
#start-button :hover {
  scale: 1.2;
}
</style>
