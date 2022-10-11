import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './NavBar.css'
import TomsLogo from '../../Asset/TomspurseLogo.svg'
import Button from '../Buttons/Button'

const NavBar = () => {
 const nav = [
  'Home',
  'About Us',
  'Invest'
 ]
 const [toggle, setToggle] = useState(false)
 
const handleToggle = () => {
  return setToggle(prevToggle =>!prevToggle)
}

  return (
    <div>
     <header>
      <div className="logo">
       <a href="./">
       <img src={TomsLogo} alt="Toms Logo" />
       </a>
      </div>
      <div className="hamburger" id="hamburger" onClick={handleToggle}>
        {toggle ? <span>&times;</span> : <span>&#9776;</span>}
        </div>
      <navbar className="NavBar">
       <ul className={toggle ? 'menu-drop': 'menu'}>
        {nav.map((item) => {
         return <li href='./'>{item}</li>
        })}
       </ul>
      <form action="" className='form1'>
        <div className="login">
         <Link to="Login">Log In</Link>
        </div>
        <div className='navBarBtn'>
         <Button/>
        </div>
      </form>
      </navbar>
     </header>
    </div>
  )
}

export default NavBar