import React from 'react'
import './Package.css'

const Package = (props) => {
  return (
    <div className='package'>
     <img className='packageImg' src={props.packageImg} alt="" />
     <h3 className='packageHead'>{props.packageHead}</h3>
     <p className='packageAmount'>{props.packageAmount}</p>
     <p className='packageInterest'>{props.packageInterest}</p>
    </div>
  )
}

export default Package