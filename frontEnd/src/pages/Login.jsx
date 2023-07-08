import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { isLoggedRoute, loginRoute } from '../utils/APIRoutes';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const res = await axios.get(isLoggedRoute, { withCredentials: true });
      if (res.status === 200) {
        navigate('/');
      } else if (res.status === 401) {
        return;
      }
    };
    checkIsLoggedIn();
  }, []);

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = values;
    if (handleValidation()) {
      try {
        await axios.post(
          loginRoute,
          {
            username,
            password,
          },
          {
            withCredentials: true,
          }
        );

        navigate('/');
      } catch (e) {
        console.log(e);
        toast.error(e.message);
      }
    }
  };

  const handleValidation = () => {
    const errors = {};

    const { username, password } = values;

    // Validate username
    if (username.trim() === '') {
      errors.username = 'Username is required';
    }

    // Validate password
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // Display error toasts
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toast.error(error, toastOptions);
      });
    }

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <ToastContainer />
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit}
      >
        <div className='brand mb-6 text-center'>
          <h1 className='text-2xl font-bold'>snappy</h1>
        </div>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Username'
          name='username'
          value={values.username}
          onChange={handleChange}
        />
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline'
          type='password'
          placeholder='Password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Login
        </button>
        <span className='block text-center mt-4'>
          Don't have an account?{' '}
          <Link to='/register' className='text-blue-500 font-bold'>
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
