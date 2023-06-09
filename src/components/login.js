import React, { useEffect, useState } from 'react';
import { addNewUser, userLogin } from './Fetch'

async function loginUser(credentials) {
  console.log(credentials)
  return fetch('https://fitnesstrac-kr.herokuapp.com/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);

      if (result.message === "User does not exist") {
        window.alert("Username does not exist")
      }

      if (result.message === "Password is incorrect") {
        window.alert("Password incorrect")
      }

      return result
    })
    .catch(console.error);
}

export const Login = ({ setToken, token, user, setUser }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async event => {
        event.preventDefault();
        const userObj = await loginUser({
          username,
          password
        });
        console.log("this is the login", userObj.token, userObj.user.username)
        setToken(userObj.token);
        setUser(userObj.user.username)
        
    }
    return(
        <form onSubmit={handleSubmit} class="login">
          <label class="box">
            <p>Username</p>
            <input type="text" onChange={event => setUserName(event.target.value)} placeholder="Username..."/>
          </label>
          <label class="box">
            <p>Password</p>
            <input type="password" onChange={event => setPassword(event.target.value)} placeholder="Password..."/>
          </label>
          <div class="box">
            <button type="submit">Login</button>
          </div>
        </form>
    )
}



export default Login;