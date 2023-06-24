import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className='w-[70px] h-[70px] rounded-full'></img>
  );
};

export default Avatar;
