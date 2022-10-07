import React from 'react'
import './Footer.css'
import FooterLogo from '../../Asset/TOMSPURSE_LOGO.png'
import {Link} from 'react'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer1">
      <div className="footerBlocks">
       <img src={FooterLogo} alt="" />
      </div>
      <div className="footerBlocks">
       <Link to='./' className='withWhite'>Company</Link>
       <Link to='./' className='withBlue'>Home</Link>
       <Link to='./' className='withBlue'>About us</Link>
       <Link to='./' className='withBlue'>Investment Plan</Link>
       <Link to='./' className='withBlue'>Mail Us</Link>
      </div>
      <div className="footerBlocks">
      <Link to='./' className='withWhite'>Product.</Link>
       <Link to='./' className='withBlue'>Savings Plan</Link>
       <Link to='./' className='withBlue'>Value Plan</Link>
      </div>
      <div className="footerBlocks">
      <Link to='./' className='withWhite'>Quick links.</Link>
       <Link to='./' className='withBlue'>Create an account</Link>
       <Link to='./' className='withBlue'>Log in</Link>
       <Link to='./' className='withBlue'>Instructions</Link>
      </div>
      <div className="footerBlocks">
      <Link to='./' className='withWhite'>Connect</Link>
      <div className="socialImages">
       <div><a href="./"><img src={} alt="" /></a></div>
       <div><a href="./"><img src={} alt="" /></a></div>
       <div><a href="./"><img src={} alt="" /></a></div>
      </div>
       <p className='withBlue'> Support@tompurse.com</p>
       <p className='withBlue'>+2345678907</p>
       <p className='withBlue'>Suite C201, Plot 1245 Adetokunbo Ademola Crescent,Wuse 2, Abuja, FCT</p>
      </div>
     </div>
    </div>
  )
}

export default Footer