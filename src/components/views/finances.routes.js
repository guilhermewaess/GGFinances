import Finances from '@/components/views/Finances';
import MyFinances from '@/components/finances/MyFinances';
import isAuthenticatedGuard from '@/router/isAuthenticated.guard';

export default [
  {
    path: '/finances',
    name: 'Finances',
    component: Finances,
    redirect: { name: 'MyFinances' },
    beforeEnter: isAuthenticatedGuard,
    children: [
      {
        path: 'my-finances',
        name: 'MyFinances',
        component: MyFinances,
      },
    ],
  },
];
