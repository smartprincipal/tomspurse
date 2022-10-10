import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
     <div className="container">
      <div className="content">
       <h3>Welcome,</h3>
       <p>Register to continue.</p>
      </div>
      <form action="" className='form'>
       <h3>Register an account </h3>
       <div className='forminput'>
       <label htmlFor="" className='label1'>Full Name</label>
       <div className='names'>
        <div>
        <input type="text" name="firstname" id="" className='input' placeholder='First Name' required/>
        </div>
        <div>
        <input type="text" name="lastName" id="" className='input' placeholder='Last Name' required/>
        </div>
       </div>
       </div>

       <div className='formInput2'>
       <label htmlFor="" className='label2'>Email</label><br />
       <input type="email" name="email" id="" className='input2' placeholder='example@email.com' required/>
       </div>
       <div className='formInput2'>
       <label htmlFor="" className='label2'>Password</label><br />
       <input type="password" name="email" id="" className='input2' required/>
       </div>
       <div className='formInput2'>
       <label htmlFor="" className='label2'>Confirm Password</label><br />
       <input type="password" name="email" id="" className='input2' required/>
       </div>
       
       <div className='oldUser'>
         <Link to='Login'>Old user? Log In</Link>
       </div>
       <div className='log'>
       <Link to="/BVN">
      <input type="submit" value="Register"  className='btn'/>
      </Link>
       </div>

      </form>
     </div>
    </div>
  )
}

export default SignUp