import React from 'react';
import { connect } from 'react-redux';

import './Message.css'

export const Message = (props) => {
  const { message, id, user } = props;

  let isUser = false;

  if(id === user.id) {
    isUser = true;
  }

  return (
    <div className={isUser ? "message__container message__container-right" : "message__container message__container-left"} >
      <div className={isUser ? "right-message" : "left-message"}>
        <p className="m-0">{message}</p>
      </div>
      <p className={isUser ? "right-message-time" : "left-message-time"}>11:50</p>
    </div>
  )
}

const mapStateToProps = ({auth}) => ({
  user: auth.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
