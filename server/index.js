import express from "express";
import http from "http";
import router from "./server/router.js";
import { Server } from "socket.io";
import cors from "cors";

import { addUser, removeUser, getUsersInRoom, getUser } from "./users.js";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

const PORT = process.env.PORT || 5000;
const SOCKET = process.env.SOCKET || 4000;

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }) => {
    const { user, error } = addUser({ id: socket.id, name, room });

    if (error) return;

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name}, has joined` });

    socket.join(user.room);
  });

  socket.on("disconnect", () => {
    console.log("User left");
  });
});

app.use(router);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
io.listen(SOCKET, () => console.log(`Socket running on port: ${SOCKET}`));
