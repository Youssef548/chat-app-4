import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className='w-[60px] h-[60px] rounded-full'></img>
  );
};

export default Avatar;
