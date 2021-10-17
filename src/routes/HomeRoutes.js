import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
//import HomeLayout from '~/layouts/HomeLayout';
import AuthProtect from '~/components/Auth/AuthProtect';
import DashboardLayout from '~/layouts/DashboardLayout';

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: '*',
  guard: AuthProtect,
  layout: DashboardLayout,
  routes: [
    {
      exact: true,
      path: '/',
      component: lazy(() => import('~/views/user/RestaurantCardsView'))
    },
    {
      exact: true,
      path: '/components',
      component: lazy(() => import('src/views/home/ComponentsView'))
    },
    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;
