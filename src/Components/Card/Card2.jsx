import React from 'react'
import './Card2.css'
import Button from '../Buttons/Button'
import { Link } from 'react-router-dom'
// import Accordion from '../Accordion/Accordion'

const Card2 = (props) => {
  return (
    <div className='card2'>
     <h2 className='cardhead2'>{props.head2}</h2>
     <h4 className='cardSubHead2'>{props.subHead2}</h4>
     <p className='cardContent2'>{props.content2}</p>
     <div className="card2btn">
      <Link to='/SignUp'>
     <Button name={{width:'312px', background:'#0000FF',color:'#fff', fontSize:'14px', borderRadius:'50px'}}/>
      </Link>
     </div>
     <div className="include">
      {/* <Accordion/> */}
      {/* <p className='what'>What’s Inculded</p> */}
     </div>

    </div>
  )
}

export default Card2


