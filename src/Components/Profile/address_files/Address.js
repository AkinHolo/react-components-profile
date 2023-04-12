import React from 'react'
import './AddressStyle.css'

const Address = () => {
        let location = 'Herber Macaulay Way, Alagomeji-Yaba, Lagos';
        

    
  return (
    <div className='address'>
        <i className="bi bi-geo-alt"></i>
        <p>{location}</p>   
    </div>
  )
}

export default Address