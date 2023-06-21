import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { axiosInstance } from '../../config/axios';
import axios from 'axios';
import { UserContext } from '../../context/Context';

export const Login = () => {
  const usr = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = usr;
  const navigateTo = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [isLoggedIn, SetIsLoggedIn] = useState(null);
  const [error, setError] = useState('');
  const [dataa, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    const data = { username, password };

    if (!username) {
      setError('Username is required.');
      console.log('VALIDATE ERROR');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      console.log('VALIDATE ERROR');
      return;
    }
    // Add additional validation rules for the password field, such as password strength requirements

    try {
      const res = await axiosInstance.post('auth/login', data);
      if (res.data === 'Sucssfuly authed') {
        setIsLoggedIn(true);
        navigateTo('/home');
        setPassword('');
        setUsername('');
      } else {
        console.log('USER NOT FOUND');
      }
    } catch (error) {
      console.log(data);
      console.log('ERROR', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Username:
        </label>
        <input
          type='text'
          id='username'
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
        Login
      </button>
      <p>
        <Link to='/register'>Don't have an account? Register</Link>
      </p>
    </form>
  );
};
