import React, { useEffect, useState } from 'react'
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

export default function StaffProfile() {
  const navigate = useNavigate()
  const createPDF = async () => {
    const pdf = new jsPDF('landscape', 'pt', 'a2')
    const data = await document.querySelector('#pdf')
    pdf.html(data).then(() => {
      pdf.save('staffdetails.pdf')
    })
  }
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
  const goback = () => {
    navigate(-1)
  }
  const addstaff = () => {
    navigate('/insertstaff')
  }
  const deleteStaff = () => {
    navigate('/deletestaff')
  }
  const updateStaff = () => {
    navigate('/updatestaff')
  }

  return (
    <div className='app'>
      <div id='pdf'>
        <TableContainer>
          <h1 className='text-3xl text-center m-4 '>Staff Profile</h1>
          <ButtonGroup variant='outline' spacing='6'></ButtonGroup>
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
          onClick={addstaff}
        >
          Add Staff
        </button>

        <button
          className='border-black border-2 rounded-xl p-3'
          onClick={deleteStaff}
        >
          Delete Staff
        </button>
        <button
          className='border-black border-2 rounded-xl p-3'
          onClick={updateStaff}
        >
          Update Staff
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
