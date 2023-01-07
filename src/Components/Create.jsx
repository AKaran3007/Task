
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css'
import { useState, React } from 'react';
import TextField from '@mui/material/TextField';


function Create() {
    const [course, setCourse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCourse(e.target.value);

    }



    const [selected, setSelected] = useState("")
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            age: "",
            number: "",
            address: "",
            pincode: "",
            course: "",
            location: "",

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
            if (values.course === "") {
                errors.course = "Please enter course "

            }
            if (values.location.length < 1) {
                errors.location = "Please enter location "
            }

            return errors;
        },
        onSubmit: async (values) => {
            setLoading(true);
            let students = await axios.post("https://62ab049e371180affbdf40f1.mockapi.io/student", values);
            
            alert("Details Created Sucessfully...");
            navigate('/view');
            setLoading(false);

        }
    })
    return (
        <>
        {loading ? (<div className='loader'> </div>) : (
            <div className='container'>
                <div className="d-sm-flex align-items-center justify-content-center mb-4">
                    <h1 className="h3 mb-0 text-dark-800">Create Details Form</h1>

                </div>
                <Link to="/view" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">View Details</Link>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <label> <b>Name</b><span style={{ color: "red" }}>*</span></label>
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
                            <label><b>Age</b> <span style={{ color: "red" }}>*</span></label>
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
                            <label> <b>Address </b> <span style={{ color: "red" }}>*</span></label>
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
                            <label> <b>Pincode</b> <span style={{ color: "red" }}>*</span></label>
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

                            <label className={`form-check ${formik.errors.course ? `input-error` : ``}`}> <b>Course</b> <span style={{ color: "red" }}>*</span></label>
                            <input type="radio" value="react" id="course"
                                onChange={formik.handleChange} name="course" />
                            <label for="react"> React</label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                            <input type="radio" value="angular" id="course"
                                onChange={formik.handleChange} name="course" />
                            <label for="angular"> Angular</label>    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                            <input type="radio" value="node" id="course"
                                onChange={formik.handleChange} name="course" />
                            <label for="node"> Node</label>   &nbsp; <br />

                            <span style={{ color: "red" }}>{formik.errors.course}</span>


                        </div>

                        {/* <div className='col-lg-6' required="true">
                        <label for="location"  className={`form-check ${formik.errors.location ? `input-error` : ``}`}> Select Location <span class="span" ></span></label> <br/>
                        <input type="checkbox"  name="location" onChange={formik.handleChange} value="chennai" id="location" />Chennai  &nbsp;
                        <input type="checkbox" name="location" onChange={formik.handleChange} value="banglore" id="location" />Banglore  &nbsp;
                        <input type="checkbox" name="location" onChange={formik.handleChange} value="hosur" id="location" />Hosur  &nbsp;
                        <input type="checkbox" name="location" onChange={formik.handleChange} value="madurai" id="location" />Madurai  &nbsp;
                        <input type="checkbox" name="location" onChange={formik.handleChange} value="coimbatore" id="location" />Coimbatore  &nbsp;
                        </div> */}

                        <div className='col-lg-12' > <br />

                            <label className={`form-check ${formik.errors.location ? `input-error` : ``}`}> <b>Location</b> <span style={{ color: "red" }}>*</span></label>
                            <input type="checkbox" value="Chennai" id="location"
                                onChange={formik.handleChange} name="location" />
                            <label for="Chennai"> Chennai</label>  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;

                            <input type="checkbox" value="Banglore" id="location"
                                onChange={formik.handleChange} name="location" />
                            <label for="Banglore"> Banglore</label>      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                            <input type="checkbox" value="Hyderabad" id="location"
                                onChange={formik.handleChange} name="location" />
                            <label for="Hyderabad"> Hyderabad</label>   &nbsp; <br />

                            <span style={{ color: "red" }}>{formik.errors.location}</span>


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
         )}
            
        </>
    )
}
export default Create;