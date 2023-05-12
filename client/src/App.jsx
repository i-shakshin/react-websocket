import { Route, Routes } from "react-router-dom";
import socketIo from "socket.io-client";
import Home from "./components/home/Home";
import ChatPage from "./components/chat";
const socket = socketIo.connect("http://localhost:5000");

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />} />
    </Routes>
  );
};

export default App;
