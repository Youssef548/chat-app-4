import React from 'react';

export const UsersSidebar = () => {
  // display: flex;
  //   flex-direction: column;
  //   gap: 30px;
  return (
    <div className='cursor-pointer bg-blue-100 p-2 flex justify-between gap-5'>
      <img
        src='/userr.jpg'
        alt='user-avatar'
        className='w-[50px] h-[50px] rounded-full '
      />
      <div className='user-info flex flex-col gap-[30px]'>
        <p className='username'>John Doe</p>
        <p className='user-about text-xs'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        </p>
      </div>
      <p className='time'>1:55PM</p>
    </div>
  );
};
