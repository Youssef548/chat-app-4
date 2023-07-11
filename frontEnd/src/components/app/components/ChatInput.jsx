import React, { useState } from 'react';
// import EmojiPicker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';

const ChatInput = ({ handleMsg: handleSendMsg }) => {
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState('');

  // const handleEmojiPickerHideShow = () => {
  //   setShowEmojiPicker(!showEmojiPicker);
  // };

  const sendMsg = (e) => {
    e.preventDefault();

    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg('');
    }
  };

  return (
    <div className='container flex  items-center bg-[#0a0a13] py-4 px-8 gap-4'>
      <div className='button-container flex items-center gap-1 text-white'>
        <div className='emoji'>
          <BsEmojiSmileFill
            // onClick={() => handleEmojiPickerHideShow()}
            className='text-yellow-300 text-lg cursor-pointer relative'
          />
          {/* {showEmojiPicker && <EmojiPicker className='absoloute top-0 ' />} */}
          <div className='emoji-picker-react absolute top-0 -mt-48 bg-black bg-opacity-90 shadow border border-purple-600 rounded p-2'>
            {/* Emoji picker content */}
          </div>
        </div>
      </div>
      <form
        className='input-container w-full rounded-2xl flex items-center justify-between gap-8 bg-white bg-opacity-20 p-2'
        onSubmit={(e) => sendMsg(e)}
      >
        <input
          type='text'
          placeholder='type your message here'
          className='w-90% h-60% bg-transparent text-white border-none pl-4 text-lg focus:outline-none'
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className='submit py-1 px-8 rounded-full flex justify-center items-center bg-purple-600 border-none'>
          <IoMdSend className='text-white text-2xl' />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
