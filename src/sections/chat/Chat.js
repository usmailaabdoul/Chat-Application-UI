import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import './Chat.css'
import { SearchBar, ThemeToggle, ChatInput } from "../../components"
import Messages from "../messages/Messages";
import UserProfile from '../userProfile/UserProfile';
import SocketIo from '../../utils/socketIo';
import io from 'socket.io-client';

let socket;

export const Chat = ({ inbox, user }) => {
  console.log({ inbox })
  const [search, setSearch] = useState('');
  // const [name, setName] = useState('')
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  
  const room = 'room_' + inbox._id;
  console.log({ room });

  useEffect(() => {
    setMessages(inbox.messages)
  }, [inbox]);

  // useEffect(() => {
  //   socket = io('http://localhost:5000');
  //   socket.join(room);
  // }, [room])

  useEffect(() => {
    socket.on(room, (message) => {
      console.log({ message })
      console.log({ messages })
      let msgs = messages;
      msgs.push(message);

      setMessages(msgs);
    })

    console.log({ messages })
    
  }, [inbox, user, messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message.length > 0) {
      SocketIo.sendMessage(inbox._id, message)
    }
  }

  console.log({messages})
  return (
    <div id="messagesId" className="d-flex  flex-column justify-content-center" style={{ flex: 1 }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Messages messages={messages} />
      </div>

      <div>
        <ChatInput message={message} setMessage={setMessage} sendMessage={(e) => sendMessage(e)} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ auth, chat }) => ({
  user: auth.user,
  inbox: chat.activeChat,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
