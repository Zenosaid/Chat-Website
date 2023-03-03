// Import dependencies
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Set up Express app
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Set up static file serving
app.use(express.static(__dirname + '/public'));

// Set up Socket.io connections
io.on('connection', socket => {
  console.log('New user connected');

  // Handle incoming messages
  socket.on('chat message', msg => {
    console.log('Message:', msg);

    // Broadcast message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
