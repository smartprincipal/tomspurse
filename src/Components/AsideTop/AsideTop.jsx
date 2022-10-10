import React from 'react'
import './AsideTop.css'
import TopIcon from '../../Asset/AsideTopIcon.svg'
import Avatar from '../../Asset/AsideAvatar.png'

const AsideTop = () => {
  return (
    <div className="top">
        <div className="topIcon">
         <img src={TopIcon} alt="" />
        </div>
        <div className="block">
          <div>
            <img src={Avatar} alt="" />
          </div>
          <div>
            <p>Johnson Oluwayemi</p>
          </div>
        </div>
    </div>
  )
}

export default AsideTop