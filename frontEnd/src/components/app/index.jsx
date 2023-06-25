import React, { useEffect, useState } from 'react';
import { Chatbox } from './chat/chatbox';
import { UsersSidebar } from './chat/usersSidebar';
import { Topbar } from './chat/topbar';
import { Input } from './chat/input';
import { axiosInstance } from '../../config/axios';

import { io } from 'socket.io-client';

const Chat = () => {
  const [friends, setFriends] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addFriend = (friend) => {
    setFriends((prevFriends) => [...prevFriends, friend]);
  };

  const hasFriends = friends.length > 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get('/friends');
        setFriends(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching friends:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const socket = io('http://localhost:3000/', {
    withCredentials: true,
  });

  return (
    <div className='flex h-[90vh]'>
      <div className='w-1/4 bg-white'>
        <UsersSidebar
          socket={socket}
          hasFriends={hasFriends}
          friends={friends}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          addFriend={addFriend}
          openModal={openModal}
        />
      </div>
      <div className='w-3/4 bg-blue-300 flex flex-col'>
        <Topbar
          socket={socket}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          addFriend={addFriend}
          openModal={openModal}
        />
        <Chatbox />
        <Input socket={socket} />
      </div>
    </div>
  );
};

export default Chat;
