import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
// import axios from '../../../axios';
// import {useSelector} from 'react-redux'

export default function Airline() {
//   const {user} = useSelector((state)=>state.auth)
    const [airlinetable, setairlinetable] = useState([]);
    useEffect(() => {
        const airlinedata = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/airline`
                );
                setairlinetable(response.data);
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        airlinedata();
    }, []);
    return (
        <div className="mb-5">
            <h1 className="text-5xl flex justify-center">
                Airlines
            </h1>
            <TableContainer component={Paper} className="flex justify-center">
                <Table
                    sx={{
                        width: 900,
                        align: 'center',
                        marginTop: 5,
                        border: '1px solid',
                    }}
                    aria-label="simple table"
                    className="flex justify-center">
                    <TableHead>
                        <TableRow>
                            <TableCell>Airline ID</TableCell>
                            <TableCell align="right">Airline Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {airlinetable.map((row) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {row.airline_id}
                                </TableCell>
                                <TableCell align="right">{row.airline_name}</TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}