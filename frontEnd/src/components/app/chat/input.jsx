import React, { useState } from 'react';
import { SendSvg } from '../../svg/Svg';

export const Input = ({ socket }) => {
  const [enteredMessage, setEnteredMessage] = useState('');

  const sendMessageHandler = () => {
    socket.emit('send-message', { data: enteredMessage });
    setEnteredMessage('');
  };

  return (
    <>
      <div className='block'>
        <div className='relative flex items-center'>
          <input
            type='search'
            id='search'
            className='w-full p-6 text-sm text-gray-900
            outline-none border-l-1'
            placeholder={'Massage ${yourfrinde}'}
          />
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-primary outline-none 
            font-medium rounded-full text-sm p-3'
            onClick={() => sendMessageHandler()}
          >
            <SendSvg />
          </button>
        </div>
      </div>
    </>
  );
};
