import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { useState , useEffect} from 'react'

const SignUp = () => {
  
    const initialValues = {email: "",firstname: "",lastName: "",password:""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors , setFormErrors]= useState({})
    const [isSubmit, setIstSubmit] = useState (false)
    const handleChange= (e)=>{
        const {name, value} =e.target
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIstSubmit(true)
        

    }
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [formErrors])
    const validate = (values)=>{
        const errors ={};
        const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        const regexName = /^[^-\s\d][a-zA-Z\s-]+$/
        if(!values.email){
            errors.email= "Email is required"
        }else if (!regex.test(values.email)){
            errors.email="Not a a valid input "
        }else{
            errors.email="Valid "
        }
        if(!values.firstname){
            errors.firstname= "First Name is required"
        }else if (!regexName.test(values.firstname)){
            errors.firstname="Field cannot be empty or filled with numbers"
        }else{
            errors.firstname="Valid"
        }
        if(!values.lastname){
            errors.lastname= "Last Name is required"
        }else if (!regexName.test(values.lastname)){
            errors.lastname="Field cannot be empty or filled with numbers"
        }else{
            errors.lastname="Valid"
        }
        if(!values.password){
            errors.password= "Password is required"
        }else if(values.password.length < 4){
            errors.password="Password must be more than 4 characters"
        }else if(values.password.length > 10){
            errors.password="Password cannot be greater than ten characters"
        }else{
            errors.password='Valid Input'
        }
        return errors
      }

  return (
    <div>
     <div className="containerSign">
      <div className="contentSign">
       <h3>Welcome,</h3>
       <h4>Register to continue.</h4>
      </div>
      <form action="" className='formSign' onSubmit={handleSubmit}>
       <h3>Register an account </h3>

       <div className='forminputSS'>
       <label 
       htmlFor="" 
       className='label1'>
        Full Name
        </label>

       <div className='names'>
        <div>
        <input 
        type="text" 
        name="firstname" 
        className='inputS' 
        placeholder='First Name' 
        value={formValues.firstname}
        onChange={handleChange}
        />
        <p>{formErrors.firstname}</p>
        </div>

        <div>
        <input 
        type="text" 
        name="lastName" 
        className='inputS' 
        placeholder='Last Name' 
        value={formValues.lastName}
        onChange={handleChange}
        />
        <p>{formErrors.lastName}</p>
        </div>

       </div>
       </div>

       <div className='formInput2'>
       <label htmlFor="" className='label2'>Email</label>
       <br />

       <input 
       type="email" 
       name="email" 
       className='input2' 
       placeholder='example@email.com'
       value={formValues.email}
        onChange={handleChange}
        />
       <p>{formErrors.email}</p>
       </div>


       <div className='formInput2'>
       <label htmlFor="" className='label2'>Password</label><br />
       <input 
       type="password" 
       name="password" 
       className='input2' 
       value={formValues.password}
        onChange={handleChange}
        />
       <p>{formErrors.password}</p>
       </div>

       <div className='formInput2'>
       <label htmlFor="" className='label2'>Confirm Password</label>
       <br />

       <input 
       type="password" 
       name="email" 
       className='input2' 
        value={formValues.password}
        onChange={handleChange}
        />
       <p>{formErrors.password}</p>
       </div>
       
       <div className='oldUser'>
         <Link to='/Login'>Old user? Log In</Link>
       </div>
       <div className='logS'>
       <Link to="/BVN1">
      <input type="submit" value="Register"  className='btn'/>
      </Link>
       </div>

      </form>
     </div>
    </div>
  )
}

export default SignUp