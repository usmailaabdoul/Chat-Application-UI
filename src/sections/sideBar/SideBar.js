import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setActiveChat } from '../../redux/actions/chatActions';
import { createNewInbox } from '../../redux/actions/inboxActions'

import "./SideBar.css";
import { SearchBar, Chat, Group, CreateButton } from '../../components';

export const SideBar = (props) => {
  const { user } = props;

  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [inboxes, setInboxes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getInbox()
    getUsers();
  }, [])

  const getUsers = () => {
    const url = 'http://localhost:5000/api/v1/users'
    fetch(url, {
      method: 'GET',
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
        // const statusCode = res[0];
        const responseJson = res[1];

        // let _users =  []
        // responseJson.map((u) => {

        //   let index = inboxes.findIndex((inbox) => inbox.reciever._id !== u._id);

        //   if (index > -1) {
        //     return _users.push(u);
        //   }

        //   return null;
        // });

        // console.log({_users})
        setUsers(responseJson);
      })
      .catch((error) => {
        console.log({ error })
      })
  }

  const getInbox = () => {
    const url = `http://localhost:5000/api/v1/user/inboxes/${user._id}`
    fetch(url, {
      method: 'GET',
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
        // const statusCode = res[0];
        const responseJson = res[1];
        console.log({ responseJson })
        setInboxes(responseJson);
      })
      .catch((error) => {
        console.log({ error })
      })
  }

  const createInbox = (reciever) => {
    setLoading(true)
    const url = `http://localhost:5000/api/v1/inbox`;
    const body = {
      sender: user,
      reciever,
    }

    fetch(url, {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        const statusCode = response.status;
        const responseJson = response.json();
        return Promise.all([statusCode, responseJson]);
      })
      .then((res) => {
        // const statusCode = res[0];
        const responseJson = res[1];
        console.log({ responseJson })
        getInbox()
        setLoading(false)
      })
      .catch((error) => {
        console.log({ error })
        setLoading(false)
      })
  }

  return (
    <div className="sideBarContainer">
      <div>
        <p className="sideBar__heading">ChatBox</p>

        <div className="sideBar__search">
          <SearchBar placeholder="Search" value={search} onChange={setSearch} />
        </div>
      </div>

      <p className="chats__title">Conversations</p>
      <div className="sideBar__chats-details" >
        {inboxes && inboxes.map((inbox, key) => {
          let u;
          if (user._id === inbox.reciever._id) {
            u = inbox.sender
          } else {
            u = inbox.reciever;
          }


          return (
            <div key={key}>
              <Chat
                user={u}
                onClick={() => {
                  props.setActiveChat(inbox);
                }}
              />
            </div>
          )
        })}
      </div>
      <div className="SideBar__verticalLine-seprator" />
      <div className='d-flex align-items-center'>
        <p className="chats__title" style={{ flex: 1 }}>Groups</p>
        {loading && (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" style={{ width: '1.5rem', height: '1.5rem', color: '#0061FE', marginRight: '2rem' }} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div className="sideBar__group-details" >
        {users && users.map((u, key) => (
          <div key={key}>
            <Chat
              user={u}
              onClick={(reciever) => createInbox(reciever)}
            />
          </div>
        ))}
        <Group />
        <Group />
      </div>
      <div className="SideBar__verticalLine-seprator" />
      <div className="sideBar__createInput">
        <CreateButton />
      </div>
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

export default connect(mapStateToProps, { setActiveChat, createNewInbox })(SideBar)
