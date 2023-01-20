import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../src/navbar.css";

export default function PassengerHome(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const url = "http://localhost:3001/api/passengerInfo";
  const url2 = "http://localhost:3001/api/ticketinfo";
  const [passInfo, setPassInfo] = useState([]);
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    async function getPassengerInfo() {
      try {
        const response = await fetch(url, {
          method: "get",
        });
        const data = await response.json();
        console.log(data);
        setPassInfo(data);
      } catch (err) {
        return err;
      }
    }
    getPassengerInfo();

    async function ticketInfo() {
      try {
        const response = await fetch(url2, {
          method: "get",
        });
        const data = await response.json();
        console.log(data);
        setTicket(data);
      } catch (err) {
        return err;
      }
    }
    ticketInfo();
  }, []);

  function logout() {
    navigate("/");
  }

  const passengerName = location.state.namePassenger;

  const filterArray = passInfo.filter((item) => item.name == passengerName);
  const filterTicket = filterArray.map((row) => row.ticket_no);
  console.log(filterTicket);
  const ticketArr = ticket.filter((item) => item.ticket_no == filterTicket);

  return (
    <>
      <div className="navbar">
        <div className="navBarContainer">
          <div className="navBarLogo">
            <button>
              <h3 className="text-2xl">Airport Management System</h3>
            </button>
          </div>
          <h1 className="flex text-xl ml-auto mr-5 gap2">
            <div className="mr-3">Welcome,</div><span>{location.state.namePassenger}</span>
          </h1>
          <div className="navLinks">
            <button
              className="link-btn border-2 rounded-xl border-black bg-white text-black border-spacing-10"
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div className="passengerDetails">
        <h1 className="text-center text-2xl bg-blue-200">Passenger Details</h1>

        <div>
          {filterArray.map((row) => (
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide text-center text-xl">About</span>
              </div>
              <div class="text-black-700">
                <div class="grid md:grid-cols-2 text-lg">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 text-lg font-semibold">Name:</div>
                    <div class="px-4 py-2">
                      <h1>{row.name}</h1>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-lg">Email:</div>
                    <div class="px-4 py-2">
                      <div class="px-4 py-2">{row.email}</div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-lg">Gender:</div>
                    <div class="px-4 py-2">{row.gender}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 text-lg font-semibold">
                      Passport number:
                    </div>
                    <div class="px-4 py-2">{row.passport_no}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-lg">
                      Ticket Number:
                    </div>
                    <div class="px-4 py-2">{row.ticket_no}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ticket">
          <h1 className="mt-6 text-2xl text-center bg-blue-200">Ticket Details:</h1>
          {ticketArr.map((row) => (
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"></div>
              <div>
                <div class="text-black-700">
                  <div class="grid md:grid-cols-2 text-lg">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">
                        Ticket number:
                      </div>
                      <div class="px-4 py-2">
                        <h1>{filterTicket}</h1>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">
                        Airline Id:
                      </div>
                      <div class="px-4 py-2">{row.airline_id}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">Price:</div>
                      <div class="px-4 py-2">{row.price}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">
                        Seat number:
                      </div>
                      <div class="px-4 py-2">{row.seat_no}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">Class :</div>
                      <div class="px-4 py-2">{row.class}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">
                        Destination Time :
                      </div>
                      <div class="px-4 py-2">{row.d_time}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">
                        Arrival Time :
                      </div>
                      <div class="px-4 py-2">{row.a_time}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">
                        Source :
                      </div>
                      <div class="px-4 py-2"> {row.source}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">
                        Destination :
                      </div>
                      <div class="px-4 py-2"> {row.destination}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 text-lg font-semibold">
                        Passport Number :
                      </div>
                      <div class="px-4 py-2"> {row.passport_no}</div>
                    </div>
                  </div>
                </div>

                {/* <h1>Ticket number: {filterTicket}</h1>
                <h1>Airline Id: {row.airline_id}</h1>
                <h1>Price: {row.price}</h1>
                <h1>Seat number: {row.seat_no}</h1>
                <h1>Class : {row.class}</h1>
                <h1>Destination Time : {row.d_time}</h1>
                <h1>Arrival Time : {row.a_time}</h1>
                <h1>Source : {row.source}</h1>
                <h1>Destination : {row.destination}</h1>
                <h1>Passport Number : {row.passport_no}</h1> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
