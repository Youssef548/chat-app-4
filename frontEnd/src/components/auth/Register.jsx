import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { axiosInstance } from '../../config/axios';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    const data = { email, password };

    try {
      const res = await axiosInstance.post('auth/register', data);
      if (res.status === 200) {
        // restore and go to Login with useContext
        // Succufull
        console.log('SUCCESSS');
      } else if (res.status === 400) {
        //{type:"error",message:"username already taken"} if already taken
        console.log('FAILED');
      }
    } catch (error) {
      console.log('ERROR', error);
    }

    setPassword('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Email:
        </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Password:
        </label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300'
      >
        Register
      </button>
      <p>
        <Link to='/login'>You Already Have Account</Link>
      </p>
    </form>
  );
};
