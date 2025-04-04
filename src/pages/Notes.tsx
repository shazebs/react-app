import React, { useEffect, useState } from 'react';
import axios from '../axios';

export default function Notes() {
    // State to hold 'name' and 'ceo' input values
    const [name, setName] = useState('');
    const [ceo, setCeo] = useState('');

    const [apiData, setApiData] = useState<{ name: string, ceo: string }[]>([]); 

    useEffect(() => {
        // console.log("Updated apiData:", apiData);
    }, [apiData]); // Runs whenever apiData changes

    async function testAPI(name:string='', ceo:string='') {
        const query = {
            "query": "query ($companyName: String, $companyCeo: String) { companies(name: $companyName, ceo: $companyCeo) { name ceo } }",
            "variables": { "companyName": name, "companyCeo": ceo }
        }
        try {
            const response = await axios.post('graphql', query);
            // console.log('testAPI response', response.data.data.companies);
            setApiData(response.data.data.companies || []);
        } catch (e) {
            console.log('testAPI error', e);
        }
    }

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // prevent page reload
        testAPI(name, ceo); // Call API with entered 'name' and 'ceo'
    }

    return (
        <>
            <h1>Notes</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="companyName">Company Name:</label>
                    <input 
                        type="text"
                        id="companyName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="companyCeo">CEO:</label>
                    <input
                        type="text"
                        id="companyCeo"
                        value={ceo}
                        onChange={(e) => setCeo(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>

            </form>

            <button onClick={() => testAPI('', '')}>Test API</button>

            <br/>

            {/* Display API data if not empty */}
            {apiData.length > 0 ? (
                <div>
                    <h2>API Results:</h2>
                    <ul>
                        {apiData.map((company, index) => (
                            <li key={index}>
                                <strong>{company.name}</strong> - CEO: {company.ceo}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : <p>No data avaiable.</p>}
        </>
    )
}