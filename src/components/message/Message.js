import React from 'react';
import { connect } from 'react-redux';

import './Message.css'

export const Message = (props) => {
  const { message, user } = props;

  let isMyMessage = false;

  if(message.sender._id === user.id) {
    isMyMessage = true;
  }

  return (
    <div className={isMyMessage ? "message__container message__container-right" : "message__container message__container-left"} >
      <div className={isMyMessage ? "right-message" : "left-message"}>
        <p className="m-0">{message.message}</p>
      </div>
      <p className={isMyMessage ? "right-message-time" : "left-message-time"}>11:50</p>
    </div>
  )
}

const mapStateToProps = ({auth}) => ({
  user: auth.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
