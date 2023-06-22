import React, { useEffect } from 'react';
import { Chatbox } from './chat/chatbox';
import { UsersSidebar } from './chat/usersSidebar';
import { Topbar } from './chat/topbar';
import { Input } from './chat/input';

import { io } from 'socket.io-client';

const Chat = () => {
  const socket = io('http://localhost:3000/', {
    withCredentials: true,
  });

  socket.on('helow manga', () => {
    console.log('TEST');
  });

  return (
    <>
      <div className='flex h-[90vh]'>
        <div className='w-1/4 bg-white'>
          <UsersSidebar />
        </div>
        <div className='w-3/4 bg-blue-300 flex flex-col'>
          <Topbar />
          <Chatbox />
          <Input socket={socket} />
        </div>
      </div>
    </>
  );
};

export default Chat;
