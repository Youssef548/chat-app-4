import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className='w-[50px] h-[50px] rounded-full'></img>
  );
};

export default Avatar;
