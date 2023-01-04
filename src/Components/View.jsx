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

  let detailsDelete = async (id) => {
    try {
        let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
        if (ask) {
            await axios.delete(`https://62ab049e371180affbdf40f1.mockapi.io/student/${id}`);
        }
        loadData();
    } catch (error) {
        console.log(error)
    }
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
            <th scope="col">course</th>
            <th scope="col">Location</th>
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
                <td>{details.course}</td>
                <td>{details.location}</td>
                <td>

                  <Link to={`/edit/${details.id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>

                  <button onClick={() => {
                    detailsDelete(details.id)
                  }} className='btn btn-sm btn-danger mr-2'>Delete</button>
                </td>
              </tr>
            })
          }



        </tbody>
      </table>

    </>
  )
}

export default View;