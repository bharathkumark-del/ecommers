import React from 'react'
import "./css/Loginsignup.css"

const LoginSignUp = () => {
  return (
    <div className='LoginSignUp'>
      <div className="LoginSignUpcontainer">
        <h1>Sing Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id="" />
          <p>By  clicking ,you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp