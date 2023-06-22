import React from 'react';

export const Input = () => {
  return (
    <>
      <div className='flex gap-2 mx-2 p-2'>
        <input
          type='text'
          placeholder='type your msg'
          className='bg-white flex-grow border p-2 rounded-sm'
        />
        <button className='bg-white p-2 text-black rounded-sm'>
          Icon Send Message
        </button>
      </div>
    </>
  );
};
