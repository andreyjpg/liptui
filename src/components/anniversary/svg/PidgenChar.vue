<template>
  <svg width="22" height="22" viewBox="0 0 22 22" v-html="pigpenChar(props.char)"></svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  char: string
}>()

const lineLength = '22'
const columnColor = '#3a2a10'

const pigpenChar = (letter: string) => {
  const uppercaseLetter = letter.toUpperCase()
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', lineLength)
  svg.setAttribute('height', lineLength)
  svg.setAttribute('viewBox', `0 0 ${parseInt(lineLength)} ${parseInt(lineLength)}`)
  const drawLine = (x1: string, y1: string, x2: string, y2: string) => {
    const lineSvg = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    lineSvg.setAttribute('x1', x1)
    lineSvg.setAttribute('y1', y1)
    lineSvg.setAttribute('x2', x2)
    lineSvg.setAttribute('y2', y2)
    lineSvg.setAttribute('stroke', columnColor)
    lineSvg.setAttribute('stroke-width', '1.2')
    svg.appendChild(lineSvg)
    return lineSvg
  }
  const dot = (x: string, y: string) => {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    c.setAttribute('cx', x)
    c.setAttribute('cy', y)
    c.setAttribute('r', '2')
    c.setAttribute('fill', columnColor)
    svg.appendChild(c)
  }
  const dotPosition = (parseInt(lineLength) / 2).toString()

  const pidgenMap: Record<string, () => void> = {
    // ── A–I: 3×3 tic-tac-toe grid, no dot ─────────────────────────────────
    // Each letter shows the inner dividers that border its cell:
    //   A B C      RIGHT+BOTTOM  |  LEFT+RIGHT+BOTTOM  |  LEFT+BOTTOM
    //   D E F   →  TOP+RIGHT+BTM |  all four sides      |  TOP+LEFT+BOTTOM
    //   G H I      TOP+RIGHT     |  TOP+LEFT+RIGHT      |  TOP+LEFT
    A: () => {
      // top-left → RIGHT + BOTTOM
      drawLine(lineLength, '0', lineLength, lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
    },
    B: () => {
      // top-mid → LEFT + RIGHT + BOTTOM
      drawLine('0', '0', '0', lineLength)
      drawLine(lineLength, '0', lineLength, lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
    },
    C: () => {
      // top-right → LEFT + BOTTOM
      drawLine('0', '0', '0', lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
    },
    D: () => {
      // mid-left → TOP + RIGHT + BOTTOM
      drawLine('0', '0', lineLength, '0')
      drawLine(lineLength, '0', lineLength, lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
    },
    E: () => {
      // center → all four sides
      drawLine('0', '0', '0', lineLength)
      drawLine('0', '0', lineLength, '0')
      drawLine(lineLength, '0', lineLength, lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
    },
    F: () => {
      // mid-right → TOP + LEFT + BOTTOM
      drawLine('0', '0', lineLength, '0')
      drawLine('0', '0', '0', lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
    },
    G: () => {
      // bot-left → TOP + RIGHT
      drawLine('0', '0', lineLength, '0')
      drawLine(lineLength, '0', lineLength, lineLength)
    },
    H: () => {
      // bot-mid → TOP + LEFT + RIGHT
      drawLine('0', '0', lineLength, '0')
      drawLine('0', '0', '0', lineLength)
      drawLine(lineLength, '0', lineLength, lineLength)
    },
    I: () => {
      // bot-right → TOP + LEFT
      drawLine('0', '0', lineLength, '0')
      drawLine('0', '0', '0', lineLength)
    },
    // ── J–R: same grid positions, with a centre dot ────────────────────────
    J: () => {
      drawLine(lineLength, '0', lineLength, lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
      dot(dotPosition, dotPosition)
    },
    K: () => {
      drawLine('0', '0', '0', lineLength)
      drawLine(lineLength, '0', lineLength, lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
      dot(dotPosition, dotPosition)
    },
    L: () => {
      drawLine('0', '0', '0', lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
      dot(dotPosition, dotPosition)
    },
    M: () => {
      drawLine('0', '0', lineLength, '0')
      drawLine(lineLength, '0', lineLength, lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
      dot(dotPosition, dotPosition)
    },
    N: () => {
      drawLine('0', '0', '0', lineLength)
      drawLine('0', '0', lineLength, '0')
      drawLine(lineLength, '0', lineLength, lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
      dot(dotPosition, dotPosition)
    },
    O: () => {
      drawLine('0', '0', lineLength, '0')
      drawLine('0', '0', '0', lineLength)
      drawLine('0', lineLength, lineLength, lineLength)
      dot(dotPosition, dotPosition)
    },
    P: () => {
      drawLine('0', '0', lineLength, '0')
      drawLine(lineLength, '0', lineLength, lineLength)
      dot(dotPosition, dotPosition)
    },
    Q: () => {
      drawLine('0', '0', lineLength, '0')
      drawLine('0', '0', '0', lineLength)
      drawLine(lineLength, '0', lineLength, lineLength)
      dot(dotPosition, dotPosition)
    },
    R: () => {
      drawLine('0', '0', lineLength, '0')
      drawLine('0', '0', '0', lineLength)
      dot(dotPosition, dotPosition)
    },
    // ── S–V: X-grid triangles, no dot ─────────────────────────────────────
    // Each shows the two half-diagonals (corner → centre) bounding its cell:
    //       S
    //    T     U
    //       V
    S: () => {
      // top → upper-left + upper-right half-diagonals
      drawLine('0', '0', dotPosition, dotPosition)
      drawLine(lineLength, '0', dotPosition, dotPosition)
    },
    T: () => {
      // left → upper-left + lower-left half-diagonals
      drawLine('0', '0', dotPosition, dotPosition)
      drawLine('0', lineLength, dotPosition, dotPosition)
    },
    U: () => {
      // right → upper-right + lower-right half-diagonals
      drawLine(lineLength, '0', dotPosition, dotPosition)
      drawLine(lineLength, lineLength, dotPosition, dotPosition)
    },
    V: () => {
      // bottom → lower-left + lower-right half-diagonals
      drawLine('0', lineLength, dotPosition, dotPosition)
      drawLine(lineLength, lineLength, dotPosition, dotPosition)
    },
    // ── W–Z: same X-grid positions, with a dot inside each triangle ────────
    W: () => {
      drawLine('0', '0', dotPosition, dotPosition)
      drawLine(lineLength, '0', dotPosition, dotPosition)
      dot(dotPosition, '4')
    },
    X: () => {
      drawLine('0', '0', dotPosition, dotPosition)
      drawLine('0', lineLength, dotPosition, dotPosition)
      dot('4', dotPosition)
    },
    Y: () => {
      drawLine(lineLength, '0', dotPosition, dotPosition)
      drawLine(lineLength, lineLength, dotPosition, dotPosition)
      dot('18', dotPosition)
    },
    Z: () => {
      drawLine('0', lineLength, dotPosition, dotPosition)
      drawLine(lineLength, lineLength, dotPosition, dotPosition)
      dot(dotPosition, '18')
    },
  }

  pidgenMap[uppercaseLetter]!()

  return svg.getHTML()
}
</script>

<style scoped></style>
