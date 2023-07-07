import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { registerRoute } from '../utils/APIRoutes';

import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (localStorage.getItem('chat-app-user')) {
      navigate('/');
    }
  }, []);

  const navigate = useNavigate();

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { username, email, password } = values;

      try {
        const { data } = await axios.post(registerRoute, {
          username,
          email,
          password,
        });

        

        navigate('/');
      } catch (err) {
        console.log(err);
        toast.error(err.message, toastOptions);
      }
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const errors = {};

    const { username, email, password, confirmPassword } = values;

    // Validate username
    if (username.trim() === '') {
      errors.username = 'Username is required';
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email address';
    }

    // Validate password
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // Validate confirmPassword
    if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
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
          type='email'
          placeholder='Email'
          name='email'
          value={values.email}
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
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline'
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Create User
        </button>
        <span className='block text-center mt-4'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-500 font-bold'>
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
