import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

// import Axios from 'axios'

const Airport = () => {
  const url = 'http://localhost:3001/airport'
  const [airportTable, setAirportTable] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch(url, {
        method: 'GET',
      })
        .then((result) => result.json())
        .then((data) => setAirportTable(data))
        .catch((err) => console.log(err))

      for (let i = 0; i < airportTable.length; i++) {
        console.log(airportTable[i])
      }
    }

    getData()
  }, [])

  // const [airporttable, setairporttable] = useState([])

  // useEffect(() => {
  //   async function airportdata(){
  //       try {
  //           const response = await axios.get(
  //               `http://localhost:3001/airport`
  //           );
  //           setairporttable(response.data);
  //           console.log(response.data);
  //       } catch (e) {
  //           console.log(e);
  //       }
  //   };
  //   airportdata();

  // }, [])
  return (
    <div className='Airport'>
      <h1 className='text-center font-bold mt-6 text-[30px] mb-6'>
        Airport Management System
      </h1>

      <TableContainer component={Paper} className='flex justify-center'>
        <Table
          sx={{
            size: 'large',
            width: 900,
            align: 'center',
            margin: 5,
          }}
          aria-label='a dense table'
          className='flex justify-center text-[40px] border-black border-2'
        >
          <TableHead>
            <TableRow>
              <TableCell>Airport Name</TableCell>
              <TableCell align='center'>City</TableCell>
              <TableCell align='right'>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {airportTable.map((row) => (
              <TableRow>
                <TableCell component='th' scope='row'>
                  {row.airport_name}
                </TableCell>
                <TableCell align='center'>{row.city}</TableCell>
                <TableCell align='right'>{row.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div></div>

      <div className='mt-10 flex justify-center box-border gap-3'>
        <a href='/insertairport'>
          <button className='bg-transparent py-2 px-4 text-black border-black border-2 rounded-xl'>
            Insert Airport
          </button>
        </a>
        <a href='/deleteairport'>
          <button className='bg-transparent py-2 px-4 text-black border-black border-2 rounded-xl'>
            Delete Airport
          </button>
        </a>
        <a href='/updateairport'>
          <button className='bg-transparent py-2 px-4 text-black border-black border-2 rounded-xl'>
            Update Airport
          </button>
        </a>
      </div>
    </div>
  )
}

export default Airport
