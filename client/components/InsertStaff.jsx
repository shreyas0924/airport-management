import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const InsertStaff = () => {
  const navigate = useNavigate()
  const [empid, setEmpid] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [salary, setSalary] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [airportName, setAirportName] = useState('')

  const [staffInsert, setStaffInsert] = useState([])
  function addStaff(e) {
    e.preventDefault()

    const url = 'http://localhost:3001/api/addstaff'
    try {
      axios
        .post(url, {
          empid: empid,
          name: name,
          gender: gender,
          salary: salary,
          age: age,
          designation: designation,
          airportName: airportName,
        })
        .then(() =>
          setStaffInsert([
            // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
            ...staffInsert, //spread operator
            {
              empid: empid,
              name: name,
              gender: gender,
              salary: salary,
              age: age,
              designation: designation,
              airportName: airportName,
            },
          ])
        )
    } catch (err) {
      console.error(err)
    }

    navigate(-1)
  }
  function goback() {
    navigate('/staffprofile')
  }
 
  return (
    <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
      <Form className='border-black border-2' method='post' onSubmit={addStaff}>
        <h1 className='text-center text-2xl mt-5 mb-5'>Add Staff</h1>

        <div className='flex-col m-5'>
          <h1 className='text-lg text-start'>Employee Id:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            value={empid}
            placeholder='Employee Id'
            onChange={(e) => setEmpid(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Name:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Gender:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Salary:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='number'
            name='name'
            placeholder='Salary'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Age:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='number'
            name='name'
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Designation:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Designation'
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className='flex-col m-5'>
          <h1 className='text-lg text-start mb-2'>Airline Name:</h1>
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            name='name'
            placeholder='Airport Name'
            value={airportName}
            onChange={(e) => setAirportName(e.target.value)}
          />
        </div>

        <div className='text-start lg:text-left'>
          <button
            type='submit'
            className='inline-block ml-5 mb-4 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={addStaff}
          >
            Add Staff
          </button>
          <button
            className='inline-block ml-5 mb-4 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={goback}
          >
            Go Back
          </button>
        </div>
      </Form>
    </div>
  )
}

export default InsertStaff
