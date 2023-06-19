import React, { useContext } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

import { UserContext } from '../../context/Context';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isLoggedIn } = useContext(UserContext);

  // return (
  //   <Routes>
  //     <Route
  //       {...rest}
  //       element={isLoggedIn ? <Component /> : <Navigate to='/error' replace />}
  //     />
  //   </Routes>
  // );
  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
