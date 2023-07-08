import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';

import { SetAvatarPage, HomePage, Register, Login } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/setAvatar' element={<SetAvatarPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
