import React from 'react'
import './AddressStyle.css'

const Address = () => {
        let location = '230, Herber Macaulay Way, Alagomeji-Yaba, Lagos';
        let email = 'holoakinseloyin@gmail.com';

    
  return (
    <div className='address'>
        <div className='h-control'>
            <div className='control'>
            <h3> Location:</h3><p>{location}</p>
        </div>
        <div className='control'>
            <h3> Email:</h3> <p>{email}</p>
        </div>
           
        </div>
    </div>
  )
}

export default Address