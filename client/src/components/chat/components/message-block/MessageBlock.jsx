import React, { useState } from "react";
import styles from "./styles.module.css";

const MessageBlock = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("user")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("user"),
        id: `${socket.id}-${Math.random()}`,
        socketID: socket.id,
      });
    }
    // console.log({
    //   user: localStorage.getItem("user"),
    //   message,
    // });
    setMessage("");
  };

  return (
    <div className={styles.messageBlock}>
      <form className={styles.form} onSubmit={handleSend}>
        <input
          type="text"
          className={styles.userMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={styles.btn}>Отправить</button>
      </form>
    </div>
  );
};

export default MessageBlock;
