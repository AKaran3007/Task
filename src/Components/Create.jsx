import React from "react";
import { useFormik } from 'formik';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


function Create() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            age: "",
            number: "",
            address: "",
            pincode: ""
        },
        onSubmit: async (values) => {
            let students = await axios.post("https://62ab049e371180affbdf40f1.mockapi.io/student", values);
            alert("Details Created...");
            navigate('/view')
        }
    })
    return (
        <>
            <div className='container'>
                <div className="d-sm-flex align-items-center justify-content-center mb-4">
                    <h1 className="h3 mb-0 text-dark-800">Create Details Form</h1>

                </div>
                <Link to="/view" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">View Details</Link>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Name</label>
                            <input
                                className={'form-control'}
                                type={'text'}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                placeholder="Enter your name"
                                name="name"
                            />

                        </div>

                        <div className='col-lg-6 dropdown dropend'>
                            <label>Gender</label>
                            
                            <input
                                className={'form-control'}
                                type={'text'}
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                name="gender"
                                placeholder="Male/Female/Others"
                            />
                             </div>



                        <div className='col-lg-6'>
                            <label>Age</label>
                            <input
                                className={'form-control'}
                                type={'number'}
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                name="age"
                                placeholder="Enter your Age"
                            />

                        </div>

                        <div className='col-lg-6'>
                            <label>Number</label>
                            <input
                                className='form-control'
                                type={'number'}
                                value={formik.values.number}
                                onChange={formik.handleChange}
                                name="number"
                                placeholder="Enter your Number"
                            />
                        </div>

                        <div className='col-lg-6'>
                            <label>Address</label>
                            <input
                                className='form-control'
                                type={'text'}
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                name="address"
                                placeholder="Enter your Address"
                            />
                        </div>

                        <div className='col-lg-6'>
                            <label>PinCode</label>
                            <input
                                className='form-control'
                                type={'number'}
                                value={formik.values.pincode}
                                onChange={formik.handleChange}
                                name="pincode"
                                placeholder="Enter your PinCode"
                            />
                        </div>

                        <div className='col-lg-12 mt-2'>

                            <input
                                className='btn-primary'
                                type={'submit'}
                                value='Submit'
                                disabled={!formik.isValid}
                            />

                        </div>



                    </div>
                </form>
            </div>
        </>
    )
}
export default Create;