import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './NavBar.css'
import TomsLogo from '../../Asset/TomspurseLogo.svg'
import Button from '../Buttons/Button'

const NavBar = () => {
//  const nav = [
//   'Home',
//   'About Us',
//   'Invest'
//  ]
 const [toggle, setToggle] = useState(false)
 
const handleToggle = () => {
  return setToggle(prevToggle =>!prevToggle)
}
const style={
    color: "white",
    height: "38px",
   width: "140px",
   borderRadius: "50px",
   backgroundColor: "#0000FF",
   boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
   border: "none",
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
        <li><Link to='./' className='menu-list'>Home</Link></li>
        <li><Link to='./' className='menu-list'>About Us</Link></li>
        <li><Link to='./' className='menu-list'>Invest</Link></li>
        {/* {nav.map((item) => {
         return <li href='./'>{item}</li>
        })} */}
       </ul>
      <form action="" className='form1'>
        <div className="login">
         <Link to="Login">Log In</Link>
        </div>
        <div className='navBarBtn'>
         <Button name={style}/>
        </div>
      </form>
      </navbar>
     </header>
    </div>
  )
}

export default NavBar