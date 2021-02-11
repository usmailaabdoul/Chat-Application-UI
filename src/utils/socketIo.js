import io from 'socket.io-client';

const ENDPOIRT = 'http://localhost:5000';

let socket;

socket = io(ENDPOIRT);

class SocketIo {
  constructor(socket) {
    this.socket = socket;
  }

  createNewInbox(sender, reciever) {
    this.socket.emit('createNewInbox', { sender, reciever }, () => console.log('hello'))
  }

  recieveMessages(inboxId) {
    this.socket.on(`${inboxId}`, (message) => {
      // setMessages([...messages, message]);
      console.log({ message })
      return message;
    })
  }

  sendMessage(inboxId, message) {
    this.socket.emit('sendMessage', { inboxId, message }, (error) => console.log('error', error))
  }

}

const socketIo = new SocketIo(socket);

export default socketIo;