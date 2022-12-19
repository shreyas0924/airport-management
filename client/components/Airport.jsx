import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const Airport = () => {
  return (
    <div className='Airport'>
      <h1 className='text-center font-bold mt-6 text-[30px] mb-6'>
        Airport Management
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
              <TableCell align='right'>City</TableCell>
              <TableCell align='right'>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {airporttable.map((row) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {row.airport_name}
                                </TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">
                                    {row.state}
                                </TableCell>
                            </TableRow>
                        ))} */}
          </TableBody>
        </Table>
      </TableContainer>

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
