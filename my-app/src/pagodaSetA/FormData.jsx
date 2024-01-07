import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';


  const FormData = () => {
    const [formDataArray, setFormDataArray] = useState([]);
  
    const initialValues = {
      fName: '',
      lName: '',
      age: '',
      dob: '',
      phoneNumber: '',
      gender: '',
    };
  
    const onSubmit = (info, { resetForm }) => {
      setFormDataArray([...formDataArray, info]);
      resetForm();
    };

  let validationSchema = yup.object({
    fName: yup.string().required('Full Name is required. '),
    lName: yup.string().required('Full Name is required. '),
    age: yup.string().required('Age is required. '),
    dob: yup.string().required('DOB is required. '),
    phoneNumber: yup.string().required('Phone number is required. '),
    gender: yup.string().required('Gender is required. '),
  });

  let genderOptions = [
    {
      label: 'Select Gender',
      value: '',
      disabled: true,
    },
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];

  return (
    <div>
      <h2>Form data</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <label htmlFor="fName">First Name:</label>
                <input
                  type="text"
                  id="fName"
                  {...formik.getFieldProps('fName')} required/>
              </div>

              <div>
                <label htmlFor="lName">Last Name:</label>
                <input
                  type="text"
                  id="lName"
                  {...formik.getFieldProps('lName')}
                  required
                />
              </div>

              <div>
                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  {...formik.getFieldProps('age')}
                  required
                />
              </div>

              <div>
                <label htmlFor="dob">DOB:</label>
                <input
                  type="date"
                  id="dob"
                  {...formik.getFieldProps('dob')}
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="string"
                  id="phoneNumber"
                  {...formik.getFieldProps('phoneNumber')}
                  required
                />
              </div>


              <div>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" {...formik.getFieldProps('gender')} required>
                  {genderOptions.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                      {option.label}
                    </option>

                  ))}
                </select>
              </div>

              <button type="submit">
               Submit Form
              </button>
            </Form>
          );
        }}
      </Formik>
<br></br>
<br></br>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>PhoneNumber</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {formDataArray.map((data, index) => (
            <tr key={index}>
              <td>{data.fName}</td>
              <td>{data.lName}</td>
              <td>{data.age}</td>
              <td>{data.dob}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table border= "1">
      <thead>
          <tr>
            <th>Search</th>
            <th>Sort</th>
            <th>Filter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};


export default FormData;

