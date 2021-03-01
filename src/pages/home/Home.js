import React, { useState } from 'react'
import { connect } from 'react-redux'

import "./Home.css"
import { SideBar, Chat } from "../../sections";
import { SearchBar, ThemeToggle, ChatInput } from "../../components";
import { UserProfile } from '../../sections';
// import Chat from '../../components/previousApp designs/chat/Chat';

export const Home = ({ inbox }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="homeContainer">
      <div className="homeSidebar">
        <SideBar />
      </div>
      <div className="homeChatSection">
        <div className="mainChat">
          <div className="chat">
            <div>
              <div className="chat__header">
                <div className="searchBar__container" style={{ flex: 1 }}>
                  <SearchBar placeholder="Search for a message..." value={search} onChange={setSearch} />
                </div>
                <div>
                  <ThemeToggle />
                </div>
              </div>

              <div className="chatMessages-heading">
                {inbox.recieverId && (
                  <>
                    <p className="m-0 chatMessages__heading-title">Chats with</p>
                    <h4 className="chatMessages__header-name">{inbox.reciever.name}</h4>
                  </>
                )}
              </div>
            </div>
            {!inbox.recieverId ? (
              <div className="d-flex align-items-center justify-content-center h-100">
                <h4>no chats selected</h4>
              </div>
            ) : (
                <div style={{ display: 'flex' }}>
                  <Chat />
                </div>
              )}
          </div>
          <div className="verticalLine__seprator" />
          <div className="chatDetails">
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ auth, chat }) => ({
  user: auth.user,
  inbox: chat.activeChat,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
