import React from 'react'
import upArrow from '../assets/images/up.png'
import downArrow from '../assets/images/down.png'


const GreenBtn = ({text,type}) => {
  const icon = type==='up-arrow'?downArrow: type==='down-arrow' ? upArrow:undefined;
  return (
    <div className='green-btn'>
       {text&&<> {icon && <img src={icon} alt='icon'/> }<p>{text}</p></>}   
        </div>
  )
}

export default GreenBtn