import Authentication from '@/components/views/Authentication';
import Login from '@/components/authentication/Login';
import Register from '@/components/authentication/Register';

export default [
  {
    path: '/authentication',
    name: 'Authentication',
    component: Authentication,
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
