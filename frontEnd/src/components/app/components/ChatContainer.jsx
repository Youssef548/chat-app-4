import React, { useState, useEffect, useRef } from 'react';
import Logout from './Logout';
import ChatInput from './ChatInput';
import Messages from './Messages';
const ChatContainer = ({ currentChat }) => {
  const handleSendMsg = async (msg) => {
    // send message to backend
  };
  return (
    <div className='chat-container pt-4 flex flex-col h-[100%]'>
      <div className='chat-header flex justify-between items-center px-8'>
        <div className='user-details flex items-center gap-4'>
          <div className='avatar'>
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt='usr-image'
              className='h-12'
            />
          </div>
          <div className='username'>
            <h3 className='text-white'>{currentChat.username}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <Messages />
      <ChatInput handleMsg={handleSendMsg} />
    </div>
  );
};

export default ChatContainer;
