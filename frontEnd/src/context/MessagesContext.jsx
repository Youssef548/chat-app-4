import React, { createContext, useState } from 'react';

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (...message) => {
    setMessages((prevMessages) => [...prevMessages, ...message]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
