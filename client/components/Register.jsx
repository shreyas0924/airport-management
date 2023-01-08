import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'


export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('')
  const handleChange = (event) => {
    setType(event.target.value)
  }
  function signin() {
    navigate('/')
  }
  return (
    <div>
      <div className='flex gap-5'>
        <Form
          className='border-2 border-black rounded-lg'
          //  method='post'
          //  onSubmit={onSubmitStaff}
          //  action='/airport'
        >
          <h1 className='text-center'>Regsitration Form</h1>
          <div className=''>
            <div className='flex'>
              <p>Name:</p>
              <input
                className='border-2 border-black rounded-md'
                type='email'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex'>
              <p>Email:</p>
              <input
                className='border-2 border-black rounded-md'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex'>
              <p>Password:</p>
              <input
                className='border-2 border-black rounded-md'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='flex'>
            <label>
              Are you :   
              <select value={type} onChange={handleChange}>
                <option value='Staff'> Staff</option>
                <option value='Passenger'> Passenger</option>
              </select>
            </label>
          </div>

          

          <button
            type='submit'
            className='border-2 border-black'
            onClick={signin}
          >
            Register
          </button>
        </Form>
      </div>
    </div>
  )
}
