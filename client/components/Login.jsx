import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const navigate = useNavigate()

  const [namePassenger, setNamePassenger] = useState('')
  const [emailPassenger, setEmailPassenger] = useState('')
  const [passwordPassenger, setPasswordPassenger] = useState('')
  const [passengerList, setPassengerList] = useState('')


  const [nameStaff, setNameStaff] = useState('')
  const [emailStaff, setEmailStaff] = useState('')
  const [passwordStaff, setPasswordStaff] = useState('')
  const [staffList, setStaffList] = useState([])

  function onSubmitStaff(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/staffLogin'
    try {
      axios
        .post(url, {
          nameStaff: nameStaff,
          emailStaff: emailStaff,
          passwordStaff: passwordStaff,
        })
        .then(() =>
          setStaffList([
            ...staffList,
            {
              nameStaff: nameStaff,
              emailStaff: emailStaff,
              passwordStaff: passwordStaff,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }
    navigate('/staffhome')
  }

  function onSubmitPassenger(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/passengerLogin'
    try {
      axios
        .post(url, {
          namePassenger: namePassenger,
          emailPassenger: emailPassenger,
          passwordPassenger: passwordPassenger,
        })
        .then(() =>
          setPassengerList([
            ...passengerList,
            {
              namePassenger: namePassenger,
              emailPassenger: emailPassenger,
              passwordPassenger: passwordPassenger,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }
    navigate('/passengerhome')
  }

  function signup() {
    navigate('/register')
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
          
        >
          <h1 className='text-center'>Admin</h1>
          <div className=''>
          <div className='flex'>
              <p>Name:</p>
              <input
                className='border-2 border-black rounded-md'
                type='type'
                name='nameStaff'
                value={nameStaff}
                onChange={(e) => setNameStaff(e.target.value)}
              />
            </div>
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
          <div className='flex gap-3'>
            <h1>Don't have an account yet? </h1>
            <h1
              className='text-[#0000FF] cursor-pointer hover:underline'
              onClick={signup}
            >
              Register
            </h1>
          </div>
        </Form>

        <Form
          className='border-2 border-black rounded-lg'
          method='post'
          onSubmit={onSubmitPassenger}
          
        >
          <h1 className='text-center'>Passenger</h1>
          <div className=''>
          <div className='flex'>
              <p>Name:</p>
              <input
                className='border-2 border-black rounded-md'
                type='type'
                name='namePassenger'
                value={namePassenger}
                onChange={(e) => setNamePassenger(e.target.value)}
              />
            </div>
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
          <div className='flex gap-3'>
            <h1>Don't have an account yet? </h1>
            <h1
              className='text-[#0000FF] cursor-pointer hover:underline'
              onClick={signup}
            >
              Register
            </h1>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
