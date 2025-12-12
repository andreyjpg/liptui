import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '@/components/UserLogin.vue'
import HomeContainer from '@/components/HomeContainer.vue'
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
  { path: '/login', component: UserLogin },
  { path: '/home', component: HomeContainer },
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
