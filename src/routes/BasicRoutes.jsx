import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/clientSide/homePage/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>
  },
]);

export default router;