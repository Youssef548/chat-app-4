import React, { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';
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
  const { currentId, setCurrentId } = useContext(CurrentUserContext);

  // const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    {
      !hasFriends && openModal();
    }
  }, []);

  return (
    <>
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
        hasFriends={hasFriends}
      />
    </>
  );
};
