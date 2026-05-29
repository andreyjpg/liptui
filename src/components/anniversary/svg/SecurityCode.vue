<template>
  <div class="security-panel-wrapper" @click="$emit('open-screen')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
      <defs>
        <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" />
        </pattern>
      </defs>

      <rect
        x="10"
        y="10"
        width="780"
        height="480"
        fill="#0f172a"
        stroke="#334155"
        stroke-width="6"
        rx="12"
      />
      <rect x="25" y="25" width="750" height="450" fill="url(#grid)" rx="8" />

      <path
        d="M 30 60 L 30 30 L 60 30"
        fill="none"
        stroke="#06b6d4"
        stroke-width="2"
        opacity="0.6"
      />
      <path
        d="M 770 60 L 770 30 L 740 30"
        fill="none"
        stroke="#06b6d4"
        stroke-width="2"
        opacity="0.6"
      />
      <path
        d="M 30 440 L 30 470 L 60 470"
        fill="none"
        stroke="#06b6d4"
        stroke-width="2"
        opacity="0.6"
      />
      <path
        d="M 770 440 L 770 470 L 740 470"
        fill="none"
        stroke="#06b6d4"
        stroke-width="2"
        opacity="0.6"
      />

      <g transform="translate(240, 100)">
        <circle cx="160" cy="150" r="130" fill="#111827" stroke="#1e293b" stroke-width="4" />
        <circle
          cx="160"
          cy="150"
          r="110"
          fill="#0c1f2c"
          stroke="#0891b2"
          stroke-width="1"
          stroke-dasharray="8 4"
          opacity="0.6"
        />

        <g
          transform="translate(115, 90)"
          stroke="#06b6d4"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
          filter="url(#glow-cyan)"
        >
          <path d="M 10 90 C 0 70, 5 50, 20 45 C 30 42, 35 55, 35 70" opacity="0.7" />
          <path d="M 45 60 C 45 20, 58 20, 58 60 C 58 80, 58 100, 58 110" />
          <path d="M 68 50 C 68 10, 81 10, 81 50 C 81 80, 81 100, 81 115" />
          <path d="M 91 58 C 91 18, 104 18, 104 58 C 104 80, 104 100, 104 110" />
          <path d="M 114 80 C 114 45, 126 45, 126 80 C 126 95, 121 110, 115 115" opacity="0.8" />
          <path d="M 30 110 C 35 130, 50 145, 75 145 C 100 145, 110 130, 115 115" />
        </g>

        <line
          x1="40"
          y1="0"
          x2="280"
          y2="0"
          stroke="#06b6d4"
          stroke-width="3"
          filter="url(#glow-cyan)"
          class="laser-line"
        />
      </g>

      <text
        x="400"
        y="70"
        font-family="'Courier New', monospace"
        font-size="24"
        font-weight="bold"
        fill="#38bdf8"
        text-anchor="middle"
        letter-spacing="3"
      >
        SECRET ACCESS REQUIRED
      </text>

      <text
        x="400"
        y="420"
        font-family="'Courier New', monospace"
        font-size="16"
        fill="#0ea5e9"
        text-anchor="middle"
        letter-spacing="2"
        class="blink-text"
      >
        [ CLICK PANEL TO OVERRIDE SYSTEM ]
      </text>
    </svg>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['open-screen'])
</script>

<style scoped>
.security-panel-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  cursor: pointer;
  user-select: none;
  background-color: #020617;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* Give a subtle sci-fi hover effect to show it's interactive */
.security-panel-wrapper:hover {
  transform: scale(1.01);
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.2);
}

.security-panel-wrapper:active {
  transform: scale(0.99);
}

/* Laser animation moving up and down the scanning module */
.laser-line {
  animation: scan 2.5s infinite ease-in-out;
}

/* Pulsing text instruction */
.blink-text {
  animation: pulse 1.8s infinite ease-in-out;
}

@keyframes scan {
  0%,
  100% {
    transform: translateY(40px);
    opacity: 0.3;
  }
  50% {
    transform: translateY(260px);
    opacity: 1;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
</style>
