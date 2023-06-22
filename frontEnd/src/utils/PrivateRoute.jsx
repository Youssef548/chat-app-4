import { Navigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../config/axios';
import DashboardPage from '../pages/Dashboard';

const PrivateRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/auth/validate');
        if (response.status === 200 && response.data.isAuthenticated === true) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setLoading(false);
      } catch (error) {
        setIsLoggedIn(false);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading state while fetching data
  }

  return isLoggedIn ? <DashboardPage /> : <Navigate to='/auth' />;
};

export default PrivateRoute;
