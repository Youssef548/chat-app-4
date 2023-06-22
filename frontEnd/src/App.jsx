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

import { UserContext, UserContextProvider } from './context/Context';
import PrivateRoute from './utils/PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';

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
      {
        path: 'dashboard',
        element: <PrivateRoute />,
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
