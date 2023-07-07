import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chat from '../components/app';
const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('chat-app-user')) {
      navigate('/login');
      console.log('HELLO YA Mo8fl');
    }
  }, []);

  return (
    <>
      <Chat />
    </>
  );
};

export default HomePage;
