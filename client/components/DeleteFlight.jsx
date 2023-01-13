import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const DeleteFlight = () => {
  const navigate = useNavigate()
  const [flightid, setFlightid] = useState('')

  const [flightDelete, setFlightDelete] = useState([])

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
    <div>
      <Form
        className='border-black border-2'
        method='post'
        onSubmit={deleteFlight}
      >
        <h1 className='text-center'>Delete Flight</h1>

        <div className='flex'>
          <p>Flight Id :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={flightid}
            onChange={(e) => setFlightid(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='border-2 border-black'
          onClick={deleteFlight}
        >
          Delete Flight
        </button>
      </Form>
    </div>
  )
}

export default DeleteFlight
