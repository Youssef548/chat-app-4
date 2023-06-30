import React, { createContext, useState } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ currentId, setCurrentId }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
