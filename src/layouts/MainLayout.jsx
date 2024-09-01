import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/clientSide/topNav/TopNav';
import Navbar from '../components/clientSide/navBar/Navbar';

const MainLayout = () => {
  return (
    <div>
      <TopNav></TopNav>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;