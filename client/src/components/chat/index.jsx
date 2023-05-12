import React from "react";
import SideBar from "./components/sidebar/Sidebar";
import Body from "./components/body/Body";
import MessageBlock from "./components/message-block/MessageBlock";
import styles from "./styles.module.css";

const ChatPage = ({ socket }) => {
  return (
    <div className={styles.chat}>
      <SideBar />
      <main className={styles.main}>
        <Body />
        <MessageBlock />
      </main>
    </div>
  );
};

export default ChatPage;
