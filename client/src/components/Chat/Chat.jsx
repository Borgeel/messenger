import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { socket, URL } from "../../socket";

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [query] = useSearchParams();

  useEffect(() => {
    const name = query.get("name");
    const room = query.get("room");

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room });
  }, [URL, name, room]);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="chat-header">Heading</div>
        <div className="chat-box"></div>
        <div className="message-box">
          <input type="text" className="message" />
          <label htmlFor=""></label>
          <button className="chat-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
