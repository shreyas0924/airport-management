import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

const DeleteAirport = ({ toggleForm }) => {
    const [airport_name, setairport_name] = useState('');
    const navigate = useNavigate();
    const enterairport = async (e) => {
        e.preventDefault();
        try {
            const delairport = {
                airport_name: airport_name,

            }
            const response = await axios.post('http://localhost:3001/airport/delete', delairport);
            console.log(response.status);
            setairport_name('');
            toggleForm(false);


        }
        catch (error) {
            console.log(error.message);
        }
        navigate('/airport');
    }
    return (
        <div className="flex flex-col items-center justify-center box-border">
            <form class="w-full max-w-lg mb-6" onSubmit={enterairport}>
                <div class="flex flex-wrap justify-center mb-2">
                    <div class="w-full md:w-1/3 px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Airport Name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="airport name"
                            value={airport_name}
                            onChange={(e) => setairport_name(e.target.value)}
                        />
                    </div>
                </div>
                <br />
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Delete an Airport
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
export default DeleteAirport;