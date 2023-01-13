import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const InsertPassenger = () => {
  const navigate = useNavigate()
  const [passportno, setPassportno] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [flightid, setFlightid] = useState('')
  const [ticketno, setTicketno] = useState('')
  const [bookedby, setBookedby] = useState('')

  const [passengerInsert, setPassengerInsert] = useState([])
  function addPassenger(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/addpassenger'
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
          setPassengerInsert([
            // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
            ...passengerInsert, //spread operator
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
  return (
    <div>
      <Form
        className='border-black border-2'
        method='post'
        onSubmit={addPassenger}
      >
        <h1 className='text-center'>Add passenger</h1>

        <div className='flex'>
          <p>Passport number :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            value={passportno}
            onChange={(e) => setPassportno(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Name :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Address :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Gender :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>DOB :</p>
          <input
            className='border-2 border-black rounded-md'
            type='date'
            name='name'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Flight ID :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={flightid}
            onChange={(e) => setFlightid(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Ticket NO  :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={ticketno}
            onChange={(e) => setTicketno(e.target.value)}
          />
        </div>
        <div className='flex'>
          <p>Booked By :</p>
          <input
            className='border-2 border-black rounded-md'
            type='text'
            name='name'
            value={bookedby}
            onChange={(e) => setBookedby(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='border-2 border-black'
          onClick={addPassenger}
        >
          Add passenger
        </button>
      </Form>
    </div>
  )
}

export default InsertPassenger
