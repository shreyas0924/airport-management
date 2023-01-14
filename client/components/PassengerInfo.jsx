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
    navigate(-1)
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
      <ButtonGroup variant='outline' spacing='6'>
        <Button colorScheme='black' onClick={goback} className='m-3'>
          Go back
        </Button>
      </ButtonGroup>
      <TableContainer>
        <Table variant='striped'>
          <Thead bg='brand.100'>
            <Tr>
              <Th>Name</Th>
              <Th>Passport number</Th>

              <Th>Address</Th>
              <Th>Gender</Th>
              <Th>Date of birth</Th>
              <Th>Passenger id</Th>
              <Th>Ticket number</Th>
              {/* <Th>Bookedby</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {passenger.map((row) => (
              <Tr>
                <Td>{row.name}</Td>
                <Td>{row.passport_no}</Td>

                <Td>{row.address}</Td>
                <Td>{row.gender}</Td>
                <Td>{row.dob}</Td>
                <Td>{row.Passenger_id}</Td>
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
        <button onClick={createPDF} type='button' className='border-black border-2 rounded-xl p-3 ml-auto'>
          Download PDF
        </button>
      </div>
    </div>
  )
}
