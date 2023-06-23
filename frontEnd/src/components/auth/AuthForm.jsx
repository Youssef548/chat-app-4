import React, { useState } from 'react';

import { Form, useSearchParams, Link, useActionData } from 'react-router-dom';

const AuthForm = () => {
  const [searchParams] = useSearchParams('');
  const isLogin = searchParams.get('mode') === 'login';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const data = useActionData();

  return (
    <div className='h-screen flex flex-row justify-center items-center px-4 sm:px-6 lg:px-8'>
      <Form method='post' className='max-w-md mx-auto basis-[70%]'>
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
        {data &&
          data.errors &&
          Object.values(data.erros.map((err) => <li key={err}>{err}</li>))}

        {data && data.message && <p>{data.message}</p>}
        <div className='mb-4'>
          <label
            htmlFor='username'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Username:
          </label>
          <input
            type='username'
            name='username'
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
            name='password'
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
          {isLogin ? 'Login' : 'Register'}
        </button>
        <p>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
        </p>
      </Form>
      <div className='flex-1 max-w-[550px]'>
        <img src='/login.svg' />
      </div>
    </div>
  );
};

export default AuthForm;
