import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';


function Edit() {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams()
    const navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            age: "",
            number: "",
            address: "",
            pincode: "",
            course: "",
            location: [],

        },
        validate: (values) => {
            let errors = {};
            if (values.name === "") {
                errors.name = "Please enter Name "
            }

            if (values.name.length <= 3) {
                errors.name = "Please enter Name more than 3 letters"
            }
            if (values.gender === "") {
                errors.gender = "Please enter Gender"
            }
            if (values.age === "") {
                errors.age = "Please enter Age"
            }
            if (values.number < 1111111111) {
                errors.number = "Please enter 10 digit number"
            }
            if (values.address === "") {
                errors.address = "Please enter address "
            }
            if (values.pincode === "") {
                errors.pincode = "Please enter pincode "
            }
            if (values.location.length < 1) {
                errors.location = "Please enter location "
            }


            return errors;
        },
        onSubmit: async (values) => {
            setLoading(true);
            await axios.put(`https://62ab049e371180affbdf40f1.mockapi.io/student/${params.id}`, values);
            
            alert("Details Edited Sucessfully...");
            navigate('/view')
             setLoading(false);

        }
    });

    useEffect(() => {
        loadUser()
    }, [])

    let loadUser = async () => {
        setLoading(true);
        try {
            let details = await axios.get(`https://62ab049e371180affbdf40f1.mockapi.io/student/${params.id}`)
            formik.setValues(
                {
                    name: details.data.name,
                    gender: details.data.gender,
                    age: details.data.age,
                    number: details.data.number,
                    address: details.data.address,
                    pincode: details.data.pincode,
                    course: details.data.course,
                    location: details.data.location
                }
            )
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {loading ? (<div className='loader'> </div>) : (
                <div className='container'>

                    <div className="d-sm-flex align-items-center justify-content-center mb-4">
                        <h1 className="h3 mb-0 text-dark-800">Edit Form</h1>
                    </div>
                    <Link to="/view" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">View Details</Link>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <label><b>Name</b> <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                                    type={'text'}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your name"
                                    name="name"
                                />
                                <span style={{ color: "red" }}>{formik.errors.name}</span>

                            </div>

                            <div className='col-lg-12'>

                                <label><b>Gender</b> <span style={{ color: "red" }}>*</span></label>
                                <div class="input-group ">
                                    {/* <label class="input-group-text" for="gender">Options</label> */}
                                    <select onChange={formik.handleChange} class="form-check digi-gender " id="gender">
                                        <option disabled selected className='gend'>Select Gender</option>
                                        <option value="male" id="gender" name="gender" onChange={formik.handleChange}>Male</option>
                                        <option value="female" id="gender" name="gender" onChange={formik.handleChange}>Female</option>
                                        <option value="others" id="gender" name="gender" onChange={formik.handleChange}>Others</option>
                                    </select>
                                </div>
                                <span style={{ color: "red" }}>{formik.errors.gender}</span>
                            </div>



                            <div className='col-lg-12'>
                                <label> <b>Age</b><span style={{ color: "red" }}>*</span></label>
                                <input
                                    className={`form-control ${formik.errors.age ? `input-error` : ``}`}
                                    type={'number'}
                                    value={formik.values.age}
                                    onChange={formik.handleChange}
                                    name="age"
                                    placeholder="Enter your Age"
                                />
                                <span style={{ color: "red" }}>{formik.errors.age}</span>

                            </div>

                            <div className='col-lg-12'>
                                <label> <b>Number</b> <span style={{ color: "red" }}>*</span></label>
                                <input
                                    className={`form-control ${formik.errors.number ? `input-error` : ``}`}
                                    type={'number'}
                                    value={formik.values.number}
                                    onChange={formik.handleChange}
                                    name="number"
                                    placeholder="Enter your Number"
                                />
                                <span style={{ color: "red" }}>{formik.errors.number}</span>
                            </div>

                            <div className='col-lg-12'>
                                <label> <b>Address</b><span style={{ color: "red" }}>*</span></label>
                                <input
                                    className={`form-control ${formik.errors.address ? `input-error` : ``}`}
                                    type={'text'}
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    name="address"
                                    placeholder="Enter your Address"
                                />
                                <span style={{ color: "red" }}>{formik.errors.address}</span>
                            </div>

                            <div className='col-lg-12'>
                                <label> <b>PinCode</b><span style={{ color: "red" }}>*</span></label>
                                <input
                                    className={`form-control ${formik.errors.pincode ? `input-error` : ``}`}
                                    type={'number'}
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange}
                                    name="pincode"
                                    placeholder="Enter your PinCode"
                                />
                                <span style={{ color: "red" }}>{formik.errors.pincode}</span>
                            </div>

                            <div className='col-lg-12' >
                                <label className={`form-check ${formik.errors.location ? `input-error` : ``}`}> <b>Course</b><span style={{ color: "red" }}>*</span></label>
                                <input type="radio" value="react" id="course"
                                    onChange={formik.handleChange} name="course" />
                                <label for="react">React <b></b></label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                                <input type="radio" value="angular" id="course"
                                    onChange={formik.handleChange} name="course" />
                                <label for="angular">Angular <b></b></label>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                                <input type="radio" value="node" id="course"
                                    onChange={formik.handleChange} name="course" />
                                <label for="node">Node <b></b></label>   &nbsp;
                            </div>

                            <div className='col-lg-12' > <br />

                                <label className={`form-check ${formik.errors.location ? `input-error` : ``}`}> <b>Select Location</b> <span style={{ color: "red" }}>*</span></label>
                                <input type="checkbox" value="Chennai" id="location"
                                    onChange={formik.handleChange} name="location" />
                                <label for="Chennai"> Chennai</label>   &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;


                                <input type="checkbox" value="Banglore" id="location"
                                    onChange={formik.handleChange} name="location" />
                                <label for="Banglore"> Banglore</label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                                <input type="checkbox" value="Hyderabad" id="location"
                                    onChange={formik.handleChange} name="location" />
                                <label for="Hyderabad"> Hyderabad</label>   &nbsp; <br />

                                <span style={{ color: "red" }}>{formik.errors.location}</span>


                            </div>


                            <div className='col-lg-12 mt-2'>

                                <input
                                    className='btn-primary'
                                    type={'submit'}
                                    value='Edit'
                                    disabled={!formik.isValid}
                                />

                            </div>



                        </div>
                    </form>
                </div>
            )}


        </>
    )

}
export default Edit;
