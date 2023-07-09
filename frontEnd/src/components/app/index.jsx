import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { isLoggedRoute, getAvatarRoute } from '../../utils/APIRoutes';

import axios from 'axios';

const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userImage, setUserImage] = useState(null);
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
        await axios.get(`${isLoggedRoute}`, { withCredentials: true });
        setIsLoading(false);
      } catch (e) {
        if (e.response && e.response.status === 401) {
          console.log(e);
          toast.error('You need to login first', toastOptions);
          navigate('/login');
          return;
        }
        console.log('There is an error in the API', e.message);
      }
    };
    checkIsLogged();
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));

    const isUserHaveImage = async () => {
      // Check user have image or not
      const user = await axios.get(getAvatarRoute, { withCredentials: true });

      if (user.data.avatarImage) {
        setUserImage(user.data.avatarImage);
        localStorage.setItem(
          'user',
          JSON.stringify({
            username: data.username,
            img: user.data.avatarImage,
          })
        );
        console.log('TEST');
      } else {
        navigate('/setavatar');
      }
    };

    if (data && data.img) {
      setUserImage(data.img);
    } else {
      isUserHaveImage();
    }
  }, []);

  return (
    <>
      {userImage !== null && (
        <img
          src={`data:image/svg+xml;base64,${userImage}`}
          className='rounded-full w-20 h-20 mx-auto mb-2'
          alt='image ya 5oana'
        />
      )}
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
