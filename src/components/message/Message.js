import React from 'react';
import { connect } from 'react-redux';

import './Message.css'

export const Message = (props) => {
  const { message: { text, user }, name } = props;

  let isUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isUser = true;
  }

  return (
    <div className={isUser ? "message__container message__container-right" : "message__container message__container-left"} >
      <div className={isUser ? "right-message" : "left-message"}>
        <p className="m-0">{text}</p>
      </div>
      <p className={isUser ? "right-message-time" : "left-message-time"}>11:50</p>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
