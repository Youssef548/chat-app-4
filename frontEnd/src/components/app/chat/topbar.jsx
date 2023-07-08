import React, { useState } from 'react';
import { axiosInstance } from '../../../config/axios';
import { useNavigate } from 'react-router';
import AddFriendModal from '../components/AddFriendModal';

export const Topbar = ({
  socket,
  isModalOpen,
  closeModal,
  addFriend,
  openModal,
  hasFriends,
}) => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const logout = async () => {
    try {
      await axiosInstance.get('/auth/logout');
      navigate('/auth');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='h-50 bg-white justify-end flex p-3  border-b shadow-lg'>
      <img
        src={'/userr.jpg'}
        className='ml-auto h-[40px] w-[40px] rounded-full cursor-pointer relative'
        alt='user-image'
        onClick={() => setToggle((prevState) => !prevState)}
      />
      {toggle && (
        <ul className='bg-white shadow-md rounded-md p-4 mt-4 flex flex-col absolute top-[120px] gap-3 '>
          <li>
            <button
              onClick={logout}
              className='text-gray-800 hover:text-gray-600'
            >
              Logout
            </button>
          </li>
          <li>
            <button
              onClick={openModal}
              className='text-gray-800 hover:text-gray-600'
            >
              Add Friend
            </button>
          </li>

          <AddFriendModal
            isOpen={isModalOpen}
            onClose={closeModal}
            addFriend={addFriend}
            socket={socket}
            hasFriends={hasFriends}
          />
        </ul>
      )}
    </div>
  );
};
