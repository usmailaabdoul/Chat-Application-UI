import React, { useState }from 'react'
import { connect } from 'react-redux'

import "./SideBar.css";
import {SearchBar, Chat} from '../../components';

export const SideBar = (props) => {
  const [search, setSearch] = useState('');

  return (
    <div className="sideBarContainer">
      <p className="sideBar__heading">ChatBox</p>

      <div className="sideBar__search">
        <SearchBar placeholder="Search" value={search} onChange={setSearch} />
      </div>

      <div className="sideBar__chats">
        <p className="chats__title">Conversations</p>
        <Chat/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
