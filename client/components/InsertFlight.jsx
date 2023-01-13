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
  return (
    <div>
      <Form
        className='border-black border-2'
         method='post'
         onSubmit={signin}
        
      >
        <h1 className='text-center'>Inser Flight</h1>

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
        <div className='flex'>
          <p>Source :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Destination :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Status :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Destination time :</p>
          <input
            className='border-2 border-black rounded-md'
            type='time'
            name='name'
            value={dtime}
            onChange={(e) => setDtime(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Arrival time :</p>
          <input
            className='border-2 border-black rounded-md'
            type='time'
            name='name'
            value={atime}
            onChange={(e) => setAtime(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Airline Id :</p>
          <input
            className='border-2 border-black rounded-md'
            type='number'
            name='name'
            value={airlineid}
            onChange={(e) => setAirlineid(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Total seats :</p>
          <input
            className='border-2 border-black rounded-md'
            type='number'
            name='name'
            value={totseats}
            onChange={(e) => setTotseats(e.target.value)}
          />
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
  )
}

export default InsertFlight
