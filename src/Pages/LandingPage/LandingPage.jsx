import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './LandingPage.css';
import Button from '../../Components/Buttons/Button';

const LandingPage = () => {
  return (
    <div>
     <NavBar/>
     <section className="section1">
      <div className='section1Content'>
       <h3>Save Invest & Earn Anywhere !</h3>
       <p>Ipsum massa at cursus lacus erat lacus magna volutpat habitasse. Eu mauris et .</p>
       <Button/>
      </div>
     </section>

    </div>
  )
}

export default LandingPage