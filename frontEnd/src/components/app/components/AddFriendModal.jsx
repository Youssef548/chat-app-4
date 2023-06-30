import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axios';

const AddFriendModal = ({ isOpen, onClose, socket, addFriend, hasFriends }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log(hasFriends);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform your logic to add the user friend to your account
      const response = await axiosInstance.get(`/friends/${username}`);
      socket.emit('send-message', {
        data: 'Hello world',
        receiver: username,
      });

      addFriend({
        _id: username,
        latestDate: new Date().toISOString(),
      });

      // Clear the form
      setUsername('');

      // Close the modal
      onClose();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
      <div className='bg-white rounded-md p-6 w-96'>
        <h2 className='text-lg font-bold mb-4'>Add Friend</h2>
        <form onSubmit={handleSubmit}>
          {!hasFriends && <h1>OOps you don't have a user add one plz</h1>}
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block mb-2 font-bold text-gray-700'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              className='mr-2 py-2 px-4 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
            >
              Add Friend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFriendModal;
