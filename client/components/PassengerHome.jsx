import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../src/navbar.css'

export default function PassengerHome() {
  const navigate = useNavigate()
  function logout() {
    navigate('/')
  }
  return (
    <>
      <div className='navbar'>
        <div className='navBarContainer'>
          <div className='navBarLogo'>
            <button>
              <h3 className='text-2xl'>Airport Management System</h3>
            </button>
          </div>

          <div className='navLinks'>
            {/* <button className='link-btn'>Home</button>
            <button className='link-btn'>Business</button>
            <button className='link-btn'>Add Business</button> */}
            <button className='link-btn border-2 rounded-xl border-white border-spacing-10' onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
    </>
  )
}
