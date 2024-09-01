import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/clientSide/topNav/TopNav';

const MainLayout = () => {
  return (
    <div>
      <TopNav></TopNav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;