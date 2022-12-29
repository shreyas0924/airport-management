import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Airline from '../components/Airline'
import InsertAirport from '../components/InsertAirport'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/airport',
    element: <App />,
  },
  {
    path: '/airline',
    element: <Airline />,
  },
  {
    path: 'insertairport',
    element: <InsertAirport />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
