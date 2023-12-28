import React from 'react'
import '../assets/styles/common.scss'

const TextPriceBtn = ({header,price,btn}) => {
  return (
    <div className=' text-price-btn'>
       {header&&<p className='grey-text'>{header}</p>} 
       {price&& <> <p className='black-text'>{price} {btn&&<span className='grey-btn'>{btn}</span>} </p> </>}
    </div>
  )
}

export default TextPriceBtn