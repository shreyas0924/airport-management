import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

const UpdateAirport = ({ toggleForm }) => {
    // choice,oldairportname,update_value
    const [choice, setchoice] = useState(0);
    const [oldairportname, setoldairportname] = useState('');
    const [update_value, setupdate_value] = useState('');
    const navigate = useNavigate();
    const enterairport = async (e) => {
        e.preventDefault();
        try {
            const updateairport = {
                choice: Number(choice),
                oldairportname: oldairportname,
                update_value: update_value,

            }
            const response = await axios.post('http://localhost:3001/airport/update', updateairport);
            console.log(response.status);
            console.log(updateairport);
            setchoice(0);
            setoldairportname('');
            setupdate_value('');
            toggleForm(false);


        }
        catch (error) {
            console.log(error.message);
        }
        navigate('/airport');
    }
    return (
        <div className="flex flex-col items-center justify-center box-border">
            {/* <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Choice:
                <ol>
                    <li>Airport name</li>
                    <li>City</li>
                    <li>State</li>
                </ol>
            </div>
            <br /> */}
            <form class="w-full max-w-lg mb-6" onSubmit={enterairport}>
                <div class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                    Choice:<br />
                    <span>1. Airport Name &nbsp;&nbsp; 2. City&nbsp;&nbsp;  3. State</span>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6"></div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Choice
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="choice"
                            value={choice}
                            onChange={(e) => setchoice(e.target.value)}
                        />
                    </div>
                    <div class="w-full md:w-1/3 px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Airport name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Old airport name"
                            value={oldairportname}
                            onChange={(e) => setoldairportname(e.target.value)}
                        />
                    </div>
                    <div class="w-full md:w-1/3 px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Updated Value
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Updated value"
                            value={update_value}
                            onChange={(e) => setupdate_value(e.target.value)}
                        />
                    </div>
                </div>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Update an Airport
                </button>
            </form>
            
            <div className="max-w-lg mt-4">
                <a href="/airport"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
                    Go back
                </button></a>
            </div>
        </div>
    )
}
export default UpdateAirport;