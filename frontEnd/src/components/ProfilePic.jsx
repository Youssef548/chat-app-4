import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Buffer } from 'buffer';
import { setAvatarRoute } from '../utils/APIRoutes';

function ProfilePic() {
  const api = 'https://api.multiavatar.com';
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPofilePic, setSelectedPofilePic] = useState(undefined);

  const toastStyles = {
    position: 'top-center',
  };

  useEffect(() => {
    const setProfilePicture = async () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        console.log(image);
        const buffer = Buffer(image.data);
        data.push(buffer.toString('base64'));
      }
      setProfilePic(data);
      setIsLoading(false);
    };
    setProfilePicture();
  }, []);

  const changeProfilePic = async () => {
    if (!selectedPofilePic || isLoading) {
      return;
    }

    try {
      const response = await axios.post(
        setAvatarRoute,
        {
          image: profilePic[selectedPofilePic],
        },
        {
          withCredentials: true,
        }
      );

      setSelectedPofilePic(undefined);

      const userData = JSON.parse(localStorage.getItem('user'));
      const updatedUserData = {
        ...userData,
        img: response.data.image,
      };
      localStorage.setItem('user', JSON.stringify(updatedUserData));

      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='profilePage container mx-auto px-4'>
        .
        <div className='title-container mb-8'>
          <h1>Pick your favorite profile picture</h1>
        </div>
        <div className='profilePics avatars grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {!isLoading &&
            profilePic.map((pic, index) => {
              return (
                <div
                  key={index}
                  className={`pic ${
                    selectedPofilePic === index ? 'selected' : ''
                  } p-4 text-center cursor-pointer`}
                >
                  <h1 className='text-lg font-bold mb-2'>John Doe</h1>
                  <img
                    src={`data:image/svg+xml;base64,${pic}`}
                    alt='profile pic'
                    onClick={() => setSelectedPofilePic(index)}
                    className='rounded-full w-20 h-20 mx-auto mb-2'
                  />
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => changeProfilePic()}
                  >
                    Set as Profile Picture
                  </button>
                </div>
              );
            })}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default ProfilePic;
