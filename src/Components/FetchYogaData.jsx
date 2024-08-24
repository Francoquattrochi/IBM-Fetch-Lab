import React from "react";
import UseFetch from "./UseFetch";
import './FetchData.css'
const FetchYogaData = () =>{
    const api = "https://api.npoint.io/4459a9a10e43812e1152"
    const [data] = UseFetch(api)
    console.log(data)
    return (
        <>
        <ul className="list_data_name">
            {data && data.map((e) =>(
                <li className="list_data">
                    <h1 className="usefetch_heading">{e.name} </h1>
                    <p> Benifits: {e.benefits }</p>
                    <p>Duration: {e.time_duration} </p>
                </li>
            ))}


        </ul>
        
        
        </>
    )
}
export default FetchYogaData