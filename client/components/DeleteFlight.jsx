import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const DeleteFlight = () => {
  const navigate = useNavigate()
  const [flightid, setFlightid] = useState('')

  const [flightDelete, setFlightDelete] = useState([])
  const goback = () => {
    navigate('/staffhome')
  }

  function deleteFlight(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/deleteflight'
    try {
      axios
        .post(url, {
          flightid: flightid,
        })
        .then(() =>
          setFlightDelete([
            // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
            ...flightDelete, //spread operator
            {
              // apend below
              flightid: flightid,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }

    navigate(-1)
  }
  return (
    <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
      <Form
        className='border-black border-2 rounded-lg m-3'
        method='post'
        onSubmit={deleteFlight}
      >
        <h1 className='text-center text-2xl mt-5 mb-5'>Delete Flight</h1>

        <div className='flex m-5'>
          <input
            className='form-control  block w-50 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Flight id'
            value={flightid}
            onChange={(e) => setFlightid(e.target.value)}
          />
        </div>
        <div className='text-center lg:text-left'>
          <button
            type='submit'
            className='inline-block ml-5 mb-3 px-4 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={deleteFlight}
          >
            Delete 
          </button>
          <button
            className='inline-block ml-5 mb-4 px-5 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={goback}
          >
            Go Back
          </button>
        </div>
      </Form>
    </div>
  )
}

export default DeleteFlight
