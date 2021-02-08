import React, { useState } from 'react'
import { connect } from 'react-redux'

import "./Attachment.css";

export const Attachment = (props) => {
  const { type } = props
  return (
    <>
      {type === 'pdf' && (
        <div className="attachment__container">
          <div className="attachment__type-pdf">
            PDF
          </div>
          <p className="attachment__name">attachment name</p>
        </div>
      )}
    </>

  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Attachment)
