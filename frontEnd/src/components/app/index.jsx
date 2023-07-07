import React, { useEffect, useState, useContext } from 'react';
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

  const socket = io('http://localhost:3000/', {
    withCredentials: true,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addFriend = (friend) => {
    setFriends((prevFriends) => {
      const updatedFriends = [...prevFriends, friend];
      updatedFriends.sort((friendA, friendB) => {
        const dateA = new Date(friendA.latestDate);
        const dateB = new Date(friendB.latestDate);
        return dateB - dateA;
      });
      return updatedFriends;
    });
  };

  const hasFriends = friends.length > 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get('/friends');
        setFriends(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex h-[90vh]'>
      <div className='w-1/4 bg-white'>
        <UsersSidebar
          socket={socket}
          hasFriends={hasFriends}
          friends={friends}
          setFriends={setFriends}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          addFriend={addFriend}
          openModal={openModal}
        />
      </div>
      <div className='w-3/4 bg-[#e4e6eb] flex flex-col'>
        <Topbar
          socket={socket}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          addFriend={addFriend}
          openModal={openModal}
          hasFriends={hasFriends}
        />
        <Chatbox socket={socket} friends={friends} setFriends={setFriends} />
        <Input socket={socket} setFriends={setFriends} friends={friends} />
      </div>
    </div>
  );
};

export default Chat;
