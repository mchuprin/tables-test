import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router';

import './app/styles/index.scss';
import { store } from './app/store/store';
import Main from './pages/Main/ui/Main.jsx';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  // TODO: extract router
  let router = createBrowserRouter([
    {
      path: '/',
      Component: Main,
    },
  ]);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
