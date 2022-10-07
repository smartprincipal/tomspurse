import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <div className='card'>

      <img className='cardImg' src={props.img} alt="" />
      <h3 className='cardHead'>{props.head}</h3>
      <p className='cardContent'>{props.content}</p>

    </div>
  )
}

export default card