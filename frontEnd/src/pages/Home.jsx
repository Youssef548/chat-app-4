import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedRoute } from '../utils/APIRoutes';

import Chat from '../components/app';
const HomePage = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  useEffect(() => {
    const checkIsLogged = async () => {
      try {
        const isLoggedIn = await axios.get(`${isLoggedRoute}`);

        if (!isLoggedIn) {
          toast.error('You need to login first', toastOptions);
          navigate('/login');
        }
      } catch (e) {
        console.log('threre is an error in API'); // eslint-disable-line no-console
      }

      checkIsLogged();
    };
  }, []);

  return (
    <>
      <Chat />
    </>
  );
};

export default HomePage;
