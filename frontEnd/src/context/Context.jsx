import { useState, createContext } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
