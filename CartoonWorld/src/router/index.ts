import { createRouter, createWebHashHistory,type RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[]=[
  {
    path:'/',
    redirect:{
      path:'/main'
    }
  },
  {
    path:'/main',
    component:()=>import('@/views/main/main.vue'),
    redirect:{
      name:'cartoon'
    },
    children:[
      {
        path:'cartoon',
        name:'cartoon',
        component:()=>import('@/views/main/Cartoon.vue')
      },{
        path:'lightnoval',
        name:'lightnoval',
        component: ()=>import('@/views/main/LightNovel.vue')
      }
    ]
  }
]

export const router = createRouter({
  history:createWebHashHistory(),
  routes
})