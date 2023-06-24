import React, { useState } from "react";
import { SendSvg } from "../../svg/Svg";

export const Input = ({ socket }) => {
  const [enteredMessage, setEnteredMessage] = useState("");

  const sendMessageHandler = () => {
    socket.emit("send-message", { data: enteredMessage });
    setEnteredMessage("");
  };

  return (
    <>
      <div className="block">
        {/* <input
          type='text'
          placeholder='type your msg'
          className='bg-white flex-grow border p-2 rounded-sm'
          value={enteredMessage}
          onChange={(e) => setEnteredMessage(e.target.value)}
        />
        <button
          className='bg-white p-2 text-black rounded-sm'
          
        >
          Icon Send Message
        </button> */}
        <div class="relative flex items-center">
          <input
            type="search"
            id="search"
            class="w-full p-6 text-sm text-gray-900
            outline-none border-l-1"
            placeholder={"Massage ${yourfrinde}"} />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-primary outline-none 
            font-medium rounded-full text-sm p-3"
            onClick={() => sendMessageHandler()}
          >
            <SendSvg/>
          </button>
        </div>
      </div>
    </>
  );
};
