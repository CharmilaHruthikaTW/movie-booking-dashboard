import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Dashboard.css"

const Dashboard = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios.get("https://crudcrud.com/api/21cbb91320c74ec6a19467dcbb69f2a3/movies")
            .then((Response) => {
                setData(Response.data)
                console.log(Response.data[0])
            })
        }
        getData();
    },[]);
    const rows = []
    const getRows = (data) =>{
        data.forEach( (data1) => {
        rows.push(
        <tr>
            <td>{data1.name}</td>
            <td>{data1._id}</td>
            <td>{data1["total-tickets"]}</td>
            <td>{data1["booked-tickets"]}</td>
        </tr>
       )
        
    }
    
        )
};
    getRows(data);
    return (
        <div>
            
            <table>
                <caption><b>Movies</b></caption>
            <thead>
                <tr>
                    <th>Movie Name</th>
                    <th>Id</th>
                    <th>Total Tickets</th>
                    <th>Booked Tickets</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>

        </div>
    );
}
export default Dashboard