import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PlusCircleFill } from 'react-bootstrap-icons';

import "./CreateButton.css";

export const CreateButton = (props) => {

  return (
      <button className="createButton">
        <PlusCircleFill className="createButton__icon" size={22} color="#0061FE" style={{ marginRight: '10px' }}/>
        Create
      </button>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateButton)
