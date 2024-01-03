import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.scss';
import { RouterProvider } from 'react-router';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
