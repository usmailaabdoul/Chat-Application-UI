import React from 'react'
import { connect } from 'react-redux'
import { Bell, ChevronRight } from 'react-bootstrap-icons';

import { Attachment } from '../../components';
import "./UserProfile.css";

export const UserProfile = ({user}) => {

  return (
    <div className="UserProfile__container">
      <div className="profile__header">
        <div className="profile__notification">
          <Bell size={22} color="#110F0F" />
          <div className="profile__notification-indicator" />
        </div>
        <div className="profile__details">
          <img className="profile__image" src="https://static.toiimg.com/thumb/msid-80622193,width-640,resizemode-4,imgsize-59818/80622193.jpg" alt="profile" />
          <p className="profile__name">{user.name}</p>
          <ChevronRight className="profile__name-chevron" />
        </div>
      </div>

      <div className="chatProfile__container">
        <img className="chatProfile__image" src="https://static.toiimg.com/thumb/msid-80622193,width-640,resizemode-4,imgsize-59818/80622193.jpg" alt="chatProfile" />
        <p className="chatProfile__name">{user.name}</p>
        <p className="chatProfile__nickname">{user.email}</p>
      </div>
      <div className="chatProfile__verticalLine-seprator" />
 
      <p className="chatProfile__multimedia-heading">Photos & Multimedia</p>

      <div className="chatProfile__multimedia">
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" alt="multimedia1" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/51/8f/eb/518feb311dfc20fb22da411ef3e2a60a.jpg" alt="multimedia2" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/ea/45/8f/ea458f70bfef209799e2b936f1b4b28d.jpg" alt="multimedia3" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/ea/45/8f/ea458f70bfef209799e2b936f1b4b28d.jpg" alt="multimedia3" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" alt="multimedia1" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/51/8f/eb/518feb311dfc20fb22da411ef3e2a60a.jpg" alt="multimedia2" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/ea/45/8f/ea458f70bfef209799e2b936f1b4b28d.jpg" alt="multimedia3" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/ea/45/8f/ea458f70bfef209799e2b936f1b4b28d.jpg" alt="multimedia3" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/ea/45/8f/ea458f70bfef209799e2b936f1b4b28d.jpg" alt="multimedia3" />
        <img className="chatProfile__multimedia-image" src="https://i.pinimg.com/originals/ea/45/8f/ea458f70bfef209799e2b936f1b4b28d.jpg" alt="multimedia3" />
      </div>
      <p className="chatProfile__multimedia-viewAll">View All</p>
      <div className="chatProfile__verticalLine-seprator" />
 
      <p className="chatProfile__multimedia-heading">Attachments</p>
      <div className="chatProfile__attachments">
        <Attachment type="pdf" />
        <Attachment type="pdf" />
        <Attachment type="pdf" />
      </div>
    </div>
  )
}

const mapStateToProps = ({auth}) => ({
  user: auth.user,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
