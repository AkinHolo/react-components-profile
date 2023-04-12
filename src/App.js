import React from 'react'
import ProfilePhoto from './Components/Profile/profilephoto_files/ProfilePhoto'
import FullName from './Components/Profile/fullname_files/FullName'
import Address from './Components/Profile/address_files/Address'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  )
}

export default App
