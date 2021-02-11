import React from 'react'
import { connect } from 'react-redux'

import "./Chat.css";

export const Chat = (props) => {
  const {user, onClick} = props;

  return (
    <div onClick={() => onClick(user)} className="chat__container">
      <div className="sideBar__profile-wrapper">
        <img className="sideBar__profile-img" src="https://static.toiimg.com/thumb/msid-80622193,width-640,resizemode-4,imgsize-59818/80622193.jpg" alt="profile" />
        <div className="online__indicator" />
      </div>
      <div style={{ flex: 1 }}>
        <div className="d-flex align-items-center">
          <p className="chat__name">{user.name} - {user.email}</p>
          <p className="chat__messageTime">now</p>
        </div>
        <p className="chat__sampleMessage">Deserunt cillum nisi aute excepteur</p>
      </div>
      <div className="chat__messageCount">
        <p className="chat__messageCount-text">+4</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
