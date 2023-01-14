import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import axios from "axios";

function RegisterStaff() {
  const navigate = useNavigate();
  const [nameStaffReg, setNameStaffReg] = useState("");
  const [emailStaffReg, setEmailStaffReg] = useState("");
  const [passwordStaffReg, setPasswordStaffReg] = useState("");
  const [staffRegList, setStaffRegList] = useState([]);

  function signup(e) {
    e.preventDefault();

    const url = "http://localhost:3001/api/registerstaff";
    try {
      axios
        .post(url, {
          nameStaffReg: nameStaffReg,
          emailStaffReg: emailStaffReg,
          passwordStaffReg: passwordStaffReg,
        })
        .then(() =>
          setStaffRegList([
            // arr[] = {} ...arr => {}  [..arr, 1] => {1} = arr    [..arr, [2,3,5]}] => 1,2,3,5
            ...staffRegList, //spread operator
            {
              // apend below
              nameStaffReg: nameStaffReg,
              emailStaffReg: emailStaffReg,
              passwordStaffReg: passwordStaffReg,
            },
          ])
        );
    } catch (err) {
      console.error(err);
    }

    navigate("/");
  }
  return (
    <div>
      <div className="flex  items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <Form
          className="border-2 mt-20 border-black rounded-lg"
          method="post"
          onSubmit={signup}
        >
          <div className="px-6 h-full text-grey-800">
            <h1 className="text-center m-5 text-lg">Regsitration of Admin</h1>
            <div className="flex mb-5">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                placeholder="Name"
                value={nameStaffReg}
                onChange={(e) => setNameStaffReg(e.target.value)}
              />
            </div>
            <div className="flex mb-5">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="email"
                placeholder="email address"
                value={emailStaffReg}
                onChange={(e) => setEmailStaffReg(e.target.value)}
              />
            </div>
            <div className="flex mb-5">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="password"
                placeholder="Password"
                value={passwordStaffReg}
                onChange={(e) => setPasswordStaffReg(e.target.value)}
              />
            </div>
            <div className="text-center lg:text-left mb-5">
              <button
                type="submit"
                className="inline-block  mb-2 px-6 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={signup}
              >
                Register
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RegisterStaff;
