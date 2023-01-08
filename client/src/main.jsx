import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Airline from '../components/Airline'
import InsertAirport from '../components/InsertAirport'
import DeleteAirport from '../components/DeleteAiport'
import UpdateAirport from '../components/UpdateAirport'
import Query from '../components/Query'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import StaffHome from '../components/StaffHome'
import PassengerHome from '../components/PassengerHome'
import Airport from '../components/Airport'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/airport',
    element: <Airport />,
  },
  {
    path: '/airline',
    element: <Airline />,
  },
  {
    path: '/insertairport',
    element: <InsertAirport />,
  },
  {
    path: '/deleteairport',
    element: <DeleteAirport />,
  },
  {
    path: '/updateairport',
    element: <UpdateAirport />,
  },
  {
    path: '/query',
    element: <Query />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/staffhome',
    element: <StaffHome />,
  },
  {
    path: '/passengerhome',
    element: <PassengerHome />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
