import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextFieldComp from "./Reusable Components/TextFieldComp";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

const Form4 = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);
  console.log(inputFields);

  const handleAddFieldFunction = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };
  const handleRemoveFieldFunction = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div>
      <h2>Add Member</h2>
      <Formik
        initialValues={inputFields}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <Form>
       
      
        </Form>
      </Formik>
    </div>
  );
};

export default Form4;
// {inputFields.map((InputFields, index) => (
//     <div key={index} className="d-flex justify-content-between">
//       <TextField
//         className="mx-2"
//         label="First Name"
//         defaultValue={InputFields.firstName}
//         variant="filled"
//         name="firstName"
//         type="text"
//       />
//       <TextField
//         className="mx-2"
//         label="Last Name"
//         defaultValue={InputFields.lastName}
//         variant="filled"
//         name="lastName"
//         type="text"
//       />

//       <button
//         className="btn btn-success"
//         type="button"
//         onClick={handleAddFieldFunction}
//       >
//         <AddIcon />
//       </button>
//       <button
//         className="btn btn-danger  ms-1"
//         type="button"
//         onClick={() => {
//           handleRemoveFieldFunction(index);
//         }}
//       >
//         <RemoveIcon />
//       </button>
//     </div>
//   ))}
//   <button className="btn btn-primary mt-2 mx-2" type="submit">
//     Add User
//   </button>