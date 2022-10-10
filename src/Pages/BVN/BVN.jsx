import React from 'react'
import './BVN.css'
import Dashboard from '../Dashboard/Dashboard'

const BVN = () => {
  return (
    <div className='bvn'>
      <div className="dashB">
      <Dashboard/>
      </div>
      <div className="bvnVerification">
        <h4></h4>
      </div>
    </div>
  )
}

export default BVN