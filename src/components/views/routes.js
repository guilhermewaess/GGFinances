import Login from '@/components/authentication/Login';
import Authentication from '@/components/views/Authentication';

export default [
  {
    path: 'authentication',
    name: 'Authentication',
    component: Authentication,
    redirect: { name: 'Login' },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
    ],
  },
];
