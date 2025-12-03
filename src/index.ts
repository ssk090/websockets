import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("user connected");
  setInterval(() => {
    socket.send("current price" + Math.random());
  }, 1000);

  socket.on("message", (e) => {
    console.log("message from client", e.toString());
  });
});
