import React, { useState, useEffect } from 'react'
import '../src/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { jsPDF } from 'jspdf'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export default function PassengerInfo() {
  const url = 'http://localhost:3001/api/passenger'
  const navigate = useNavigate()
  const createPDF = async () => {
    const pdf = new jsPDF('landscape', 'pt', 'a2')
    const data = await document.querySelector('#pdf')
    pdf.html(data).then(() => {
      pdf.save('passengerinfo.pdf')
    })
  }
  const [passenger, setPassenger] = useState([])
  useEffect(() => {
    function getPassenger() {
      fetch(url, {
        method: 'get',
      })
        .then((response) => response.json())
        .then((data) => setPassenger(data))
        .catch((err) => console.log(err))
    }
    getPassenger()
  }, [])
  const goback = () => {
    navigate('/staffhome')
  }
  const addPassenger = () => {
    navigate('/insertpassenger')
  }
  const deletePassenger = () => {
    navigate('/deletepassenger')
  }
  const updatePassenger = () => {
    navigate('/updatepassenger')
  }
  return (
    <div className='app'>
      <div id='pdf'>
        <h1 className='text-3xl text-center m-4 '>Details of all Passengers</h1>
        <ButtonGroup variant='outline' spacing='6'></ButtonGroup>
        <TableContainer>
          <Table variant='striped'>
            <Thead bg='brand.100'>
              <Tr>
                <Th>Name</Th>
                {/* <Th>Email</Th> */}
                <Th>Passport number</Th>
                <Th>Address</Th>
                <Th>Flight Id</Th>
                <Th>Gender</Th>
                <Th>Date of birth</Th>
                <Th>Ticket number</Th>
                {/* <Th>Bookedby</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              {passenger.map((row) => (
                <Tr>
                  <Td>{row.name}</Td>
                  {/* <Td>{row.email}</Td>   */}

                  <Td>{row.passport_no}</Td>

                  <Td>{row.address}</Td>
                  <Td>{row.flight_id}</Td>
                  <Td>{row.gender}</Td>
                  <Td>{row.dob}</Td>

                  <Td>{row.ticket_no}</Td>
                  {/* <Td>{row.bookedby_name}</Td> */}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div className='flex justify-evenly m-[70px] gap-6'>
        <button
          className='border-black border-2 rounded-xl p-3 mr-auto'
          onClick={goback}
        >
          Go Back
        </button>
        <button
          className='border-black border-2 rounded-xl p-3'
          onClick={addPassenger}
        >
          Insert Passenger
        </button>
        <button
          className='border-black border-2 rounded-xl p-3'
          onClick={deletePassenger}
        >
          Delete Passenger
        </button>
        <button
          className='border-black border-2 rounded-xl p-3'
          onClick={updatePassenger}
        >
          Update Passenger
        </button>
        <button
          onClick={createPDF}
          type='button'
          className='border-black border-2 rounded-xl p-3 ml-auto'
        >
          Download PDF
        </button>
      </div>
    </div>
  )
}
