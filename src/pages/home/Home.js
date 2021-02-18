import React from 'react'
import { connect } from 'react-redux'

import "./Home.css"
import { SideBar, Chat} from "../../sections";
// import Chat from '../../components/previousApp designs/chat/Chat';

export const Home = (props) => {
  return (
    <div className="homeContainer">
      <div className="homeSidebar">
        <SideBar />
      </div>
      <div className="homeChatSection">
        <Chat />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
