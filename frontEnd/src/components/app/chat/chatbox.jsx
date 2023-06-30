import React, { useEffect, useState, useContext } from 'react';
import Message from './Message';
import { CurrentUserContext } from '../../../context/CurrentUserContext';
import { MessageContext } from '../../../context/MessagesContext';

export const Chatbox = ({ socket }) => {
  const { currentId } = useContext(CurrentUserContext);
  const { messages, addMessage } = useContext(MessageContext);

  useEffect(() => {
    // Create a socket connection

    // Emit an event to request loading messages

    console.log('USEEFFECT RUNNING');
    socket.on('load-messages', (data) => {
      console.log(data);
    });

    // Listen for incoming messages

    console.log(messages);
    // Clean up the socket connection on component unmount
  }, []);

  return (
    <div className='p-4 md:p-8 flex flex-col gap-4 overflow-auto flex-grow '>
      <div className='messages flex flex-col gap-4 flex-grow items-start'>
        {messages.map((msg, index) => {
          return (
            <div
              className='message flex  items-center max-w-60 overflow-wrap-break-word text-lg rounded-lg text-gray-300'
              key={index}
            >
              <img
                src={'/userr.jpg'}
                alt='Sender Avatar'
                className='w-10 h-10 rounded-full mr-2'
              />
              <div className=' p-4 rounded-lg bg-white'>
                <p className='text-gray-800'>{msg.data}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
