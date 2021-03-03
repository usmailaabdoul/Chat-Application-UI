import io from 'socket.io-client';

const ENDPOIRT = 'http://localhost:5000';

// let socket;

export let socket = io(ENDPOIRT);

class SocketIo {
  constructor(socket) {
    this.socket = socket;
  }

}

const socketIo = new SocketIo(socket);

export default socketIo;