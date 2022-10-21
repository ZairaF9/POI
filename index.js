require('dotenv').config();
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const https = require('http');
const server = https.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket)=>{
    console.log('un usuario se a conectado');
    socket.on('chat', (message)=>{
        io.emit('chat', message);
    });
})

app.use(cors());
app.use(express.json());
routerApi(app);

server.listen(port, ()=>{
    console.log('Este es mi puerto ' + port);
});

/*app.listen(port, ()=>{
    console.log('Este es mi puerto ' + port);
});*/