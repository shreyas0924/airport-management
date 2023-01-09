import React, { useEffect, useState } from 'react'
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

export default function StaffProfile() {
  const url = 'http://localhost:3001/api/staff'
  const [staffData, setStaffData] = useState([])

  useEffect(() => {
    function getStaff() {
      fetch(url, {
        method: 'get',
      })
        .then((response) => response.json())
        .then((data) => setStaffData(data))
        .catch((err) => console.log(err))
    }
    getStaff()
  }, [])

  return (
    <div className='app'>
      <TableContainer>
      <h1 className='text-3xl text-center m-4 '>Staff Profile</h1>
        <Table variant='striped'>
          <Thead bg='brand.100'>
            <Tr>
              <Th>Employee id</Th>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Salary</Th>
              <Th>Age</Th>
              <Th>designation</Th>
              <Th>Airport Name</Th>
            </Tr>
          </Thead>

          <Tbody>
            {staffData.map((row) => (
              <Tr>
                <Td>{row.e_id}</Td>
                <Td>{row.name}</Td>
                <Td>{row.gender}</Td>
                <Td>{row.salary}</Td>
                <Td>{row.age}</Td>
                <Td>{row.designation}</Td>
                <Td>{row.airport_name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* <div>
        {staffData.map((row) => (
          <>
            <h1>{row.name}</h1>
            <h1>{row.gender}</h1>
            <h1>{row.salary}</h1>
          </>
        ))}
      </div> */}
    </div>
  )
}
