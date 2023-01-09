import React, { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
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
  return (
    <div className='app'>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Your profile!</TableCaption>
          <Thead>
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
  )
}
