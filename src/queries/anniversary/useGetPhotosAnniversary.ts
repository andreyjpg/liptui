import zod from 'zod'
import { firestore } from '@/firebase'
import { useQuery } from '@tanstack/vue-query'
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore'

const PhotosSchema = zod.object({
  id: zod.string(),
  place: zod.string(),
  imageUrl: zod.string(),
  date: zod.instanceof(Timestamp).transform((ts) => ts.toDate()),
})

export type PhotosProps = zod.infer<typeof PhotosSchema>

const PhotosArray = zod.array(PhotosSchema)

const fetchPhotos = async () => {
  const queryToRun = query(collection(firestore, 'photosAnniversary'), orderBy('date', 'asc'))
  const docs = await getDocs(queryToRun)
  const snapshots = docs.docs.map((snap) => {
    return { id: snap.id, ...snap.data() }
  })
  return PhotosArray.parse(snapshots)
}

export const useGetPhotosAnniversary = () => {
  return useQuery({
    queryKey: ['photosAnniversary'],
    queryFn: fetchPhotos,
  })
}
