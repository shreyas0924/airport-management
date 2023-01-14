import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const DeleteStaff = () => {
  const navigate = useNavigate()
     const [empid, setEmpid] = useState('')
   
     const [deleteStaff, setDeleteStaff] = useState([])
     function delStaff(e) {
      e.preventDefault()
  
      const url = 'http://localhost:3001/api/deletestaff'
      try {
        axios
          .post(url, {
            empid: empid,
          })
          .then(() =>
          setDeleteStaff([
              // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
              ...deleteStaff, //spread operator
              {
                // apend below
                empid: empid,
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
           onSubmit={delStaff}
         >
           <h1 className='text-center'>Delete Staff</h1>
   
           <div className='flex'>
             <p>Employee ID :</p>
             <input
               className='border-2 border-black rounded-md'
               type='text'
               name='name'
               value={empid}
               onChange={(e) => setEmpid(e.target.value)}
             />
           </div>
   
           <button
             type='submit'
             className='border-2 border-black'
             onClick={delStaff}
           >
             Delete staff
           </button>
         </Form>
       </div>
  )
}

export default DeleteStaff
