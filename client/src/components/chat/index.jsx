import React, { useEffect, useState } from "react";
import SideBar from "./components/sidebar/Sidebar";
import Body from "./components/body/Body";
import MessageBlock from "./components/message-block/MessageBlock";
import styles from "./styles.module.css";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className={styles.chat}>
      <SideBar socket={socket} />
      <main className={styles.main}>
        <Body messages={messages} />
        <MessageBlock socket={socket} />
      </main>
    </div>
  );
};

export default ChatPage;
