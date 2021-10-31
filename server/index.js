const express = require("express");
const path = require('path');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(express.static(path.join(__dirname, 'public')))

// to allow requests to domains different than localhost:3000
// app.use(cors())

// app.get('/chats', (req, res) => {
//     res.status(200).send({
//         status: 200,
//         data: 'Server and Client are connected'
//     })
// });
// var io = require("socket.io")(server);
// const PORT = 5000;
// app.listen(PORT, () => console.log(`App is live on port ${PORT}`))


io.on('connection', socket => {
    console.log('cliente conectado');
   
    socket.on('joinRoom', ({ username, room }) => {
      console.log("Evento joinRoom");
      const message = `Hi ${username}, welcome into ${room}`;
      socket.emit('message', message);
     });
  });

httpServer.listen(5000);