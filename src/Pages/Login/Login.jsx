import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import './Login.css'
import Logo from '../../Asset/TomspurseLogo.svg'
import { Link } from 'react-router-dom'
import Log from '../../Components/LogBtn/Log'



const Login = () => {
  // const [state, setState] = useState({
  //   email: "",
  //   password: ""
  // });

  // const handleInputChange =(e) =>{
  //   const {name, value} = e.target;
  //   setState((prevProps) => ({
  //     ...prevProps, [name] : value
  //   }))
  // };

  // const handleSubmit =(e) =>{
  //   e.preventDefault()
  // }
  // const {user} = props;
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm(
  //   {
  //   defaultValues:{
  //     email:user.email,
  //     password:user.password
  //   }
  // }
  );

  const onSubmit =(data) => {
    console.log(data)
  }

  // const {reset} = useForm();

  // reset({
  //   email:"westsideyjay@gmail.com",
  //   password: '1234567'
  // })

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
      <form action="" className='form0' onSubmit={handleSubmit(onSubmit)}>

       <h3>Login to your account </h3>
       
       <div className='forminput0'>
       <label htmlFor="" className='label'>Email</label><br />
       
       <input 
       type="email" 
       name="email" 
       id="" 
       className='input00'
      //  value={state.email}
      //  onChange={handleInputChange}
      {...register("email", {
        required:'Email is required.',
        pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          message:'Email is not valid.'
        }
      })}/>
      {errors.email && 
            <p className="errorMsg">{errors.email.message}</p>
          }
       </div>

       <div className='forminput0'>
       <label htmlFor="" className='label'>Password</label><br />

       <input 
       type="password" 
       name="password" 
       id="" 
       className='input00'
      //  value={state.password}
      //  onChange={handleInputChange}
      {...register("password" , {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password should be atleat 6 characters.'
        }
      })}
      />
      {errors.password &&
            <p className="errorMsg">{errors.password.message}</p>
        }
       </div>

       <div className="link">
        <div>
         <Link to='/forgetPassword'>Forgot password?</Link>
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