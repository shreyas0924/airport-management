import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [namePassenger, setNamePassenger] = useState("");
  const [emailPassenger, setEmailPassenger] = useState("");
  const [passwordPassenger, setPasswordPassenger] = useState("");
  const [passengerList, setPassengerList] = useState("");

  const [nameStaff, setNameStaff] = useState("");
  const [emailStaff, setEmailStaff] = useState("");
  const [passwordStaff, setPasswordStaff] = useState("");
  const [staffList, setStaffList] = useState([]);

  function onSubmitStaff(e) {
    e.preventDefault();

    const url = "http://localhost:3001/api/staffLogin";
    try {
      axios
        .post(url, {
          nameStaff: nameStaff,
          emailStaff: emailStaff,
          passwordStaff: passwordStaff,
        })
        .then(() =>
          setStaffList([
            ...staffList,
            {
              nameStaff: nameStaff,
              emailStaff: emailStaff,
              passwordStaff: passwordStaff,
            },
          ])
        );
    } catch (err) {
      console.error(err);
    }

    navigate("/staffhome");
  }

  function onSubmitPassenger(e) {
    e.preventDefault();

    const url = "http://localhost:3001/api/passengerLogin";
    try {
      axios
        .post(url, {
          namePassenger: namePassenger,
          emailPassenger: emailPassenger,
          passwordPassenger: passwordPassenger,
        })
        .then(() =>
          setPassengerList([
            ...passengerList,
            {
              namePassenger: namePassenger,
              emailPassenger: emailPassenger,
              passwordPassenger: passwordPassenger,
            },
          ])
        );
    } catch (err) {
      console.error(err);
    }
    navigate("/passengerhome");
  }

  function signupStaff() {
    navigate("/registerstaff");
  }
  function signupPassenger() {
    navigate("/registerpassenger");
  }

  return (
    <div>
      <h1 className="text-center font-bold mt-6 text-[30px] mb-6">
        Airport Management System
      </h1>

      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        {/* login form for admin */}
        <Form
          className="border-2 border-black rounded-lg m-3"
          method="post"
          onSubmit={onSubmitStaff}
        >
          <div className="px-6 h-full text-gray-800">
            <h1 className="text-center text-lg mt-5">Admin Login</h1>

            <div className="flex m-5">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="type"
                name="nameStaff"
                placeholder="Name"
                value={nameStaff}
                onChange={(e) => setNameStaff(e.target.value)}
              />
            </div>
            <div className="flex m-5">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="email"
                name="emailStaff"
                placeholder="Email address"
                value={emailStaff}
                onChange={(e) => setEmailStaff(e.target.value)}
              />
            </div>
            <div className="flex m-5 ">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="password"
                name="passwordStaff"
                placeholder="Password"
                value={passwordStaff}
                onChange={(e) => setPasswordStaff(e.target.value)}
              />
            </div>
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block ml-5 mb-2 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>

              <div className="flex gap-3 ml-5 mb-3">
                <h1>Don't have an account yet? </h1>
                <h1
                  className="text-[#0000FF] cursor-pointer hover:underline"
                  onClick={signupStaff}
                >
                  Register
                </h1>
              </div>
            </div>
          </div>
        </Form> 
        {/* login form for passenger */}
        <Form
          className="border-2 border-black rounded-lg m-3"
          method="post"
          onSubmit={onSubmitPassenger}
        >
          <div className="px-6 h-full text-gray-800">
            <h1 className="text-center text-lg mt-5 m-4">Passenger Login</h1>
            <div className="flex mb-5 ">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="type"
                name="namePassenger"
                placeholder="Name"
                value={namePassenger}
                onChange={(e) => setNamePassenger(e.target.value)}
              />
            </div>
            <div className="flex mb-5">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="email"
                placeholder="email address"
                value={emailPassenger}
                onChange={(e) => setEmailPassenger(e.target.value)}
              />
            </div>
            <div className="flex mb-5">
              <input
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="password"
                placeholder="Password"
                value={passwordPassenger}
                onChange={(e) => setPasswordPassenger(e.target.value)}
              />
            </div>

            <div className="text-center lg:text-left mr-8">
              <button
                type="submit"
                className="inline-block  px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>

              <div className="flex gap-3 mb-3 mt-2">
                <h1>Don't have an account yet? </h1>
                <h1
                  className="text-[#0000FF] cursor-pointer hover:underline"
                  onClick={signupPassenger}
                >
                  Register
                </h1>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
