import React from 'react';
import Avatar from './Avatar';

const User = ({ id, username }) => {
  return (
    <div
      className='cursor-pointer transition-all hover:bg-gray-50 p-3 flex justify-around items-center gap-2'
      onClick={() => console.log(id)}
    >
      <Avatar src='/userr.jpg' alt={username} />
      <div className='user-info flex flex-col gap-1'>
        <p className='username text-lg font-[500]'>{username}</p>
        <p className='user-about text-sm truncate w-40 text-gray-700'>
          Lorem ipsum dolor sit, amet 
          consectetur adipisicing elit. Nesciuntdsd
        </p>
      </div>
      <p className='time text-xs self-start text-gray-700'>1:55PM</p>
    </div>
  );
};

export default User;
