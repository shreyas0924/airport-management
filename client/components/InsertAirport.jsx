import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const InsertAirport = ({ toggleForm }) => {
  const [airport_name, setairport_name] = useState('')
  const [city, setcity] = useState('')
  const [state, setstate] = useState('')
  const navigate = useNavigate()
  const enterairport = async (e) => {
    e.preventDefault()
    try {
      const newairport = {
        airport_name: airport_name,
        city: city,
        state: state,
      }
      const response = await axios.post(
        'http://localhost:3001/airport/insert_airport',
        newairport
      )
      console.log(response.status)
      setairport_name('')
      setcity('')
      setstate('')
      toggleForm(false)
    } catch (error) {
      console.log(error.message)
    }
    navigate('/airport')
  }
  return (
    <div className='flex flex-col items-center justify-center box-border'>
      <form class='w-full max-w-lg mb-6' onSubmit={enterairport}>
        <div class='flex flex-wrap -mx-3 mb-6'></div>
        <div class='flex flex-wrap -mx-3 mb-2'>
          <div class='w-full md:w-1/3 px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Airport Name
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='text'
              placeholder='airport name'
              value={airport_name}
              onChange={(e) => setairport_name(e.target.value)}
            />
          </div>
          <div class='w-full md:w-1/3 px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              City
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='text'
              placeholder='city'
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
          <div class='w-full md:w-1/3 px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              State
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='text'
              placeholder='state'
              value={state}
              onChange={(e) => setstate(e.target.value)}
            />
          </div>
        </div>

        {/* <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-city">
                                        state
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-city"
                                        type="date"
                                        value={doj}
                        onChange = {(e)=>setstate(e.target.value)}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name">
                                        Phone Number
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="phone"
                                        placeholder="xxxxxxxxxx"
                                        value={phoneno}
                        onChange = {(e)=>setphoneno(e.target.value)}
                                    />
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-zip">
                                        Shift
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-state" value={shift}
                        onChange = {(e)=>setshift(e.target.value)}>
                                            <option>Day</option>
                                            <option>Night</option>
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                class="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="relative">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-zip">
                                            gender
                                        </label>
                                        <select
                                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-state" value={genders}
                        onChange = {(e)=>setgenders(e.target.value)}>
                                            <option>M</option>
                                            <option>F</option>
                                            <option>O</option>
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                class="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name">
                                        serviceID
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="10 varchar"
                                        value={service}
                        onChange = {(e)=>setservice(e.target.value)}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name">
                                        salary
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="number"
                                        placeholder="Doe"
                                        value={salary}
                        onChange = {(e)=>setsalary(e.target.value)}
                                    />
                                </div>
                            </div> */}
        <button class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Add an Airport
        </button>
      </form>
      <div className='max-w-lg mt-4'>
        <a href='/airport'>
          <button class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2'>
            Go back
          </button>
        </a>
      </div>
    </div>
  )
}
export default InsertAirport
