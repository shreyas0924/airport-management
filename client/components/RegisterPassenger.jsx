import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

function RegisterPassenger() {
  const navigate = useNavigate()
  const [nameRegPass, setNameRegPass] = useState('')
  const [emailRegPass, setEmailRegPass] = useState('')
  const [passwordRegPass, setPasswordRegPass] = useState('')
  const [passengerRegList, setPassengerRegList] = useState([])

  function signup(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/registerpassenger'
    try {
      axios
        .post(url, {
          nameRegPass: nameRegPass,
          emailRegPass: emailRegPass,
          passwordRegPass: passwordRegPass,
        })
        .then(() =>
          setPassengerRegList([
            ...passengerRegList,
            {
              nameRegPass: nameRegPass,
              emailRegPass: emailRegPass,
              passwordRegPass: passwordRegPass,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }

    navigate('/')
  }
  return (
    <div>
      <div className='flex gap-5'>
        <Form
          className='border-2 border-black rounded-lg'
          method='post'
          onSubmit={signup}
        >
          <h1 className='text-center'>Regsitration Passenger</h1>
          <div className=''>
            <div className='flex'>
              <p>Name:</p>
              <input
                className='border-2 border-black rounded-md'
                type='text'
                value={nameRegPass}
                onChange={(e) => setNameRegPass(e.target.value)}
              />
            </div>
            <div className='flex'>
              <p>Email:</p>
              <input
                className='border-2 border-black rounded-md'
                type='email'
                value={emailRegPass}
                onChange={(e) => setEmailRegPass(e.target.value)}
              />
            </div>
            <div className='flex'>
              <p>Password:</p>
              <input
                className='border-2 border-black rounded-md'
                type='password'
                value={passwordRegPass}
                onChange={(e) => setPasswordRegPass(e.target.value)}
              />
            </div>
          </div>

          <button
            type='submit'
            className='border-2 border-black'
            onClick={signup}
          >
            Register
          </button>
        </Form>
      </div>
    </div>
  )
}

export default RegisterPassenger
