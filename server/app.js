require('./models-relation')
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: true,
  origins: ['http://locahost:9000']
});

app.use(express.urlencoded({ extended: true, limit: 60000 }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
    );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  req.io = io
  next()
})

io.on('connection', (socket) => {
  console.log("Ah un nouvel utilisateur s'est connecté")
});

server.listen(9000, () => {
  console.log('listening on *:9000');
});

// To use controller
app.use(require('./controllers/users'))
app.use(require('./controllers/tasks'))
app.use(require('./controllers/messages'))
