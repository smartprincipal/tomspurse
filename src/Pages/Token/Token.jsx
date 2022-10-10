import React from 'react'
import './Token.css'
import Dashboard from '../Dashboard/Dashboard'
import Continue3 from '../../Components/Buttons/Continue3/Continue3'

const Token = () => {
  return (
    <div className='token'>
     <div className="tokenDashboard">
     <Dashboard/>
     </div>
     <div className="tokenPopUp">
     <div className="tokenVerification">
        <h4>Enter your Token</h4>
        <p>Please enter the verification code sent to your Email</p>
        <form action="" className='tokenForm'>
          <input type="text" name="token" id="" className='tokenNumber' required/>
        <div className="skip">
            <Continue3/>
        </div>
        </form>
      </div>
     </div>
    </div>
  )
}

export default Token