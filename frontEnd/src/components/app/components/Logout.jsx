import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BiPowerOff } from 'react-icons/bi';

import { logoutRoute } from '../../../utils/APIRoutes';
const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.get(logoutRoute, { withCredentials: true });
      localStorage.clear();
      navigate('/login');
      console.log('SUCCESS');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <button
      onClick={() => logoutHandler()}
      className='flex justify-center items-center p-2 rounded-md bg-[#9a86f3] border-none cursor-pointer'
    >
      <BiPowerOff className='text-lg text-[#ebe7ff]' />
    </button>
  );
};

export default Logout;
