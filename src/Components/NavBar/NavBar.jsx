import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import TomsLogo from '../../Asset/TomspurseLogo.svg'
import Button from '../Buttons/Button'

const NavBar = () => {
 const nav = [
  'Home',
  'About Us',
  'Invest'
 ]
  return (
    <div>
     <header>
      <div className="logo">
       <a href="./">
       <img src={TomsLogo} alt="Toms Logo" />
       </a>
      </div>
      <navbar className="NavBar">
       <ul className="menu">
        {nav.map((item) => {
         return <li href='./'>{item}</li>
        })}
       </ul>
      <form action="" className='form1'>
        <div className="login">
         <Link to="Login">Log In</Link>
        </div>
        <div>
         <Button/>
        </div>
      </form>
      </navbar>
     </header>
    </div>
  )
}

export default NavBar