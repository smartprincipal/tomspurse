import React from 'react'
import './Dashboard.css'
import Logo from '../../Asset/TomspurseLogo.svg'
import Homepage from '../../Asset/homePageIcon.svg'
import Information from '../../Asset/InformationIcon.svg'
import Savings from '../../Asset/SavingIcon.svg'
import Profile from '../../Asset/Profile.svg'
import Ref from '../../Asset/Ref.svg'
import Settings from '../../Asset/Settings.svg'
import TopIcon from '../../Asset/AsideTopIcon.svg'
import Avatar from '../../Asset/AsideAvatar.png'
import Ico from '../../Asset/asideIcon.svg'
import Fundwallet from '../../Components/Buttons/Fundwallet'
import Portfolio from '../../Components/Card/Portfolio/Portfolio'
import Starter from '../../Asset/starterPlanIcon.svg'
import Value from '../../Asset/valuePlanIcon.svg'
import Package from '../../Components/Card/Package/Package'

const Dashboard = () => {
 const portfolio=[
  {id:0, portHead:`TOTAL BALANCE`, portAmount:`₦5,000`},
  {id:1, portHead:`TOTAL DEPOSIT`, portAmount:`₦5,000`},
  {id:2, portHead:`TOTAL WITHDRAWALS`, portAmount:`₦5,000`}
 ]
 const packaged=[
  {id:0, packageImg: Starter, packageHead:`Starter Plan`, packageAmount:`₦5,000`, packageInterest:`7%  for 2month`},
  {id:1, packageImg: Value, packageHead:`Value Plan`, packageAmount:`₦5,000`, packageInterest:`25%  for 6Month`}
 ]
  return (
    <div className='dashboardContainer'>
     <div className="asidecontainer">

      <div className="asideLogo">
      <img className='asideLogoo' src={Logo} alt="" />
     </div>

     <div className="imageRoute">
      <div className="icons">
       <img src={Homepage} alt="" />
      </div>
      <div className="icons">
       <img src={Information} alt="" />
      </div>
      <div className="icons">
       <img src={Savings} alt="" />
      </div>
      <div className="icons">
       <img src={Profile} alt="" />
      </div>
      <div className="icons">
       <img src={Ref} alt="" />
      </div>
      <div className="icons">
       <img src={Settings} alt="" />
      </div>
     </div>
     </div>
     <div className="dashboardBlock">
      <div className="dashboardHeader">
     <div className="topIcon">
         <img src={TopIcon} alt="" />
        </div>
        <div className="block">
          <div>
            <img src={Avatar} alt="" />
          </div>
          <div>
            <p>Johnson Oluwayemi</p>
          </div>
        </div>
      </div>
        <div className="dashboard">
         <div className="dashboardContent1">
          <div className="fundBlock">
           <div className="fund">
            <div>
             <img src={Ico} alt="" />
            </div>
            <div>
             <Fundwallet/>
            </div>
           </div>
            <h4>Available Balance</h4>
            <p>₦5,000</p>

          </div>
          <div className="portfolioBlock">
           <div className="portfolioFund">
            <div>
            <h3>Portfolio</h3>
            </div>
            <div>
             <Fundwallet/>
            </div>
           </div>
           <div className="portfolioCard">
            {
            portfolio.map((pick) =>(
             <Portfolio portHead={pick.portHead} portAmount={pick.portAmount}/>
            ))
            }
           </div>

          </div>
         </div>
         <div className="dashboardContent2">
          <div className="transactionBlock">
           <table className='transs'>
           <th>Transaction</th>
           <tr className='trans'>
            <td className='transHead'>Withdrawal</td>
           <td className='colorRed'>5500</td>
           </tr >
           <tr className='trans'>
            <td className='transHead'>Deposit</td>
           <td className='colorGreen'>5500</td>
           </tr>
           <tr className='trans'>
            <td className='transHead'>Interest</td>
           <td className='colorRed'>5500</td>
           </tr>
           </table>
          </div>
          <div className="packageBlock">
            <h3>Package</h3>
            <div className="packageContainer">{

             packaged.map((choice) => (
              <Package packageImg={choice.packageImg} packageHead={choice.packageHead} packageAmount={choice.packageAmount} packageInterest={choice.packageInterest}/>
             ))
            }
            </div>

          </div>
         </div>
        </div>
     </div>
    </div>
  )
}

export default Dashboard