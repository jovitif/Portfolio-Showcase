import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage'
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        exact: true
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: {name: 'HomePage'}
      },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // Use createWebHistory() aqui
    routes,
  });
  
  export default router;