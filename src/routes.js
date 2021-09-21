import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Cards = React.lazy(() => import('./views/microservices/cards/Cards'));
const Grid = React.lazy(() => import('./views/grid/Grid'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Jarvis', component: Dashboard },
  { path: '/grid', name: 'Grid', component: Grid },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/microservices', name: 'Services', component: Cards, exact: true },
  { path: '/microservices/cards', name: 'Fedex', component: Cards },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }  
];

export default routes;
