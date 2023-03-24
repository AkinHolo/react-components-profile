import React from 'react'
import Mypix from '../../Assets/mypix.png';
import './PhotoStyle.css'

const ProfilePhoto = () => {
  return (
    <div className='photo'>
        <img src={Mypix} alt='mypix'/>
    </div>
  )
}

export default ProfilePhoto