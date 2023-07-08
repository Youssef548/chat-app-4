import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
// import {setAvatarRoute}

const SetAvatar = () => {
  const api = `https://api.multiavatar.com/4645646`;
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  useEffect(() => {
    if (!localStorage.getItem('chat-app-user')) {
      navigate('/');
    }
  }, []);

  const setAvatarPicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error('Please select an avatar', toastOptions);
    } else {
      const user = await JSON.parse(localStorage.getItem('chat-app-user'));

      const { data } = await axios.post(`${setAvatarRoute}/${user.id}`, {
        image: avatars[selectedAvatar],
      });

      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem('chat-app-user', JSON.stringify(user));
        console.log('IAM HERE MOHAMED');
        navigate('/');
      } else {
        toast.error('Error setting avatar. Please try again.', toastOptions);
      }
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const data = [];
      try {
        for (let i = 0; i < 4; i++) {
          const image = await axios.get(
            `${api}/${Math.round(Math.random() * 1000)}`
          );

          const buffer = Buffer.from(image.data);
          data.push(buffer.toString());
        }
        setAvatars(data);
        setIsLoading(false);
      } catch (e) {
        console.log('Error fetching images', e.message);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='container'>
          <div className='title-container'>
            <h1>Pick an Avatar as your profiel picutre</h1>
          </div>
          <div className='avatars'>
            {avatars.map((avatar, index) => {
              <div
                className={`${
                  selectedAvatar === index ? 'selected' : ''
                } avatar`}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt='avatar'
                  key={avatar}
                  onClick={() => selectedAvatar(index)}
                />
              </div>;
            })}
          </div>
          <button onClick={setAvatarPicture}>Set as Profile Picture</button>
        </div>
      )}
    </>
  );
};

export default SetAvatar;
