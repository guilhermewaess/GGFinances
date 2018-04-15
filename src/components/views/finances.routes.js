import Finances from '@/components/views/Finances';
import MyFinances from '@/components/finances/MyFinances';

export default [
  {
    path: '/finances',
    name: 'Finances',
    component: Finances,
    redirect: { name: 'MyFinances' },
    children: [
      {
        path: 'my-finances',
        name: 'MyFinances',
        component: MyFinances,
      },
    ],
  },
];
