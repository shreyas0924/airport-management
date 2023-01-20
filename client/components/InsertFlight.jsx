import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const InsertFlight = () => {
  const navigate = useNavigate()
  const [flightid, setFlightid] = useState('')
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')
  const [status, setStatus] = useState('')
  const [dtime, setDtime] = useState('')
  const [atime, setAtime] = useState('')
  const [airlineid, setAirlineid] = useState('')
  const [totseats, setTotseats] = useState('')

  const [flightinsert, setFlightInsert] = useState([])

  function signin(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/insertflight'
    try {
      axios
        .post(url, {
          flightid: flightid,
          source: source,
          destination: destination,
          status: status,
          dtime: dtime,
          atime: atime,
          airlineid: airlineid,
          totseats: totseats,
        })
        .then(() =>
          setFlightInsert([
            // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
            ...flightinsert, //spread operator
            {
              // apend below
              flightid: flightid,
              source: source,
              destination: destination,
              status: status,
              dtime: dtime,
              atime: atime,
              airlineid: airlineid,
              totseats: totseats,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }

    navigate(-1)
  }
  const goback = () => {
    navigate('/staffhome')
  }
  return (
    <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
      <Form className='border-black  border-2' method='post' onSubmit={signin}>
        <h1 className='text-center text-lg mt-5 mb-5'>Insert Flight</h1>

        <div className='flex-col m-5'>
          <h1 className='text-lg text-start'>Flight Id:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Flight Id'
            value={flightid}
            onChange={(e) => setFlightid(e.target.value)}
          />
        </div>
        <div className='flex-col text-start m-5 '>
          <h1 className='text-xl '>Source: </h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Source'
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Destination:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Destination'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Status:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Status '
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Time:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='time'
            name='name'
            value={dtime}
            onChange={(e) => setDtime(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Arrival Time:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='time'
            name='name'
            value={atime}
            onChange={(e) => setAtime(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Airline Id:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='number'
            name='name'
            placeholder='Airline Id'
            value={airlineid}
            onChange={(e) => setAirlineid(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Total seats</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='number'
            name='name'
            placeholder='Total Seats'
            value={totseats}
            onChange={(e) => setTotseats(e.target.value)}
          />
        </div>
        <div className='text-start lg:text-left'>
          <button
            type='submit'
            className='inline-block ml-5 mb-4 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={signin}
          >
            Insert Flight
          </button>
          <button
            className='inline-block ml-5 mb-4 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={goback}
          >
            Go Back
          </button>
        </div>
      </Form>
    </div>
  )
}

export default InsertFlight
