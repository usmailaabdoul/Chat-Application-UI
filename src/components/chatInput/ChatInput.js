import React from 'react';
import { connect } from 'react-redux';
import { Paperclip, EmojiSmile, CursorFill } from 'react-bootstrap-icons';

import './ChatInput.css'

export const ChatInput = (props) => {
  const { setMessage, sendMessage, message } = props;

  return (
    <div className="sendMessage__input">
      <button className="sendMessage__input-icons">
        <Paperclip size={22} color="#0061FE" style={{ transform: "rotate(45deg)" }} />
      </button>
      <button className="sendMessage__input-icons">
        <EmojiSmile size={22} color="#0061FE" style={{ marginRight: '10px' }} />
      </button>
      <input
        className="messageInput"
        placeholder="Type something to send..."
        type="text"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button onClick={(e) => sendMessage(e)} className="sendMessage__button">
        <CursorFill size={22} color="#fff" />
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput)
