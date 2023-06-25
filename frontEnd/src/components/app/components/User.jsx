import React, { useState } from 'react';
import Avatar from './Avatar';

import './User.css';

const User = ({ id, username, setCurrentId, activeClass }) => {
  return (
    <div
      className={`cursor-pointer transition-all hover:bg-gray-50 p-3 flex justify-around items-cente gap-2 
     ${activeClass} `}
      onClick={() => {
        setCurrentId(id);
      }}
    >
      <Avatar src='/userr.jpg' alt={username} />
      <div className='user-info flex flex-col gap-1'>
        <p className='username text-lg font-[500]'>{username}</p>
        <p className='user-about text-sm truncate w-40 text-gray-700'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciuntdsd
        </p>
      </div>
      <p className='time text-xs self-start text-gray-700'>1:55PM</p>
    </div>
  );
};

export default User;
