import React from 'react'
import { connect } from 'react-redux'

import "./SideBar.css";
import {} from '../../components';

export const SideBar = (props) => {
  return (
    <div className="sideBarContainer">
      side bar
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
