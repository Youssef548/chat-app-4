import React, { useState } from 'react';

import { Form, useSearchParams, Link, useActionData } from 'react-router-dom';


import Button from '../app/components/Button';
import Input from '../app/components/Input';

import {LockSvg,MailSvg,UserSvg,LoginSvg} from '../svg/Svg'

const AuthForm = () => {
  const [searchParams] = useSearchParams('');
  const isLogin = searchParams.get('mode') === 'login';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const data = useActionData();

  
  return (
    <div className='h-[calc(100vh-16vh)] flex flex-row justify-center items-center px-4 sm:px-6 lg:px-16 mx-auto'>
      <div className="flex-1">
        <Form method='post' className='max-w-md'>
          <h1  className='text-gray-700 my-5'>{isLogin ? 'Login' : 'Signup'}</h1>
          {data &&
            data.errors &&
            Object.values(data.erros.map((err) => <li key={err}>{err}</li>))}
          {data && data.message && <p>{data.message}</p>}
          <div className='mb-4'>
            <Input label="Username" id="username" type="username" value={username} icon={<UserSvg />} setter={setUsername}/>
          </div>
          <div className='mb-4'>
            <Input label="Password" id="password" type="password" value={password} icon={<LockSvg />} setter={setPassword}/>
          </div>
              <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
          <p  className='text-gray-700 my-5'>
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
              {isLogin ? 'Create new user' : 'Login'}
            </Link>
          </p>
        </Form>
      </div>
      <div className='flex-1 max-w-[550px]'>
        <img src='/login.svg' />
      </div>
    </div>
  );
};

export default AuthForm;

