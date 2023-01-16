import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../src/navbar.css'

export default function PassengerHome(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const url = 'http://localhost:3001/api/passengerInfo'
  const url2 = 'http://localhost:3001/api/ticketinfo'
  const [passInfo, setPassInfo] = useState([])
  const [ticket, setTicket] = useState([])

  useEffect(() => {
    async function getPassengerInfo() {
      try {
        const response = await fetch(url, {
          method: 'get',
        })
        const data = await response.json()
        console.log(data)
        setPassInfo(data)
      } catch (err) {
        return err
      }
    }
    getPassengerInfo()

    async function ticketInfo() {
      try {
        const response = await fetch(url2, {
          method: 'get',
        })
        const data = await response.json()
        console.log(data)
        setTicket(data)
      } catch (err) {
        return err
      }
    }
    ticketInfo()
  }, [])

  function logout() {
    navigate('/')
  }

  const passengerName = location.state.namePassenger

  const filterArray = passInfo.filter((item) => item.name == passengerName)
  const filterTicket = filterArray.map((row) => row.ticket_no)
  console.log(filterTicket)
  const ticketArr = ticket.filter((item) => item.ticket_no == filterTicket)

  // const namesArr = passInfo.map((x) => x.name)
  //   const emailArr = passInfo.map((x) => x.email)
  //   const passwordArr = passInfo.map((x) => x.password)

  return (
    <>
      <div className='navbar'>
        <div className='navBarContainer'>
          <div className='navBarLogo'>
            <button>
              <h3 className='text-2xl'>Airport Management System</h3>
            </button>
          </div>

          <div className='navLinks'>
            <h1>Welcome, {location.state.namePassenger}</h1>
            <button
              className='link-btn border-2 rounded-xl border-black bg-white text-black border-spacing-10'
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div className='passengerDetails'>
        <h1>Passenger Details</h1>

        <div>
          {filterArray.map((row) => (
            <div>
              <h1>Name : {row.name}</h1>
              <h1>Email : {row.email}</h1>
              <h1>Gender : {row.gender}</h1>
              <h1>Passport Number : {row.passport_no}</h1>
              <h1>Ticket Number : {row.ticket_no}</h1>

              {/* <h1>Name : {row.name}</h1>
              <h1>Name : {row.name}</h1> */}
            </div>
          ))}
        </div>

        <div className='ticket'>
          <h1 className='mt-6'>TICKET</h1>
          {ticketArr.map((row) => (
            <div>
              <h1>{filterTicket}</h1>
              <h1>{row.airline_id}</h1>
              <h1>{row.price}</h1>
              <h1>{row.seat_no}</h1>
              <h1>Class : {row.class}</h1>
              <h1>Destination Time : {row.d_time}</h1>
              <h1>Arrival Time : {row.a_time}</h1>
              <h1>Source : {row.source}</h1>
              <h1>Destination : {row.destination}</h1>
              <h1>Passport Number : {row.passport_no}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
