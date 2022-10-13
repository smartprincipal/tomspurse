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
import DesignImage from '../../Asset/DesignImage.png'
import Google from '../../Asset/googleplay.png'
import Apple from '../../Asset/appstore.png'
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const style ={
    color: "#0000FF",
    height: "38px",
   width: "140px",
   borderRadius: "50px",
   backgroundColor: "white",
   boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
   border: "none",
  }

  const [cardContent]= useState([
    {id:0, head:`Financial Stablity`, img: Financial, content:`Our Payment gateway is secured with military grade encryption `, color:true},
    {id:0, head:`Swift Payment`, img: Swift, content:`Our Payment gateway is secured with military grade encryption `, color:false},
    {id:0, head:`Easy to Use`, img: Easy, content:`Our Payment gateway is secured with military grade encryption `, color:false}
  ])
  const card2Content=[
    {id:0, head2:`Basic`, subHead2:`7% for 2month`, content2:`Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.`},
    {id:0, head2:`Plus`, subHead2:`22% for 6month`, content2:`Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.`}
  ]
  return (
    <div>
     <NavBar/>
      {/* SECTION 1 */}
     <section className="section1">
      <div className='section1Content'>
       <h3>Save Invest & Earn Anywhere !</h3>
       <p>Ipsum massa at cursus lacus erat lacus magna volutpat habitasse. Eu mauris et .</p>
       {/* SECTION1 BUTTON */}
       <div className="btys">
       <Link to='/SignUp'>
       <Button name={style}/>
       </Link>
       </div>
      </div>

      {/* SECTION1 IMAGE */}
      <div className="section1Img">
        <img className='tomsImage' src={Tompurse} alt="tompurse" />
      </div>
     </section>

      {/* SECTION 2 */}
     <section className="section2">
      <div className="section2side1">
        <h2>Your guide to financial wellness</h2>
        <p>We’ll help you invest, save and spend responsibly for just $1, $2 or $3 per month. No surprise fees, just surprise upgrades</p>
        <div className="learnMore">
        <a className='learn' href="./">Learn More</a>
        </div>
      </div>

      {/* SECTION 2 SIDE 2 */}
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
{/* SECTION 3 */}
     <section className="section3">

      {/* SECTION 3 IMAGE IN SIDE 1 */}
      <div className="section3image">
        <img className='padlock' src={LockImage} alt="" />
        </div>

        {/* SECTION 3 SIDE 2 */}
      <div className="section3Side2">
        <h4>Security that's strong as oak</h4>
        <p>All your data is protected by bank-level security and 256-bit encryption.</p>
        <div className="le">
        <a href="./">Learn more</a>
        </div>
        <p className='company'>Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </p>
      </div>
     </section>

{/* SECTION 4 */}
     <section className='section4'>
      <div className='head'>
        <h3>Zero Commissions</h3>
        <p className='our'>Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </p>
      </div>

      {/* SECTION 4 cARD */}
      <div className="cardContainer">
        {cardContent.map((item) =>(

        <Card content={item.content} img={item.img} head={item.head} key={item.id} color={item.color}/>
        ))}
      </div>
     </section>

{/* SECTION 5 */}
     <section className="section5">
      <h3>Simple, Transparent Plans</h3>

      {/* SECTION 5 CARD */}
      <div className="cardContainer2">
        {
          card2Content.map((item) =>(
            <Card2 content2={item.content2} head2={item.head2} subHead2={item.subHead2} />
          ))
        }
      </div>

     </section>
    
    {/* SECTION 6 */}
    <section className="section6">
      <div className="section6sub1">
        <div className="designImage">
        <img className='Designimage1' src={DesignImage} alt="" />
        <img className='Designimage2' src={DesignImage} alt="" />
        </div>
        <div className="section6sub1Content">
          <h3 className='sub1h3'> Invest.Earn</h3>
          <p>Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </p>
          <div className="storeImage">
            <div className='aLink'>
              <a href="./">
            <img src={Google} alt="" />
              </a>
            </div>
            <div className='aLink'>
              <a href="./">
              <img src={Apple} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="carousel">

      </div> */}
    </section>
{/* SECTION 7 */}
    <section className="section7">
      <h3>Total control, total freedom.
Be invested. </h3>
{/* SECTION 7 BUTTON */}
<div className="bottombtn">
<Link to='/SignUp'>
<Button name={{backgroundColor:"#DDFA00", borderRadius: '50px', width:'213px', height:'58px', fontSize:'22px', color:'#022B69', fontWeight:'600px'}}/>
</Link>
</div>
    </section>

    {/* FOOTER COMPONENTS SECTION */}
    <Footer/>
    </div>
  )
}

export default LandingPage