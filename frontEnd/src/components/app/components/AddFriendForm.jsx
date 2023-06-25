import React, { useState } from 'react';

const AddFriendForm = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your logic to add the user friend to your account
    // For simplicity, let's just log the username to the console
    console.log('Username:', username);

    // Clear the form
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label
          htmlFor='username'
          className='block mb-2 font-bold text-gray-700'
        >
          Username
        </label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          required
        />
      </div>
      <button
        type='submit'
        className='w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
      >
        Add Friend
      </button>
    </form>
  );
};

export default AddFriendForm;
