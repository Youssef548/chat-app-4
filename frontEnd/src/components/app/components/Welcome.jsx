import React, { useState, useEffect } from 'react';
import Robot from '../../../assets/robot.gif';
const Welcome = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    setUsername(data.username);
  }, []);

  return (
    <div className='flex justify-center items-center text-white flex-col'>
      <img src={Robot} className='h-[20rem]' alt='' />{' '}
      <h1 className='text-2xl'>
        Welcome, <span className='#4e0eff'>{username}!</span>
      </h1>
    </div>
  );
};

export default Welcome;
