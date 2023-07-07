import React, { useState, useContext, useEffect } from 'react';
import { SendSvg } from '../../svg/Svg';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

import { MessageContext } from '../../../context/MessagesContext';

export const Input = ({ socket, setFriends, friends }) => {
  const [enteredMessage, setEnteredMessage] = useState('');

  const { currentId } = useContext(CurrentUserContext);

  const { messages, addMessage } = useContext(MessageContext);

  const sendMessageHandler = () => {
    socket.emit('send-message', { data: enteredMessage, receiver: currentId });
    socket.on('load-messages', (data) => {
      console.log(data);
    });

    console.log('TESTTEST');

    addMessage({ data: enteredMessage });

    setEnteredMessage('');

    if (
      Array.isArray(friends) &&
      friends.length > 0 &&
      friends[0]._id !== currentId
    ) {
      const updatedFriends = friends.map((friend) => {
        if (friend._id === currentId) {
          return {
            ...friend,
            latestDate: new Date().toISOString(),
          };
        }
        return friend;
      });

      const sortedFriends = updatedFriends.sort(
        (a, b) => new Date(b.latestDate) - new Date(a.latestDate)
      );

      setFriends(sortedFriends);
    }
  };

  function loadData() {
    socket.on('load-messages', (data) => {
      console.log('ASHTGHLII BKA');
      console.log(data);
    });
  }

  return (
    <>
      <div className='block'>
        <div className='relative flex items-center'>
          <input
            type='search'
            id='search'
            className='w-full p-6 text-sm text-gray-900
            outline-none border-l-1'
            placeholder={`Message ${'yourFriend'}`}
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          />
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-primary outline-none 
            font-medium rounded-full text-sm p-3'
            onClick={() => {
              sendMessageHandler();
              loadData();
            }}
          >
            <SendSvg />
          </button>
        </div>
      </div>
    </>
  );
};
