import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ChatSquareDots } from 'react-bootstrap-icons';

import "./Group.css";

export const Group = (props) => {

  return (
    <div className="group__container">
      <div className="group__title-wrapper">
        <ChatSquareDots size={18} color="#0061FE" style={{ marginRight: '10px' }}/>
        <p className="group__title">general</p>
      </div>
      <div className="chat__messageCount">
        <p className="chat__messageCount-text">99+</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Group)
