import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import './Chat.css';

import InfoBar from '../infoBar/InfoBar';
import Input from '../input/Input';
import Messages from '../messages/Messages';
import TextContainer from '../textContainer/TextContainer';

import SocketIo from '../../../utils/socketIo';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState('');

  const ENDPOIRT = 'http://localhost:5000';

  useEffect(() => {
    const name = 'abdoul';
    const room = 'abdoul';

    // socket = io(ENDPOIRT);

    setName(name);
    setRoom(room);

    SocketIo.join(name, room)
    // socket.emit('join', { name, room }, (error) => {
    //   if (error) {
    //     alert(error);
    //   }
    // });

    return () => { }

  }, [ENDPOIRT, location]);

  useEffect(() => {
    // let message = SocketIo.recieveMessages();
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })

    // let users = SocketIo.roomData();
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      // socket.emit('sendMessage', message, () => setMessage(''))
      SocketIo.sendMessage('id', message)
    }
  }

  console.log({ messages })
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  )
}

export default Chat;
