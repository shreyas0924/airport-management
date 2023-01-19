import React, { useState, useEffect } from 'react'
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
export default function FlightDetails() {
  const createPDF = async () => {
    const pdf = new jsPDF('landscape', 'pt', 'a2')
    const data = await document.querySelector('#pdf')
    pdf.html(data).then(() => {
      pdf.save('staffhome.pdf')
    })
  }
  const navigate = useNavigate()
  const url = 'http://localhost:3001/api/flight'
  const [flight, setFlight] = useState([])

  useEffect(() => {
    function getFlight() {
      fetch(url, {
        method: 'get',
      })
        .then((response) => response.json())
        .then((data) => setFlight(data))
        .catch((err) => console.log(err))
    }
    getFlight()
  }, [])
  // const goback = () => {
  //   navigate(-1);
  // };
  const insert = () => {
    navigate('/insertflight')
  }
  const deleteFlight = () => {
    navigate('/deleteflight')
  }
  const updateFlight = () => {
    navigate('/updateflight')
  }
  return (
    <div>
      <div className='app' id='pdf'>
        <TableContainer>
          <h1 className='text-3xl text-center m-4 '>Flight Details</h1>
          <ButtonGroup variant='outline' spacing='6'>
            {/* <Button colorScheme="black" onClick={goback}>
            Go back
          </Button> */}
          </ButtonGroup>
          <Table variant='striped'>
            <Thead bg='brand.100'>
              <Tr>
                <Th>Flight id</Th>
                <Th>Source</Th>
                <Th>Destination</Th>
                <Th>Status</Th>
                <Th>Departure time</Th>
                <Th>Arrival time</Th>
                <Th>Airline id</Th>
                <Th>Total seats</Th>
              </Tr>
            </Thead>
            <Tbody>
              {flight.map((row) => (
                <Tr>
                  <Td>{row.flight_id}</Td>
                  <Td>{row.source}</Td>
                  <Td>{row.destination}</Td>
                  <Td>{row.status}</Td>
                  <Td>{row.d_time}</Td>
                  <Td>{row.a_time}</Td>
                  <Td>{row.airline_id}</Td>
                  <Td>{row.tot_seat}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>

      <div className='flex justify-evenly m-[70px] gap-6'>
        <button
          className='border-black border-2 rounded-xl p-3'
          onClick={insert}
        >
          Insert Flight
        </button>
        <button
          className='border-black border-2 rounded-xl p-3'
          onClick={deleteFlight}
        >
          Delete Flight
        </button>
        <button
          className='border-black border-2 rounded-xl p-3'
          onClick={updateFlight}
        >
          Update Flight
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
