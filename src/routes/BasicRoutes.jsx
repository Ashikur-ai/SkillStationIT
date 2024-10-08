import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/clientSide/homePage/Homepage';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      }
    ]
  },
]);

export default router;