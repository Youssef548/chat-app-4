import React from 'react';
import { Chatbox } from './chat/chatbox';
import { UsersSidebar } from './chat/usersSidebar';
import { Topbar } from './chat/topbar';
import { Input } from './chat/input';

const Chat = () => (
  <>
    <div className='flex'>
      <div className='w-1/4'>
        <UsersSidebar />
      </div>
      <div className='w-3/4'>
        <Topbar />
        <Chatbox />
        <Input />
      </div>
    </div>
  </>
);

export default Chat;
