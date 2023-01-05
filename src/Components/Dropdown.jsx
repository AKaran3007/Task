import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const options = ['Male', 'Female'];

export default function Dropdown() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        gender: "",
      },
      onSubmit: async (values) => {
        let students = await axios.post("https://62ab049e371180affbdf40f1.mockapi.io/student", values);
        alert("Details Created Sucessfully...");
        navigate('/view')

    }
    })

  return (
    <div>
      
      <br />
      <Autocomplete
        value={formik.values.gender}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Gender" />}
      />
      
    </div>
  );
}