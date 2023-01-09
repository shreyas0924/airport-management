import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
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
  return (
    <div className="app">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Your profile!</TableCaption>
          <Thead>
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
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
