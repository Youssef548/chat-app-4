import React from 'react';
import Avatar from './Avatar';

const User = ({ id, username }) => {
  return (
    <div
      className='cursor-pointer bg-blue-100 p-2 flex justify-between gap-5'
      onClick={() => console.log(id)}
    >
      <Avatar src='/userr.jpg' alt={username} />
      <div className='user-info flex flex-col gap-[30px]'>
        <p className='username'>{username}</p>
        <p className='user-about text-xs'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        </p>
      </div>
      <p className='time'>1:55PM</p>
    </div>
  );
};

export default User;
