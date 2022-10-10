import React from 'react'
import './Continue2.css'
import { Link } from 'react-router-dom'

const Continue2 = () => {
  return (
    <div>
     <Link to='/Token'><button className='ContinueButton'>Continue</button></Link>
    </div>
  )
}

export default Continue2