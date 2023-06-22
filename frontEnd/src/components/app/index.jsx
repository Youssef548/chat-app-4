import React from 'react';
import { Chatbox } from './chat/chatbox';
import { UsersSidebar } from './chat/usersSidebar';
import { Topbar } from './chat/topbar';
import { Input } from './chat/input';

const Chat = () => (
  <>
    <div className='flex h-[90vh]'>
      <div className='w-1/4 bg-white'>
        <UsersSidebar />
      </div>
      <div className='w-3/4 bg-blue-300 flex flex-col'>
        <Topbar />
        <Chatbox />
        <Input />
      </div>
    </div>
  </>
);

export default Chat;
