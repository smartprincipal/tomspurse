import React from 'react'
import './card.css'

const card = ({img, head, content , color}) => {
  return (
    <div className={color === true ? 'card2Style' : 'noCardStyle'}>

    <div className='card'>

      <img className='cardImg' src={img} alt="" />
      <h3 className='cardHead'>{head}</h3>
      <p className='cardContent'>{content}</p>

    </div>
    </div>
  )
}

export default card