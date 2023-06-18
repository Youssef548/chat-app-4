import React from "react";
import {Chatbox} from "./chat/chatbox";
import {UsersSidebar} from "./chat/usersSidebar";
import {Topbar} from "./chat/topbar";
import {Input} from "./chat/input";

const Chat = () => (
  <>
    <UsersSidebar />
    <Topbar />
    <Chatbox />                               
    <Input />
  </>
);

export default Chat