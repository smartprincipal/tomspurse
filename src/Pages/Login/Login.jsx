import React from 'react'
import './Login.css'
import Logo from '../../Asset/TomspurseLogo.svg'
import { Link } from 'react-router-dom'
import Log from '../../Components/LogBtn/Log'
const Login = () => {
  return (
    <div className='Login'>
     <div className="containerLog">
      <div className="contentLog">
       <div className="loginLogo">
        <img src={Logo} alt="" />
       </div>
       <h3>Welcome Back,</h3>
       <p>Log in to continue.</p>
      </div>
      <form action="" className='form0'>
       <h3>Login to your account </h3>
       <div className='forminput0'>
       <label htmlFor="" className='label'>Email</label><br />
       <input type="email" name="email" id="" className='input00'/>
       </div>

       <div className='forminput0'>
       <label htmlFor="" className='label'>Password</label><br />
       <input type="password" name="password" id="" className='input00'/>
       </div>
       <div className="link">
        <div>
         <Link to='forgetPassword'>Forgot password?</Link>
        </div>
        <div>
         <Link to='/SignUp'>New user? Register</Link>
        </div>
       </div>
       <div className='logi'>
        <Log/>
       </div>

      </form>
     </div>

    </div>
  )
}

export default Login