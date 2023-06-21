import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import { redirect } from 'react-router-dom';

const AuthenticationPage = () => {
  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;

  const mode = searchParams.get('mode') || 'signup';

  if (mode !== 'signup' && mode !== 'login') {
    throw json({ message: 'Unsupported mode.', status: 404 });
  }

  const data = await request.formData();
  const authData = {
    username: data.get('username'),
    password: data.get('password'),
  };

  const response = await fetch(`http://localhost:3000/auth/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'something coule not work', status: 500 });
  }

  if (mode === 'login') {
    return redirect('/');
  } else if (mode === 'signup') {
    return redirect('/auth?mode=login');
  }

  return NULL;
}
