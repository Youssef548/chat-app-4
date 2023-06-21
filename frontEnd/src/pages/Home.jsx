import React from 'react';

import { Outlet } from 'react-router-dom';

import { MainNavigation } from '../components';

const HomePage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomePage;
