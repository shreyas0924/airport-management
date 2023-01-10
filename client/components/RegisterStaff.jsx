import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'


function RegisterStaff() {
  const navigate = useNavigate()
  const [nameStaffReg, setNameStaffReg] = useState('')
  const [emailStaffReg, setEmailStaffReg] = useState('')
  const [passwordStaffReg, setPasswordStaffReg] = useState('')
  const [staffRegList, setStaffRegList] = useState([])

  function signup(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/registerstaff'
    try {
      axios
        .post(url, {
          nameStaffReg: nameStaffReg,
          emailStaffReg: emailStaffReg,
          passwordStaffReg: passwordStaffReg,
        })
        .then(() =>
          setStaffRegList([
            // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
            ...staffRegList, //spread operator
            {
              // apend below
              nameStaffReg: nameStaffReg,
              emailStaffReg: emailStaffReg,
              passwordStaffReg: passwordStaffReg,
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
            <h1 className='text-center'>Regsitration Admin</h1>
            <div className=''>
              <div className='flex'>
                <p>Name:</p>
                <input
                  className='border-2 border-black rounded-md'
                  type='text'
                  value={nameStaffReg}
                  onChange={(e) => setNameStaffReg(e.target.value)}
                />
              </div>
              <div className='flex'>
                <p>Email:</p>
                <input
                  className='border-2 border-black rounded-md'
                  type='email'
                  value={emailStaffReg}
                  onChange={(e) => setEmailStaffReg(e.target.value)}
                />
              </div>
              <div className='flex'>
                <p>Password:</p>
                <input
                  className='border-2 border-black rounded-md'
                  type='password'
                  value={passwordStaffReg}
                  onChange={(e) => setPasswordStaffReg(e.target.value)}
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

export default RegisterStaff
