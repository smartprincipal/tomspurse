import React from 'react'
import './BVN1.css'
import BankIcon from '../../../Asset/bankIcon.png'
import Dashboard from '../../Dashboard/Dashboard'
import Continue from '../../../Components/Buttons/Continue/Continue'
import { Link } from 'react-router-dom'

const BVN1 = () => {
  return (
   <div className='bvn1'>
   <div className="dashB">
   <Dashboard/>
   </div>
   <div className="bvnInfo">
    <div className="infoImg">
    <img classname='bvnInfoImg' src={BankIcon} alt="" />
    </div>
     <h4>We need more information</h4>
     <p>We need to add your bvn to secure your account</p>
     
     <div className="skip">
      <Link to='/BVN2'>
         <Continue/>
      </Link>
       </div>

   </div>
 </div>
  )
}

export default BVN1