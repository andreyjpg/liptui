import Sloth from '@/assets/perezoso.jpg'
import Guatusa from '@/assets/guatusa.jpg'
import Monkey from '@/assets/mono.jpeg'
import Toucan from '@/assets/tucan.jpg'
import Frog from '@/assets/rana.jpg'
import Jaguar from '@/assets/jaguar.jpeg'
import Penguin from '@/assets/pinguino.jpg'
import Cuy from '@/assets/cuy.jpg'
import Caiman from '@/assets/caiman.jpg'

export type AnimalProp = {
  id: number
  name: string
  image: string
  isCorrect: boolean
  isSelected: boolean
}

export const ANIMALS: AnimalProp[] = [
  {
    id: 1,
    name: 'un Paresseux',
    image: Sloth,
    isCorrect: true,
    isSelected: false,
  },
  {
    id: 2,
    name: 'Agouti',
    image: Guatusa,
    isCorrect: true,
    isSelected: false,
  },
  {
    id: 3,
    name: 'Singe',
    image: Monkey,
    isCorrect: true,
    isSelected: false,
  },
  {
    id: 4,
    name: 'Un Toucan',
    image: Toucan,
    isCorrect: true,
    isSelected: false,
  },
  {
    id: 5,
    name: 'Grenouille blue jeans',
    image: Frog,
    isCorrect: true,
    isSelected: false,
  },
  {
    id: 6,
    name: 'Jaguar',
    image: Jaguar,
    isCorrect: false,
    isSelected: false,
  },
  {
    id: 7,
    name: 'Manchot',
    image: Penguin,
    isCorrect: false,
    isSelected: false,
  },
  {
    id: 8,
    name: 'Caïman',
    image: Caiman,
    isCorrect: true,
    isSelected: false,
  },
  {
    id: 9,
    name: 'Cuy',
    image: Cuy,
    isCorrect: false,
    isSelected: false,
  },
]
