import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './LandingPage.css';
import Button from '../../Components/Buttons/Button';
import Tompurse from '../../Asset/TomPurse.png'
import Invest from '../../Asset/Invest.svg'
import Later from '../../Asset/Later.svg'
import Global from '../../Asset/globalicon.svg' 
import LockImage from '../../Asset/LockImage.png' 
// import Padlock from '../../Asset/Padlock.png'

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
      <div className="section2side2">
        <div className="sec2">

        <div className="section2side2inline">
          <img src={Invest} alt="" />
          <h4>Invest your spare change</h4>
        </div>
        <p className='sec2side2p'>Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
        </div>

        <div className="sec2">

        <div className="section2side2inline">
          <img src={Later} alt="" />
          <h4>Save for later</h4>
        </div>
        <p className='sec2side2p'>Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
        </div>

        <div className="sec2exempt">

        <div className="section2side2inline">
          <img src={Global} alt="" />
          <h4>Grow your knowledge</h4>
        </div>
        <p className='sec2side2p'>Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
        </div>
      </div>
     </section>

     <section className="section3">
      <div className="section3image">
        <img src={LockImage} alt="" />
        </div>
      <div className="section3Side2">
        <h4>Security that's strong as oak</h4>
        <p>All your data is protected by bank-level security and 256-bit encryption.</p>
        <a href="./">Learn more</a>
        <p>Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </p>
      </div>
     </section>

    </div>
  )
}

export default LandingPage