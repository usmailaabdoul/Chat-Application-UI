import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import './Chat.css'
import { ChatInput } from "../../components"
import Messages from "../messages/Messages";
import { socket } from '../../utils/socketIo';

export const Chat = ({ inbox, user }) => {
  const [search, setSearch] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessages(inbox.messages);

    let room = 'inbox_' + inbox._id;

    socket.emit('join', { room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [inbox, user]);

  useEffect(() => {
    socket.on('message', message => {
      let msgs = messages;
      msgs.push(message);

      setMessages(msgs);
    });

  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    const url = `http://localhost:5000/api/v1/inbox/${inbox._id}/${user._id}?message=${message}`
    fetch(url, {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const statusCode = response.status;
        const responseJson = response.json();
        return Promise.all([statusCode, responseJson]);
      })
      .then((res) => {
        const responseJson = res[1];
        console.log({ responseJson })
        setMessage('');
      })
      .catch((error) => {
        console.log({ error })
      })
  }

  console.log({ messages })
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
