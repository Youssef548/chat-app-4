import { useState } from 'react';
import { Sidebar } from './components/app/sidebar';
import Chat from './components/app';
import Form from './components/auth/form';
import { Route, Routes, Navigate } from 'react-router';
import { Register } from './components/auth/register';
import { Login } from './components/auth/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/register' />} />

        <Route path='/register' element={!isLoggedIn && <Register />}></Route>
        <Route path='/login' element={<Login />} />
      </Routes>

      {/* <h1 className='text-3xl'>hi i am a css developer</h1>
      <Form />
      <Sidebar />
      <Chat /> */}
    </>
  );
}

export default App;
