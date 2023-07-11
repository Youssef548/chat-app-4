import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contacts from './components/Contacts';
import Welcome from './components/Welcome';
import ChatContainer from './components/ChatContainer';

import {
  isLoggedRoute,
  getAvatarRoute,
  getContactsRoute,
} from '../../utils/APIRoutes';

import axios from 'axios';

const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userImage, setUserImage] = useState(null);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);

  const navigate = useNavigate();

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  // Get Contacts
  useEffect(() => {
    console.log('HEY RUN PLZ');
    const fetchContacts = async () => {
      if (currentUser) {
        const users = await axios.get(getContactsRoute, {
          withCredentials: true,
        });
        setContacts(users.data);
      }
    };

    fetchContacts();
  }, [currentUser]);

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
    } else {
      // const fetchUser = async () => {
      // }
      return;
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
      } else {
        navigate('/setavatar');
        console.log('setavatar');
      }
    };

    if (data && data.img) {
      setUserImage(data.img);
    } else {
      isUserHaveImage();
    }
  }, []);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <div className='flex h-screen w-screen flex-col justify-center gap-[1rem] items-center bg-[#131324]'>
        <div className='container h-[85vh] w-[85] bg-[#00000076] flex flex-row'>
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          <div className='w-[70%]'>
            {currentChat === undefined ? <Welcome /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
