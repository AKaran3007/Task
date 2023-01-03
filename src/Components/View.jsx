import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function View() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    loadData()
  }, [])

  let loadData = async () => {
    let details = await axios.get("https://62ab049e371180affbdf40f1.mockapi.io/student")
    setDetails(details.data);
  }
  return (
    <>

<h1 className="h3 mb-0 text-gray-800">Details</h1>
<Link to="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Create Details</Link>
    
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Number</th>
            <th scope="col">Address</th>
            <th scope="col">Pincode</th>
          </tr>
        </thead>
        <tbody>
          {
            details.map((details, index) => {
              return <tr>
                <th scope="row">{index + 1}</th>
                <td>{details.name}</td>
                <td>{details.gender}</td>
                <td>{details.age}</td>
                <td>{details.number}</td>
                <td>{details.address}</td>
                <td>{details.pincode}</td>
              </tr>
            })
          }



        </tbody>
      </table>

    </>
  )
}

export default View;