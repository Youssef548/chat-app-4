import React from 'react';
import { axiosInstance } from '../../../config/axios';
import { useNavigate } from 'react-router';
import AddFriendModal from '../components/AddFriendModal';

export const Topbar = ({
  socket,
  isModalOpen,
  closeModal,
  addFriend,
  openModal,
}) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await axiosInstance.get('/auth/logout');
      navigate('/auth');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex-grow'>
      Topbar
      <button
        onClick={logout}
        className='py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none'
      >
        Logout
      </button>
      <button
        onClick={openModal}
        className='py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none'
      >
        Add Friend
      </button>
      <AddFriendModal
        isOpen={isModalOpen}
        onClose={closeModal}
        addFriend={addFriend}
        socket={socket}
      />
    </div>
  );
};
