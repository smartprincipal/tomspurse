import React from 'react'
import './Card2.css'
import Button from '../Buttons/Button'
// import Accordion from '../Accordion/Accordion'


const Card2 = (props) => {
  return (
    <div className='card2'>
     <h2 className='cardhead2'>{props.head2}</h2>
     <h4 className='cardSubHead2'>{props.subHead2}</h4>
     <p className='cardContent2'>{props.content2}</p>
     <Button/>
     <div className="include">
      {/* <Accordion/> */}
      {/* <p className='what'>What’s Inculded</p> */}
     </div>

    </div>
  )
}

export default Card2