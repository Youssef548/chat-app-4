import React, { useEffect, useState } from 'react';
import User from '../components/User';
import { axiosInstance } from '../../../config/axios';
const DUMMY_DATA = [
  {
    id: '1',
    username: 'John Doe',
  },
  {
    id: '2',
    username: 'John Doe',
  },
  {
    id: '3',
    username: 'John Doe',
  },
  {
    id: '4',
    username: 'John Doe',
  },
];

export const UsersSidebar = () => {
  const [friendss, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get('/friends');
        console.log(res.data);
        setFriends(res.data);
      } catch (error) {
        console.log('Error fetching friends:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {DUMMY_DATA.map((user) => {
        const { username, id } = user;
        return <User username={username} id={id} key={id} />;
      })}
    </>
  );
};
