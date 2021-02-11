import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {login} from '../../redux/actions/auth';

import "./Login.css";

export const Login = (props) => {
  const {history} = props;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {

    const body = {email, password}
    const url = 'http://localhost:5000/api/v1/auth/login'
    fetch(url, {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        const statusCode = response.status;
        const responseJson = response.json();
        return Promise.all([statusCode, responseJson]);
      })
      .then((res) => {
        const statusCode = res[0];
        const responseJson = res[1];

        console.log({res})
        props.login(responseJson.user)
        
        sessionStorage.setItem('Token', responseJson.token);
        sessionStorage.setItem('User', JSON.stringify(responseJson.user));

        history.push('/home');

        if (statusCode) {
          console.log({statusCode})
        }
      })
      .catch((error) => {
        console.log({error})
      })
  }

  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <h1 className="heading">Login</h1>
        <div>
          <input placeholder="Email" className="loginInput mt-20" type="text" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="loginInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <Link onClick={e => (!email || !password) ? e.preventDefault() : login()} to={'/login'}>
          <button className={'button mt-20'} type="submit">Login</button>
        </Link>

        <Link to={'/register'}>
          <button className={'text-button mt-20'} type="submit">Don't have an account? Register</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {login})(Login)
