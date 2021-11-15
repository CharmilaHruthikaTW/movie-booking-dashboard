import React, { useEffect, useMemo, useState } from "react"
import axios from "axios"

const Dashboard = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios.get("https://crudcrud.com/api/5c497dd34e4c47a0ab2f37bd3ec5939a/avengers")
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
        </tr>)
    }
        )
};
    getRows(data);
    return (
        <div>
            <h1>Movies</h1>
            <table>
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