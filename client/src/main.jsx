import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StaffHome from '../components/StaffHome'
import PassengerHome from '../components/PassengerHome'
import StaffProfile from '../components/StaffProfile'
import PassengerInfo from '../components/PassengerInfo'
import FlightDetails from '../components/FlightDetails'
import RegisterStaff from '../components/RegisterStaff'
import RegisterPassenger from '../components/RegisterPassenger'
import InsertFlight from '../components/InsertFlight'
import DeleteFlight from '../components/DeleteFlight'
import UpdateFlight from '../components/UpdateFlight'
import InsertPassenger from '../components/InsertPassenger'
import DeletePassenger from '../components/DeletePassenger'
import UpdatePassenger from '../components/UpdatePassenger'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#ffffff',
      // ...
      900: '#1a202c',
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/staffhome',
    element: <StaffHome />,
  },
  {
    path: '/passengerhome',
    element: <PassengerHome />,
  },
  {
    path: '/staffprofile',
    element: <StaffProfile />,
  },
  {
    path: '/passengerinfo',
    element: <PassengerInfo />,
  },
  {
    path: '/flightdetails',
    element: <FlightDetails />,
  },
  {
    path: '/registerstaff',
    element: <RegisterStaff />,
  },
  {
    path: '/registerpassenger',
    element: <RegisterPassenger />,
  },
  {
    path: '/insertflight',
    element: <InsertFlight />,
  },
  {
    path: '/deleteflight',
    element: <DeleteFlight />,
  },
  {
    path: '/updateflight',
    element: <UpdateFlight />,
  },
  {
    path: '/insertpassenger',
    element: <InsertPassenger />,
  },
  {
    path: '/deletepassenger',
    element: <DeletePassenger />,
  },
  {
    path: '/updatepassenger',
    element: <UpdatePassenger />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
