import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import axios from 'axios'

const DeletePassenger = () => {
     const navigate = useNavigate()
     const [passportno, setPassportno] = useState('')
   
     const [deletePassenger, setDeletePassenger] = useState([])
   
     function delPassenger(e) {
       e.preventDefault()
   
       const url = 'http://localhost:3001/api/deletepassenger'
       try {
         axios
           .post(url, {
             passportno: passportno,
           })
           .then(() =>
             setDeletePassenger([
               // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
               ...deletePassenger, //spread operator
               {
                 // apend below
                 passportno: passportno,
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
           onSubmit={delPassenger}
         >
           <h1 className='text-center'>Delete Passenger</h1>
   
           <div className='flex'>
             <p>Passport No :</p>
             <input
               className='border-2 border-black rounded-md'
               type='text'
               name='name'
               value={passportno}
               onChange={(e) => setPassportno(e.target.value)}
             />
           </div>
   
           <button
             type='submit'
             className='border-2 border-black'
             onClick={delPassenger}
           >
             Delete passenger
           </button>
         </Form>
       </div>
     )
   
}

export default DeletePassenger
