import React from 'react'
import './Portfolio.css'
import Ico from '../../../Asset/asideIcon.svg'

const Portfolio = (props) => {
  return (
    <div className='portContainer'>
      <img className='portfolioImg' src={Ico} alt="" />
      <h3 className='portfolioHead'>{props.portHead}</h3>
      <p className='portfolioAmount'>{props.portAmount}</p>
    </div>
  )
}

export default Portfolio