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

  join(name, room) {
    this.socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }

  recieveMessages(inboxId) {
    // console.log('anything here ?')
    // this.socket.on('inboxId', (message) => {
    //   // setMessages([...messages, message]);
    //   console.log({ message })
    //   return message;
    // })

    let message = ''
    this.socket.on('message', (m) => {
      message = m;
    })

    return message;
  }

  roomData() {
    // this.socket.on("roomData", (obj) => {
    //   console.log({ obj })
    // });
    let u;
    socket.on("roomData", ({ users }) => {
      u = users;
    });

    return u;
  }

  sendMessage(inboxId, message) {
    // this.socket.emit('sendMessage', { inboxId, message }, (error) => console.log('error', error))
    this.socket.emit('sendMessage', {inboxId, message}, () => console.log('done'))
  }

}

const socketIo = new SocketIo(socket);

export default socketIo;