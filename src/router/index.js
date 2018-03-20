import Vue from 'vue';
import Router from 'vue-router';
import viewRoutes from '@/components/views/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'Authentication' },
    },
    ...viewRoutes,
    {
      path: '**',
      name: 'NotFound',
      redirect: { name: 'Home' },
    },
  ],
});
