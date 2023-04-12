import React from 'react'
import './NameStyle.css'

const FullName = () => {
    let firstName = 'Akin';
    let lastName = 'Holo'
  return (
    <div className='name'>
      <div className='name-icon'>
        <i className="bi bi-person"></i>
      </div>
      <h3> {firstName} {lastName}</h3>
    </div>
  )
}

export default FullName