import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client';

import './Chat.css'
import { SearchBar, ThemeToggle, ChatInput } from "../../components"
import Messages from "../messages/Messages";
import UserProfile from '../userProfile/UserProfile';

let socket;

export const Chat = ({ user }) => {
  const [search, setSearch] = useState('');
  const [name, setName] = useState('')
  // const [room, setRoom] = useState('')
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  // const [users, setUsers] = useState('');

  const ENDPOIRT = 'http://localhost:5000';

  useEffect(() => {
    let { name, room } = user

    if (!name) {
      name = sessionStorage.getItem('Name');
      room = sessionStorage.getItem('Room');
    }

    // socket = io(ENDPOIRT);

    setName(name);
    // setRoom(room);

    // socket.emit('join', { name, room }, (error) => {
    //   if (error) {
    //     alert(error);
    //   }
    // });

    return () => { }

  }, [ENDPOIRT, user]);

  useEffect(() => {
    // socket.on('message', (message) => {
    //   setMessages([...messages, message]);
    // })

    // socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    // });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
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
            <p className="m-0 chatMessages__heading-title">Chats with</p>
            <h4 className="chatMessages__header-name">Usmaila Abdoul</h4>
          </div>
        </div>
        <div style={{ overflow: 'auto' }}>
          <Messages messages={messages} name={name} />
        </div>

        <div className="">
          <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
      <div className="verticalLine__seprator" />
      <div className="chatDetails">
        <UserProfile />
      </div>
    </div>
  )
}

const mapStateToProps = ({auth}) => ({
  user: auth.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
