import React from 'react'
import { connect } from 'react-redux'
import "./Messages.css";
import { Message } from '../../components';

export const Messages = (props) => {
  const {messages, id} = props;

  return (
    <div className="messages__container">
      <div className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} id={id} /></div>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
