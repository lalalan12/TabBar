import { createRouter, createWebHashHistory } from 'vue-router'

const Home = ()=>import('views/home/Home.vue');
const Message = ()=>import('views/message/Message.vue');
const TimeLines = ()=>import('views/timelines/TimeLines.vue');
const Friends = ()=>import('views/friends/Friends.vue');
const Login = ()=>import('views/login/Login.vue');
const Search = ()=>import('views/search/Search.vue');
const Links = ()=>import('views/links/Links.vue');

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/timelines',
    name: 'TimeLines',
    component: TimeLines
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
