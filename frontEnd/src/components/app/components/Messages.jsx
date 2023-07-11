import React from 'react';

const Messages = ({ messages }) => {
  return (
    <div className='chat-messages flex-grow py-1 px-2 flex flex-col gap-4 overflow-auto'>
      {messages?.map((message, index) => {
        return (
          <div className='message flex items-center'>
            <div className='content max-w-[40%] overflow-[break-word] p-4 text-xl rounded-2xl text-[#d1d1d1]'></div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
