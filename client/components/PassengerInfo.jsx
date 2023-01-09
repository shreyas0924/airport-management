import React, { useState ,useEffect} from 'react'
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
export default function PassengerInfo() {
  const url = 'http://localhost:3001/api/passenger'
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
    getPassenger();
  }, [])

  return (
    <div className='app'>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Your profile!</TableCaption>
          <Thead>
            <Tr>
              <Th>Passport number</Th>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Gender</Th>
              <Th>Date of birth</Th>
              <Th>flight id</Th>
              <Th>Ticket number</Th>
              <Th>Bookedby</Th>
            </Tr>
          </Thead>
          <Tbody>
            {passenger.map((row) => (
              <Tr>
                <Td>{row.passport_no}</Td>
                <Td>{row.name}</Td>
                <Td>{row.address}</Td>
                <Td>{row.gender}</Td>
                <Td>{row.dob}</Td>
                <Td>{row.flight_id}</Td>
                <Td>{row.ticket_no}</Td>
                <Td>{row.bookedby_name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}
