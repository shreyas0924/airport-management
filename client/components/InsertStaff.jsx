import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const InsertStaff = () => {
     const navigate = useNavigate()
     const [empid, setEmpid]= useState('')
     const [name, setName]= useState('')
     const [gender, setGender]= useState('')
     const [salary, setSalary]= useState('')
     const [age, setAge]= useState('')
     const [designation, setDesignation]= useState('')
     const [airportName, setAirportName]= useState('')

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
  return (
     <div>
     <Form
       className='border-black border-2'
       method='post'
       onSubmit={addStaff}
     >
       <h1 className='text-center'>Add Staff</h1>

       <div className='flex'>
         <p>Employee ID :</p>
         <input
           className='border-2 border-black rounded-md'
           type='text'
           value={empid}
           onChange={(e) => setEmpid(e.target.value)}
         />
       </div>
       <div className='flex'>
         <p>Name :</p>
         <input
           className='border-2 border-black rounded-md'
           type='text'
           name='name'
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
       </div>
       <div className='flex'>
         <p>Gender :</p>
         <input
           className='border-2 border-black rounded-md'
           type='text'
           name='name'
           value={gender}
           onChange={(e) => setGender(e.target.value)}
         />
       </div>
       <div className='flex'>
         <p>Salary :</p>
         <input
           className='border-2 border-black rounded-md'
           type='number'
           name='name'
           value={salary}
           onChange={(e) => setSalary(e.target.value)}
         />
       </div>
       <div className='flex'>
         <p>Age :</p>
         <input
           className='border-2 border-black rounded-md'
           type='number'
           name='name'
           value={age}
           onChange={(e) => setAge(e.target.value)}
         />
       </div>
       <div className='flex'>
         <p>Designation :</p>
         <input
           className='border-2 border-black rounded-md'
           type='text'
           name='name'
           value={designation}
           onChange={(e) => setDesignation(e.target.value)}
         />
       </div>
       <div className='flex'>
         <p>Airport Name :</p>
         <input
           className='border-2 border-black rounded-md'
           type='text'
           name='name'
           value={airportName}
           onChange={(e) => setAirportName(e.target.value)}
         />
       </div>
       

       <button
         type='submit'
         className='border-2 border-black'
         onClick={addStaff}
       >
         Add Staff
       </button>    
     </Form>
   </div>
  )
}

export default InsertStaff
