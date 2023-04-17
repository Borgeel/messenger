import express from "express";
import bodyParser from "body-parser";
import http from "http";
import router from "./server/router.js";
import { Server } from "socket.io";
import cors from "cors";

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
  console.log("We have a new connection");

  socket.on("join", ({ name, room }) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("User left");
  });
});

app.use(router);
// io.use(router);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
io.listen(SOCKET, () => console.log(`Socket running on port: ${SOCKET}`));
