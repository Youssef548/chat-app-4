import React from 'react';
import { axiosInstance } from '../../config/axios';

const CheckAuth = async () => {
  const url = `http://localhost:3000/auth/validate`;
  // this is just pseudo code to give you an idea of how to do it
  someRequestMethod(url, (resp) => {
    if (resp.status === 200 && resp.data.isAuthenticated === true) {
      setCookie(STORAGE_KEY, resp.data.token);
    }
  });

  try {
    const response = await axiosInstance.get(
      'http://localhost:3000/auth/validate'
    );

    if (response.status === 200 && response.data.isAuthenticated === true) {
      setCookie(STORAGE_KEY, response.data.token)
    }
  } catch (error) {
    console.log('Something went wrong', error);
  }
};

export default CheckAuth;
