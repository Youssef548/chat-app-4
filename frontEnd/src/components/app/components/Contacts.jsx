import React, { useState } from 'react';
import './Contacts.css';

const Contacts = ({ contacts, changeChat }) => {
  const [currentSelected, setCurrentSelected] = useState(undefined);

  const changeCurrentUser = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      <div className='w-[30%] bg-[#080420]'>
        <div className='flex flex-col gap-[30px] text-white '>
          {contacts?.map((contact, index) => {
            return (
              <div
                className={`p-4 use-box flex flex-row gap-4 items-center h-[70px] cursor-pointer hover:bg-[#9a86f3]
                ${index === currentSelected ? 'selected' : ''}`}
                onClick={() => changeCurrentUser(index, contact)}
                key={contact.username}
              >
                <img
                  src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                  alt='usr-image'
                  className='w-[50px] h-[50px]'
                />
                <p>{contact.username}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contacts;
