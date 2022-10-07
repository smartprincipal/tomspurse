import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './LandingPage.css';
import Button from '../../Components/Buttons/Button';
import Tompurse from '../../Asset/TomPurse.png'
import Invest from '../../Asset/Invest.svg'
import Later from '../../Asset/Later.svg'
import Global from '../../Asset/globalicon.svg' 
import LockImage from '../../Asset/LockImage.png' 
import Financial from '../../Asset/FinancialIcon.png'
import Easy from '../../Asset/EasyToUseIcon.png'
import Swift from '../../Asset/SwiftIcon.png'
import Card from '../../Components/Card/card';
import Card2 from '../../Components/Card/Card2';

const LandingPage = () => {

  const cardContent=[
    {id:0, head:`Financial Stablity`, img: Financial, content:`Our Payment gateway is secured with military grade encryption `},
    {id:0, head:`Swift Payment`, img: Swift, content:`Our Payment gateway is secured with military grade encryption `},
    {id:0, head:`Easy to Use`, img: Easy, content:`Our Payment gateway is secured with military grade encryption `}
  ]
  const card2Content=[
    {id:0, head2:`Basic`, subHead2:`7% for 2month`, content2:`Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.`},
    {id:0, head2:`Plus`, subHead2:`22% for 6month`, content2:`Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.`}
  ]
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

     <section className='section4'>
      <div className='head'>
        <h3>Zero Commissions</h3>
        <p className='our'>Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </p>
      </div>
      <div className="cardContainer">
        {cardContent.map((item) =>(

        <Card content={item.content} img={item.img} head={item.head} key={item.id}/>
        ))}
      </div>
     </section>

     <section className="section5">
      <h3>Simple, Transparent Plans</h3>
      <div className="cardContainer2">
        {
          card2Content.map((item) =>(
            <Card2 content2={item.content2} head2={item.head2} subHead2={item.subHead2} />
          ))
        }
      </div>
     </section>

    </div>
  )
}

export default LandingPage