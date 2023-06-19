import { useState, useContext } from 'react';
import { Sidebar } from './components/app/sidebar';
import Chat from './components/app';
import Form from './components/auth/form';
import { Route, Routes, Navigate } from 'react-router';
import { Register } from './components/auth/register';
import { Login } from './components/auth/Login';
import { UserContext } from './context/Context';

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to='/error' />
    }
  />
);

const Home = () => {
  if (!isLoggedIn) {
    return <Redirect to='/error' />;
  }

  return <h1>Welcome to the Home page!</h1>;
};

function App() {
  const usr = useContext(UserContext);

  const { isLoggedIn, setIsLoggedIn } = usr;
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Error = () => <h1>Error: You are not logged in!</h1>;

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/register' />} />

        <Route path='/register' element={!isLoggedIn && <Register />}></Route>
        <Route path='/login' element={<Login />} />

        {/* <PrivateRoute isLoggedIn={isLoggedIn} path='/home' component={Home} /> */}
        {/* <Route path='/error' component={Error} /> */}
      </Routes>

      {/* <h1 className='text-3xl'>hi i am a css developer</h1>
      <Form />
      <Sidebar />
      <Chat /> */}
    </>
  );
}

export default App;
