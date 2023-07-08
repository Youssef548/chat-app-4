import React, { useEffect, useState, useContext } from 'react';
import Message from './Message';
import { CurrentUserContext } from '../../../context/CurrentUserContext';
import { MessageContext } from '../../../context/MessagesContext';
import { axiosInstance } from '../../../config/axios';

export const Chatbox = ({ friends, setFriends, socket }) => {
  const { currentId, setCurrentId } = useContext(CurrentUserContext);
  const { messages, addMessage } = useContext(MessageContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!currentId && friends.length !== 0) {
      setCurrentId(friends[0]._id);
    }
  }, []);

  useEffect(() => {
    socket.on('recive-data', (data) => {
      for (let i = 0; i < friends.length; i++) {
        if (data.sender == friends[i]._id) {
          let freindsCopy = [...friends];
          let friend = freindsCopy.splice(i, 1);
          freindsCopy.unshift(...friend);
          setFriends(freindsCopy);
        }
      }

      if (data.sender == currentId) {
        addMessage(data);
      }
    });
  }, []);

  useEffect(() => {
    // fetch messages API
    if (currentId) {
      const fetchData = async () => {
        const res = await axiosInstance.get(
          `/message?page=${currentPage}&username=${currentId}`
        );
        res.data.reverse();
        addMessage(...res.data);
        setIsLoading(false);
      };

      fetchData();
    }
  }, [currentId]);

  return (
    <div className='p-4 md:p-8 flex flex-col gap-4 overflow-auto flex-grow '>
      <div className='messages flex flex-col gap-4 flex-grow items-start'>
        {isLoading && <h1>Please Select a user</h1>}
        {!isLoading && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
