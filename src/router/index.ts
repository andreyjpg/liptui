import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '@/components/UserLogin.vue'
import Counter from '@/components/CounterDate.vue'
import BucketList from '@/components/BucketList.vue'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '@/firebase'

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (user) => {
//         unsubscribe()
//         resolve(user)
//       },
//       reject,
//     )
//   })
// }

const routes = [
  { path: '', redirect: '/counter' },
  { path: '/login', component: UserLogin },
  { path: '/counter', component: Counter },
  { path: '/bucket', component: BucketList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach(async (to) => {
//   const user = await getCurrentUser
//   if (!user && to.name !== '/login') {
//     return { name: '/login' }
//   }
// })

export default router
