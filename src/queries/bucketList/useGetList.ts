import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useQuery } from '@tanstack/react-query'
import { firestore } from '@/firebase'

import zod from 'zod'

const ItemsSchema = zod.object({
  name: zod.string,
  id: zod.string,
  isComplete: zod.boolean,
  createdAt: zod.date(),
})
const bucketListSchema = zod.array(
  zod.object({
    name: zod.string(),
    items: zod.array(zod.array(zod.array(ItemsSchema))),
    createdAt: zod.date(),
  }),
)

export const useGetList = () => {
  const fetch = async () => {
    try {
      const items = await getDocs(
        query(collection(firestore, 'bucketList'), orderBy('createdAt', 'asc')),
      )
      if (items.empty) {
      }
      const bucketList = items.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      return bucketListSchema.parse(bucketList)
    } catch (error: any) {
      console.error(error.message)
    }
  }
  const queryRes = useQuery({
    queryKey: ['BucketList'],
    queryFn: fetch,
  })

  return queryRes
}
