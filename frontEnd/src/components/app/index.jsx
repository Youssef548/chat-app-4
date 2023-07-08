import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { isLoggedRoute } from '../../utils/APIRoutes';
import axios from 'axios';

const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);
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
        await axios.get(`${isLoggedRoute}`);
        navigate('/login');
        console.log('SUCCESS');
      } catch (e) {
        if (e.response && e.response.status === 401) {
          toast.error('You need to login first', toastOptions);
          navigate('/login');
          return;
        }
        console.log('There is an error in the API', e.message);
      }
      setIsLoading(false);
    };
    checkIsLogged();
  }, []);

  return (
    <>
      {!isLoading && (
        <div className='flex h-[90vh]'>
          <ToastContainer />
          <h1>Hello world</h1>
        </div>
      )}
    </>
  );
};

export default Chat;
