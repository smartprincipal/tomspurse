import React from 'react'
import './Continue3.css'
import { Link } from 'react-router-dom'

const Continue3 = () => {
  return (
    <div >
      <Link to='/Dashboard'><button className='ContinueButton'>Continue</button></Link>
    </div>
  )
}

export default Continue3