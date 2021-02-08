import React, { useState } from 'react'
import { connect } from 'react-redux'

import "./SideBar.css";
import { SearchBar, Chat, Group, CreateButton } from '../../components';

export const SideBar = (props) => {
  const [search, setSearch] = useState('');

  return (
    <div className="sideBarContainer">
      <div>
        <p className="sideBar__heading">ChatBox</p>

        <div className="sideBar__search">
          <SearchBar placeholder="Search" value={search} onChange={setSearch} />
        </div>
      </div>

      <p className="chats__title">Conversations</p>
      <div className="sideBar__chats-details" >
        <Chat />
        <Chat />
      </div>
      <div className="SideBar__verticalLine-seprator" />
      <p className="chats__title">Groups</p>
      <div className="sideBar__group-details" >
        <Group />
        <Group />
      </div>
      <div className="SideBar__verticalLine-seprator" />
      <div className="sideBar__createInput">
        <CreateButton />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
