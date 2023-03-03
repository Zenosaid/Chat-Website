const socket = io();

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const messages = document.getElementById('messages');

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (message) {
    socket.emit('chat message', message);
    chatInput.value = '';
  }
});

socket.on('chat message', message => {
  const li = document.createElement('li');
  li.textContent = message;
  messages.appendChild(li);
});
