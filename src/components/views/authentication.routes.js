import Authentication from '@/components/views/Authentication';
import Login from '@/components/authentication/Login';
import Register from '@/components/authentication/Register';

import isNotAuthenticatedGuard from '@/router/isNotAuthenticated.guard';

export default [
  {
    path: '/authentication',
    name: 'Authentication',
    component: Authentication,
    beforeEnter: isNotAuthenticatedGuard,
    redirect: { name: 'Login' },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
    ],
  },
];
