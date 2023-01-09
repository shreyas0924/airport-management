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
              <Th>Passport number</Th>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Gender</Th>
              <Th>Date of birth</Th>
              <Th>Flight id</Th>
              <Th>Ticket number</Th>
              <Th>Bookedby</Th>
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
