import { useState } from 'react';
import './Style.css'
import { Navigate, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { useFormik } from 'formik';

function Dropdown({ selected, setSelected }) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            gender: "",
        },
        onSubmit: async (values) => {
            let students = await axios.post("https://62ab049e371180affbdf40f1.mockapi.io/student", values);
            alert("Details Created...");
            navigate('/view')
            
        }
    })
    const [isActive, setIsActive] = useState(false);
    const options = ["Male", "Female", "Others"];
    return (
        <div className="dropdown"  name="gender" onChange={formik.handleChange} value={formik.values.gender} >
            <div className="dropdown-btn" onClick={(e) =>
                setIsActive(!isActive)}>{selected}


                <span className='.fas fa-caret-down'></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div onClick={e => {
                            setSelected(option)
                            setIsActive(false)
                        }


                        } className="dropdown-item">
                            {option}
                        </div>
                    ))}


                </div>
            )
            }
        </div >
    );
}
export default Dropdown;