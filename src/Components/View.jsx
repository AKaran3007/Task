import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function View() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData()
  }, [])

  let loadData = async () => {
    setLoading(true);
    let details = await axios.get("https://62ab049e371180affbdf40f1.mockapi.io/student")
    setDetails(details.data);
    setLoading(false);
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
      {loading ? (<h1> Loading Details Please Wait . . .</h1>) : (
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col"><b>S.no</b></th>
              <th scope="col"><b>Name</b></th>
              <th scope="col"><b>Gender</b></th>
              <th scope="col"><b>Age</b></th>
              <th scope="col"><b>Number</b></th>
              <th scope="col"><b>Address</b></th>
              <th scope="col"><b>Pincode</b></th>
              <th scope="col"><b>course</b></th>
              <th scope="col"><b>Location</b></th>
            </tr>
          </thead>
          <tbody>
            {
              details.map((details, index) => {
                return <tr>
                  <th scope="row">{index + 1}</th>
                  <td><b>{details.name}</b></td>
                  <td><b>{details.gender}</b></td>
                  <td><b>{details.age}</b></td>
                  <td><b>{details.number}</b></td>
                  <td><b>{details.address}</b></td>
                  <td><b>{details.pincode}</b></td>
                  <td><b>{details.course}</b></td>
                  <td><b>{details.location}</b></td>
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
      )}


    </>
  )
}

export default View;