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
export default function FlightDetails() {
  return (
    <div className="app">
      <TableContainer>
        <Table variant="simple">
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
