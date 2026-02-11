import { firestore } from '@/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import Zod from 'zod'

const SongsSchema = Zod.array(
  Zod.object({
    id: Zod.string(),
    name: Zod.string(),
    autor: Zod.string(),
    coverPic: Zod.string(),
    description: Zod.string(),
    order: Zod.number(),
  }),
)

export type Song = Zod.infer<typeof SongsSchema>[number]

export const fetchSongs = async () => {
  try {
    const songQuery = query(collection(firestore, 'playlist'), orderBy('order', 'asc'))
    const docs = await getDocs(songQuery)
    const snapshots = docs.docs.map((snap) => {
      return { id: snap.id, ...snap.data() }
    })
    return SongsSchema.parse(snapshots)
  } catch (err: unknown) {
    console.error('Error fetching playlist', err)
  }
}
