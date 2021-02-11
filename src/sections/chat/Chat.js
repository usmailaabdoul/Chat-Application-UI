import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import './Chat.css'
import { SearchBar, ThemeToggle, ChatInput } from "../../components"
import Messages from "../messages/Messages";
import UserProfile from '../userProfile/UserProfile';
import SocketIo from '../../utils/socketIo';

export const Chat = ({ inbox, user }) => {
  console.log({inbox})
  const [search, setSearch] = useState('');
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {

    // socket.emit('join', { name, room }, (error) => {
    //   if (error) {
    //     alert(error);
    //   }
    // });

  }, [inbox, user]);

  useEffect(() => {

    let message = SocketIo.recieveMessages(inbox._id);
    console.log('response', {message})
    // setMessages([...messages, message]);

    // socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    // });
  }, [inbox, user]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message.length > 0) {
      SocketIo.sendMessage(inbox._id, message)
    }
  }

  return (
    <div className="mainChat">
      <div className="chat">
        <div>
          <div className="chat__header">
            <div className="searchBar__container" style={{ flex: 1 }}>
              <SearchBar placeholder="Search for a message..." value={search} onChange={setSearch} />
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>

          <div className="chatMessages-heading">
            {inbox.recieverId && (
              <>
                <p className="m-0 chatMessages__heading-title">Chats with</p>
                <h4 className="chatMessages__header-name">{inbox.reciever.name}</h4>
              </>
            )}
          </div>
        </div>
        <div style={{ overflow: 'auto' }}>
          {!inbox.recieverId ? (
            <div className="d-flex align-items-center justify-content-center h-100">
              <h4>no chats selected</h4>
            </div>
          ) : (
              <Messages messages={messages} id={inbox.id} />
            )}
        </div>

        <div className="">
          <ChatInput message={message} setMessage={setMessage} sendMessage={(e) => sendMessage(e)} />
        </div>
      </div>
      <div className="verticalLine__seprator" />
      <div className="chatDetails">
        <UserProfile />
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
