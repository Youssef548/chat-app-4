import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { axiosInstance } from '../../config/axios';

export const Register = () => {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    const data = { username, password };

    if (!username) {
      setError('Username is required.');
      console.log('VALIDATE ERROR');
      return;
    }

    if (username.length < 3 || username.length > 20) {
      setError('Username must be between 3 and 20 characters.');
      console.log('VALIDATE ERROR');
      return;
    }
    // Add additional validation rules for the username field, such as character restrictions and uniqueness

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      console.log('VALIDATE ERROR');
      return;
    }
    // Add additional validation rules for the password field, such as password strength requirements

    try {
      const res = await axiosInstance.post('auth/register', data);
      if (res.status === 200) {
        navigateTo('/login');
        console.log('SUCCESSS');
      }
    } catch (error) {
      console.log('ERROR', error.response.data.message);
    }

    setPassword('');
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Name:
        </label>
        <input
          type='name'
          id='name'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
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
