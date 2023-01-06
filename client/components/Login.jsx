import React, { useState } from 'react'
import { Form } from 'react-router-dom'
function Login() {
  const [emailAdmin, setEmailAdmin] = useState('')
  const [passAdmin, setPassAdmin] = useState('')
  const [emailPassenger, setEmailPassenger] = useState('')
  const [passPassenger, setPassPassenger] = useState('')

  return (
    <div>
      <h1 className='text-center font-bold mt-6 text-[30px] mb-6'>
        Airport Management System
      </h1>

      <div className='flex gap-5'>
        <Form action='/airport' className='border-2 border-black rounded-lg'>
          {' '}
          {/* we have to put method */}
          <h1 className='text-center'>Admin</h1>
          <div className=''>
            <div className='flex'>
              <p>Email:</p>
              <input
                className='border-2 border-black rounded-md'
                type='email'
                value={emailAdmin}
                onChange={(e) => setEmailAdmin(e.target.value)}
              />
            </div>
            <div className='flex'>
              <p>Password:</p>
              <input
                className='border-2 border-black rounded-md'
                type='password'
                value={passAdmin}
                onChange={(e) => setPassAdmin(e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className='border-2 border-black '>
            Login
          </button>
          <h1 className='text-blue cursor-pointer hover:text-[#0000FF]'>
            Sign Up
          </h1>
        </Form>

        <Form action='' className='border-2 border-black rounded-lg'>
          {' '}
          {/* we have to put method */}
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
                value={passPassenger}
                onChange={(e) => setPassPassenger(e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className='border-2 border-black '>
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
