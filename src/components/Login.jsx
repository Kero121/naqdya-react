import React from 'react'
import './styles/login.css'
import { Link } from 'react-router-dom'


export default function Login() {
  return (

    
    
      <div className='login'>
      
        <div class="login-box shadow-lg">
          <h2 class="heading-login-box">Login</h2>
          <form>
            <div class="user-box">
              <input class="user-box-input " type="text" required />
              <label class="user-box-label">Username</label>
            </div>
            <div class="user-box">
              <input class="user-box-input " type="password" required />
              <label class="user-box-label">Password</label>
            </div>
            <Link to="employees" type="submit" class="login-box-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </Link>
          </form>
        </div>

      </div>

    

  )
}
