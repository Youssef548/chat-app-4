import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedRoute } from '../utils/APIRoutes';

import Chat from '../components/app';
const HomePage = () => {
  return (
    <>
      <Chat />
    </>
  );
};

export default HomePage;
