import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';

import { AuthenticationPage, HomePage, authAction } from './pages';

import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
