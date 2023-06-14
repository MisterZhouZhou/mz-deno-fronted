import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Chat from '../views/chat/index.vue'
import DocsLayout from '../views/docs/layout.vue'
import Docs from '../views/docs/index.vue'
import DocsDetail from '../views/docs/detail.vue'
import About from '../views/about/index.tsx'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.tsx'),
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
  },
  {
    path: '/docs/',
    name: '',
    component: DocsLayout,
    children: [
      {
        path: '',
        name: 'docs',
        component: Docs,
      },
      {
        path: 'detail',
        name: 'detail',
        component: DocsDetail,
      },
    ]
  },
  {
    path: '/about',
    name: '/about',
    component: About,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;