const { Server } = require("socket.io");
const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();

// CORS ayarları
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Yeni bir kullanıcı bağlandı:", socket.id);

  // Belirli bir odaya katılma
  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`${socket.id} ID'li kullanıcı ${room} odasına katıldı.`);
  });

  // Belirli bir odadaki kullanıcılara mesaj gönderme
  socket.on("send_message", ({ message, room }) => {
    io.to(room).emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("Kullanıcı ayrıldı:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Sunucu 3001 portunda çalışıyor");
});
