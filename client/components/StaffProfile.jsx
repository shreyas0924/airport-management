import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
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
} from "@chakra-ui/react";

export default function StaffProfile() {
  const navigate = useNavigate();
  const url = "http://localhost:3001/api/staff";
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    function getStaff() {
      fetch(url, {
        method: "get",
      })
        .then((response) => response.json())
        .then((data) => setStaffData(data))
        .catch((err) => console.log(err));
    }
    getStaff();
  }, []);
  const goback = () => {
    navigate(-1);
  };

  return (
    <div className="app">
      <TableContainer>
        <h1 className="text-3xl text-center m-4 ">Staff Profile</h1>
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="black" onClick={goback}>
            Go back
          </Button>
        </ButtonGroup>
        <Table variant="striped">
          <Thead bg="brand.100">
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
  );
}
