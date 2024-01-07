import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';


const FormData = () => {
  let initialValues = {
    fName: '',
    lName: '',
    age: '',
    dob: '',
    phoneNumber: '',
    gender: '',         
  };


  let onSubmit = (info) => {
    let data = [
      info
    ]
    console.log("info here", data)
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
    </div>
  );
};

export default FormData;

