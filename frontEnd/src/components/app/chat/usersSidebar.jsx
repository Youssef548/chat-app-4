import React, { useEffect, useState } from 'react';
import User from '../components/User';
import { axiosInstance } from '../../../config/axios';
import AddFriendModal from '../components/AddFriendModal';

const DUMMY_DATA = [
  {
    id: '1',
    username: 'John Doe',
  },
  {
    id: '2',
    username: 'John Doe',
  },
  {
    id: '3',
    username: 'John Doe',
  },
  {
    id: '4',
    username: 'John Doe',
  },
];

export const UsersSidebar = () => {
  const [currentId, setCurrentId] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addFriend = (friend) => {
    setFriends([...friends, friend]);
  };

  const hasFriends = friends.length > 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get('/friends');
        setFriends(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching friends:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
              id={id}
              key={id}
              setCurrentId={setCurrentId}
              activeClass={`${currentId == id ? 'active-user' : ''}`}
            />
          );
        })}
      <AddFriendModal
        isOpen={isModalOpen}
        onClose={closeModal}
        addFriend={addFriend}
      />
    </>
  );
};
