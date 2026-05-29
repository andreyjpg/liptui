export type FileProps = {
  id: number
  fileName: string
  date: string
  protocole: string
  location: string
  note: string
  color: 'blue' | 'green'
}
export const FILES_DATA: FileProps[] = [
  {
    id: 1,
    fileName: 'FR-001',
    date: '29 MAI 2025',
    protocole: 'Français',
    location: 'Lisbonne, PT',
    note: `Selon le droit français, la relation étatit officielle dès le premier regard. Aucun déclaration formelle requise`,
    color: 'blue',
  },
  {
    id: 2,
    fileName: 'CR-001',
    date: '4 Sep 2025',
    protocole: 'Costaricien',
    location: 'Paracas, Pérou',
    note: `La declaration officielle a été faite en personne, avec un collier. Protocole costaricien respecté.`,
    color: 'green',
  },
]
