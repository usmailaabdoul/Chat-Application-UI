import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {login} from '../../redux/actions/auth';

import './Join.css'

const Join = (props) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')  

  const login = () => {
    sessionStorage.setItem('Name', name);
    sessionStorage.setItem('Room', room);

    props.login({name, room})
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : login()} to={'/home'}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, {login})(Join)