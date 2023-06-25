import React, { useEffect, useState } from 'react';
import User from '../components/User';
import { axiosInstance } from '../../../config/axios';
import AddFriendModal from '../components/AddFriendModal';

export const UsersSidebar = ({
  socket,
  hasFriends,
  friends,
  isModalOpen,
  closeModal,
  addFriend,
  openModal,
}) => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <>
      {!hasFriends && (
        <button
          onClick={openModal}
          className='py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none'
        >
          Add Friend
        </button>
      )}

      {hasFriends &&
        friends.map((user) => {
          const { _id } = user;
          return (
            <User
              username={_id}
              id={_id}
              key={_id}
              setCurrentId={setCurrentId}
              activeClass={`${currentId == _id ? 'active-user' : ''}`}
            />
          );
        })}
      <AddFriendModal
        isOpen={isModalOpen}
        onClose={closeModal}
        addFriend={addFriend}
        socket={socket}
      />
    </>
  );
};
