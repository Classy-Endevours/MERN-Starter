import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRoute, AdminOnlyRoute } from './Type';
import AuthLayout from '../layout/Auth';
import DashboardLayout from '../layout/DashboardLayout';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import UserList from '../pages/list';
import Profile from '../pages/auth/profile';
import { USERS_ROUTE } from '../constant/routes';

const routes = [
  {
    path: 'app',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'users',
        element: (
          <AdminOnlyRoute>
            <UserList />
          </AdminOnlyRoute>
        ),
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  // {
  //   path: '/home',
  //   element: <Landing />,
  // },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      // { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to={USERS_ROUTE} /> },
      // { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];
export default routes;
