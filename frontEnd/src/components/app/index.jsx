import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { isLoggedRoute, getAvatarRoute } from '../../utils/APIRoutes';

import axios from 'axios';

const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userImage, setUserImage] = useState(null);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  //Check IsLoggedIn
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

  // setCurrent user

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  // Check is user has image or not
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
      <div className='container'>
        {/* <Contacts contacts={contacts} changeChat={handleChatChange} />
        {currentChat === undefined ? (
          <Welcome />
        ) : (
          <ChatContainer currentChat={currentChat} socket={socket} />
        )} */}
      </div>
    </>
  );
};

export default Chat;
