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
      {!hasFriends && openModal()}

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
