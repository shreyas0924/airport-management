import { useState } from "react";
// import { useNavigate } from 'react-router-dom';

import axios from "axios";

const Query = () => {
    const [query, setquery] = useState('');
    const [query_resp, setquery_resp] = useState([]);
    // const navigate = useNavigate();
    const enterquery = (e) => {
        e.preventDefault();
    
            const newquery = {
                query : query
            }
            axios.post('http://localhost:3001/queries', newquery)
            .then((res)=>{console.log(res.data);
                setquery_resp(res.data)
            })
            .catch((err)=>{console.log(err)})
            setquery('');
    }
    return (
        <div className="flex flex-col items-center justify-center box-border">
            <form className="w-full max-w-lg mb-6" onSubmit={enterquery}>
                <div className="flex flex-wrap justify-center mb-2">
                    <div className="w-full md:w-1/3 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name">
                            Query
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Query"
                            value={query}
                            onChange={(e) => setquery(e.target.value)}
                        />
                    </div>
                </div>
                <br />
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Query
                </button>
            </form>
            <div className="max-w-lg mt-2 ml-2">
                <a href="/airport"><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
                    Go back
                </button></a>
            </div>
            {/* <div>
                {query_resp ?
                    query_resp.map(resp => <div>{resp}</div>)
                    : "No query response"
                }
            </div> */}

            {JSON.stringify(query_resp)}
        </div>
    )
}
export default Query;