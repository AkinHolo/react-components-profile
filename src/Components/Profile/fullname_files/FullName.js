import React from 'react'
import './NameStyle.css'

const FullName = () => {
    let firstName = 'Akin';
    let lastName = 'Holo'
  return (
    <div className='name'>
        <h1> 
            {firstName} {lastName}
        </h1>
    </div>
  )
}

export default FullName