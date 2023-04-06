import express from "express";
import bodyParser from "body-parser";
import http from "http";
import router from "./server/router.js";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("We have a new connection");

  socket.on("disconnect", () => {
    console.log("User left");
  });
});

app.use(router);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
