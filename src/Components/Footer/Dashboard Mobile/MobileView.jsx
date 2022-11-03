import React from 'react'
import './MobileView.css'
import HomeIcon from '../../../Asset/homeicon.png'
import InvestmentIcon from '../../../Asset/InvestmentIcon.png'
import HistoryIcon from '../../../Asset/historyIcon.png'
import ReferralIcon from '../../../Asset/referralIcon.png'
import SettingsIcon from '../../../Asset/settingsIcon.png'
import { Link } from 'react-router-dom'

const MobileView = () => {
  return (
   <div className="mobileViewFooter">
      <div classname='below'>
       <Link to='/'>
        <img src={HomeIcon} alt="" />
        <p>Home</p>
       </Link>
      </div>
      <div classname='below'>
      <Link to='./'>
        <img src={InvestmentIcon} alt="" />
        <p>Invest</p>
        </Link>
      </div>
      <div classname='below'>
      <Link to='./'>
        <img src={HistoryIcon} alt="" />
        <p>History</p>
        </Link>
      </div>
      <div classname='below'>
      <Link to='./'>
        <img src={ReferralIcon} alt="" />
        <p>Referral</p>
        </Link>
      </div>
      <div classname='below'>
      <Link to='./'>
        <img src={SettingsIcon} alt="" />
        <p>Settings</p>
        </Link>
      </div>
     </div>
  )
}

export default MobileView