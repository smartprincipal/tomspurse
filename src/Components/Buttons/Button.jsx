import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
    <a href='./'><button style={props.name}>Get Started</button></a>
    </div>
  )
}

export default Button