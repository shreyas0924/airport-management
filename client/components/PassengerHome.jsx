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

  return (
    <>
      <div className='navbar'>
        <div className='navBarContainer'>
          <div className='navBarLogo'>
            <button>
              <h3 className='text-2xl'>Airport Management System</h3>
            </button>
          </div>
          <h1 className='flex text-xl ml-auto mr-5 gap2'>
            <div className='mr-3'>Welcome,</div>
            <span>{location.state.namePassenger}</span>
          </h1>
          <div className='navLinks'>
            <button
              className='link-btn border-2 rounded-xl border-black bg-white text-black border-spacing-10'
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div className='passengerDetails m-4'>
        <h1 className='text-center  text-2xl bg-[#edf2f7]'>
          Passenger Details
        </h1>

        <div>
          {filterArray.map((row) => (
            <div class='bg-white p-3 shadow-sm rounded-sm'>
              <div class='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
                <span clas='text-green-500'></span>
              </div>
              <div class='text-black-700'>
                <div class='grid md:grid-cols-2 text-lg'>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 text-lg font-semibold'>Name:</div>
                    <div class='px-4 py-2'>
                      <h1>{row.name}</h1>
                    </div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold text-lg'>Email:</div>
                    <div class=' py-2'>
                      <div class='px-4 py-2'>{row.email}</div>
                    </div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold text-lg'>Gender:</div>
                    <div class='px-4 py-2'>{row.gender}</div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 text-lg font-semibold'>
                      Passport number:
                    </div>
                    <div class='px-4 py-2'>{row.passport_no}</div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold text-lg'>
                      Ticket Number:
                    </div>
                    <div class='px-4 py-2'>{row.ticket_no}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='ticket'>
          <h1 className='mt-6 text-2xl text-center m-4 bg-[#edf2f7]'>
            Ticket Details:
          </h1>
          {ticketArr.map((row) => (
            <div class='bg-white p-3 shadow-sm rounded-sm'>
              <div class='flex items-center space-x-2 font-semibold text-gray-900  leading-8'></div>
              <div>
                <div class='text-black-700'>
                  <div class='grid md:grid-cols-2 text-lg'>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>
                        Ticket number:
                      </div>
                      <div class='px-4 py-2'>
                        <h1>{filterTicket}</h1>
                      </div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>
                        Airline Id:
                      </div>
                      <div class='px-4 py-2'>{row.airline_id}</div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>Price:</div>
                      <div class='px-4 py-2'>{row.price}</div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>
                        Seat number:
                      </div>
                      <div class='px-4 py-2'>{row.seat_no}</div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>Class :</div>
                      <div class='px-4 py-2'>{row.class}</div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>
                        Destination Time :
                      </div>
                      <div class='px-4 py-2'>{row.d_time}</div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>
                        Arrival Time :
                      </div>
                      <div class='px-4 py-2'>{row.a_time}</div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>
                        Source :
                      </div>
                      <div class='px-4 py-2'> {row.source}</div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>
                        Destination :
                      </div>
                      <div class='px-4 py-2'> {row.destination}</div>
                    </div>
                    <div class='grid grid-cols-2'>
                      <div class='px-4 py-2 text-lg font-semibold'>
                        Passport Number :
                      </div>
                      <div class='px-4 py-2'> {row.passport_no}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
