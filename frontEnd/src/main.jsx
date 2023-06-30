import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { UserContextProvider } from './context/Context.jsx';
import { CurrentUserProvider } from './context/CurrentUserContext.jsx';
import { MessageProvider } from './context/MessagesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <CurrentUserProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </CurrentUserProvider>
    </UserContextProvider>
  </React.StrictMode>
);
