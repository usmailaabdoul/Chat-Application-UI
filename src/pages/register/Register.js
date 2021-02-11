import React, { useState }from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {login} from '../../redux/actions/auth';

import "./Register.css"

export const Register = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const register = () => {

    const body = {email, password, name};
    const url = 'http://localhost:5000/api/v1/auth/register';

    fetch(url, {
      method: 'POST',
      headers: {
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

        console.log({res});
        
        props.login(responseJson.user)

        sessionStorage.setItem('Token', responseJson.token);
        sessionStorage.setItem('User', JSON.stringify(responseJson.user));

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
      <div className="loginInnerContainer shadow">
        <h1 className="heading">Register</h1>
        <div>
          <input placeholder="Name" className="loginInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Email" className="loginInput mt-20" type="text" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="loginInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>
          <input placeholder="Confirm Password" className="loginInput mt-20" type="password" onChange={(event) => setConfirmPassword(event.target.value)} />
        </div>

        <Link onClick={e => (!name || !email || !password || !confirmPassword) ? e.preventDefault() : register()} to={'/login'}>
          <button className={'button mt-20'} type="submit">Login</button>
        </Link>

        <Link to={'/login'}>
          <button className={'text-button mt-20'} type="submit">Have an account? Login</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {login})(Register)
