import React, { useState } from 'react';

export const Input = ({ socket }) => {
  const [enteredMessage, setEnteredMessage] = useState('');

  const sendMessageHandler = () => {
    socket.emit('send-message', { data: enteredMessage });
    setEnteredMessage('');
  };

  return (
    <>
      <div className='flex gap-2 mx-2 p-2'>
        <input
          type='text'
          placeholder='type your msg'
          className='bg-white flex-grow border p-2 rounded-sm'
          value={enteredMessage}
          onChange={(e) => setEnteredMessage(e.target.value)}
        />
        <button
          className='bg-white p-2 text-black rounded-sm'
          onClick={() => sendMessageHandler()}
        >
          Icon Send Message
        </button>
      </div>
    </>
  );
};
