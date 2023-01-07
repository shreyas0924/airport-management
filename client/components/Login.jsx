import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const navigate = useNavigate()

  const [emailPassenger, setEmailPassenger] = useState('')
  const [passwordPassenger, setPasswordPassenger] = useState('')
  const [passengerList, setPassengerList] = useState('')

  const [emailStaff, setEmailStaff] = useState('')
  const [passwordStaff, setPasswordStaff] = useState('')
  const [staffList, setStaffList] = useState([])

  function onSubmitStaff(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/staffLogin'
    try {
      axios
        .post(url, {
          emailStaff: emailStaff,
          passwordStaff: passwordStaff,
        })
        .then(() =>
          setStaffList([
            ...staffList,
            {
              emailStaff: emailStaff,
              passwordStaff: passwordStaff,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }
    navigate('/airport')
  }

  function onSubmitPassenger(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/passengerLogin'
    try {
      axios
        .post(url, {
          emailPassenger: emailPassenger,
          passwordPassenger: passwordPassenger,
        })
        .then(() =>
          setPassengerList([
            ...passengerList,
            {
              emailPassenger: emailPassenger,
              passwordPassenger: passwordPassenger,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }
    navigate('/airport')
  }

  return (
    <div>
      <h1 className='text-center font-bold mt-6 text-[30px] mb-6'>
        Airport Management System
      </h1>

      <div className='flex gap-5'>
        <Form
          className='border-2 border-black rounded-lg'
          method='post'
          onSubmit={onSubmitStaff}
          action='/airport'
        >
          <h1 className='text-center'>Admin</h1>
          <div className=''>
            <div className='flex'>
              <p>Email:</p>
              <input
                className='border-2 border-black rounded-md'
                type='email'
                name='emailStaff'
                value={emailStaff}
                onChange={(e) => setEmailStaff(e.target.value)}
              />
            </div>
            <div className='flex'>
              <p>Password:</p>
              <input
                className='border-2 border-black rounded-md'
                type='password'
                name='passwordStaff'
                value={passwordStaff}
                onChange={(e) => setPasswordStaff(e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className='border-2 border-black'>
            Login
          </button>
          <h1 className='text-blue cursor-pointer hover:text-[#0000FF]'>
            Sign Up
          </h1>
        </Form>

        <Form
          className='border-2 border-black rounded-lg'
          method='post'
          onSubmit={onSubmitPassenger}
          action='/airport'
        >
          <h1 className='text-center'>Passenger</h1>
          <div className=''>
            <div className='flex'>
              <p>Email:</p>
              <input
                className='border-2 border-black rounded-md'
                type='email'
                value={emailPassenger}
                onChange={(e) => setEmailPassenger(e.target.value)}
              />
            </div>
            <div className='flex'>
              <p>Password:</p>
              <input
                className='border-2 border-black rounded-md'
                type='password'
                value={passwordPassenger}
                onChange={(e) => setPasswordPassenger(e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className='border-2 border-black'>
            Login
          </button>
          <h1 className='text-blue cursor-pointer hover:text-[#0000FF]'>
            Sign Up
          </h1>
        </Form>
      </div>
    </div>
  )
}

export default Login
