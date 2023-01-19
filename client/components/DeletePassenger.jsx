import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import axios from "axios";

const DeletePassenger = () => {
  const navigate = useNavigate();
  const [passportno, setPassportno] = useState("");

  const [deletePassenger, setDeletePassenger] = useState([]);

  function delPassenger(e) {
    e.preventDefault();

    const url = "http://localhost:3001/api/deletepassenger";
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
        );
    } catch (err) {
      console.error(err);
    }

    navigate(-1);
  }
  function goback() {
    navigate('/passengerinfo')
  }
  return (
    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
      <Form
        className="border-black border-2"
        method="post"
        onSubmit={delPassenger}
      >
        <h1 className="text-center text-2xl mt-5 mb-5">Delete Passenger</h1>

        <div className="flex m-5">
          <input
            className="form-control  block w-50 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            name="name"
            placeholder="Passport Name"
            value={passportno}
            onChange={(e) => setPassportno(e.target.value)}
          />
        </div>
        <div className="text-center lg:text-left">
          <button
            type="submit"
            className="inline-block ml-5 mb-3 px-4 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={delPassenger}
          >
            Delete passenger
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
  );
};

export default DeletePassenger;
