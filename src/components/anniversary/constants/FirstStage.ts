import type { ColorType } from '@/utils/types'
export const ANSWERS: { id: number; value: string; color: ColorType }[] = [
  { id: 1, value: 'Ils se connaissent dans un bar à Lisbonne', color: 'blue' },
  { id: 2, value: `Il l'a invitée à sortir sans arrière-pensée`, color: 'pink' },
  {
    id: 3,
    value: `Elle est arrivée sans ses amies car elle pensait que c'était un rendez-vous romantique`,
    color: 'orange',
  },
  { id: 4, value: `Il a été surpris car il l'a trouvée très jolie`, color: 'yellow' },
  {
    id: 5,
    value: 'Il a acheté deux sangria et ils ont parlé pendant quelques heures',
    color: 'green',
  },
  { id: 6, value: `Il lui a volé un bisou`, color: 'blue' },
]
