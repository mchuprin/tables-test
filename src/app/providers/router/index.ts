import { createBrowserRouter, redirect } from 'react-router';

import Main from '@/pages/Main/ui/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
  },
  {
    path: '*',
    loader: () => redirect('/'),
  },
]);
