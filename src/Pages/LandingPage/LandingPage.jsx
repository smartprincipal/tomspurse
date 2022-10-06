import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './LandingPage.css';
import Button from '../../Components/Buttons/Button';
import Tompurse from '../../Asset/TomPurse.png'

const LandingPage = () => {
  return (
    <div>
     <NavBar/>
     <section className="section1">
      <div className='section1Content'>
       <h3>Save Invest & Earn Anywhere !</h3>
       <p>Ipsum massa at cursus lacus erat lacus magna volutpat habitasse. Eu mauris et .</p>
       <Button color='blue'/>
      </div>
      <div className="section1Img">
        <img src={Tompurse} alt="tompurse" />
      </div>
     </section>

     <section className="section2">
      <div className="section2side1">
        <h2>Your guide to financial wellness</h2>
        <p>We’ll help you invest, save and spend responsibly for just $1, $2 or $3 per month. No surprise fees, just surprise upgrades</p>
        <a className='learn' href="./">Learn More</a>
      </div>
     </section>

    </div>
  )
}

export default LandingPage