import { useState, useContext, useEffect } from 'react';
import {
  RouterProvider,
  Navigate,
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Sidebar } from './components/app/sidebar';
import Chat from './components/app';
// import Form from './components/auth/form';

import { Register } from './components/auth/register';
import { Login } from './components/auth/Login';
import { UserContext, UserContextProvider } from './context/Context';
import PrivateRoute from './components/routing/PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';
// import { AuthenticationPage } from './pages/Authentication';
// import { action as AuthAction } from './pages/Authentication';

import { AuthenticationPage, HomePage, authAction } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
    ],
  },
]);

function App() {
  // const usr = useContext(UserContext);

  // const { isLoggedIn, setIsLoggedIn } = usr;

  return (
    <>
      <RouterProvider router={router} />

      {/* <Routes>
        <Route exact path='/'>
          <Redirect to='/auth' />
        </Route> */}
      {/* 
        <Route path='/register' element={!isLoggedIn && <Register />}></Route>
        <Route path='/login' element={<Login />} />

        <Route path='/home' element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/error' component={Error} /> */}
      {/* </Routes> */}
    </>
  );

  {
    /* <h1 className='text-3xl'>hi i am a css developer</h1>
      <Form />
      <Sidebar />
      <Chat /> */
  }
}

export default App;
