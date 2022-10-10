import React from 'react'
import './Continue.css'
import { Link } from 'react-router-dom'

const Continue = () => {
  return (
    <div >
      <Link to='/Token'><button className='ContinueButton'>Continue</button></Link>
    </div>
  )
}

export default Continue