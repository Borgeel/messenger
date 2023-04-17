import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState();
  const [room, setRoom] = useState("");

  return (
    <>
      <h1 className="join-header">Login</h1>
      <div className="join-container">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          className="join-input"
          type="text"
          placeholder="Enter Username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          className="join-input"
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="room">
          <b>Room</b>
        </label>
        <input
          className="join-input"
          type="text"
          placeholder="Room"
          name="room"
          onChange={(e) => setRoom(e.target.value)}
          required
        />
        <Link
          onClick={(e) =>
            !username && !password && !room ? e.preventDefault() : null
          }
          to={`/chat/?name=${username}&room=${room}`}
        >
          <button className="join-button" type="submit">
            Login
          </button>
        </Link>
      </div>
    </>
  );
};

export default Join;
