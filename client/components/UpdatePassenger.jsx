import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const UpdatePassenger = () => {
  const navigate = useNavigate()
  const [passportno, setPassportno] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [flightid, setFlightid] = useState('')
  const [ticketno, setTicketno] = useState('')
  const [bookedby, setBookedby] = useState('')

  const [passengerUpdate, setPassengerUpdate] = useState([])
  function updatepassenger(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/updatepassenger'
    try {
      axios
        .post(url, {
          passportno: passportno,
          name: name,
          address: address,
          gender: gender,
          dob: dob,
          flightid: flightid,
          ticketno: ticketno,
          bookedby: bookedby,
        })
        .then(() =>
          setPassengerUpdate([
            // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
            ...passengerUpdate, //spread operator
            {
              // apend below
              passportno: passportno,
              name: name,
              address: address,
              gender: gender,
              dob: dob,
              flightid: flightid,
              ticketno: ticketno,
              bookedby: bookedby,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }

    navigate(-1)
  }
  function goback() {
    navigate('/passengerinfo')
  }
  return (
    <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
      <Form
        className='border-black  border-2'
        method='post'
        onSubmit={updatepassenger}
      >
        <h1 className='text-center text-lg mt-5 mb-5'>
          Update Passengers Deatils:
        </h1>

        <div className='flex-col m-5'>
          <h1 className='text-lg text-start'>Passport Number:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            placeholder='Passport number'
            value={passportno}
            onChange={(e) => setPassportno(e.target.value)}
          />
        </div>
        <div className='flex-col text-start m-5 '>
          <h1 className='text-lg text-start'>Name:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start'>Address:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start'>Gender:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start'>Date of Birth:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='date'
            name='name'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
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
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start'>Ticket Number:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Ticket Number'
            value={ticketno}
            onChange={(e) => setTicketno(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Booked by:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Booked By'
            value={bookedby}
            onChange={(e) => setBookedby(e.target.value)}
          />
        </div>
        <div className='text-start lg:text-left'>
          <button
            type='submit'
            className='inline-block ml-5 mb-4 px-5 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={updatepassenger}
          >
            Update 
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

export default UpdatePassenger
