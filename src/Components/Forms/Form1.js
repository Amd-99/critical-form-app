import React from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import TextFieldComp from "../ReusableComponents/TextFieldComp";
import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Form1 = () => {
  const validate = Yup.object({
    Name: Yup.string().max(15, "it must be 15 characters or less ")
    .required("required field"),
    ReferenceID: Yup.string().max(15, "it must be 15 characters or less ")
    .required("required field"),
    email: Yup.string().email("Enter Valid Email ")
    .required("required field"),
    Mobile: Yup.string().min(6, "Atleast length should be 6 ")
    .required("required field"),
    Address: Yup.string().min(20, "it must be 20 characters or less ")
   
  });

  return (
    <div className="form1 col-6 ">
    <Formik
      initialValues={{
        Name: "",
        ReferenceID: "",
        email: "",
        Mobile: "",
        Address: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
        
            
              <Form>
                <div className=" d-flex flex-wrap justify-content-between p-2 w-100">
                <TextFieldComp
                  label="Name *"
                  name="Name"
                  type="text"
                  variant="standard"
                />
                <TextFieldComp
                  label="Reference ID *"
                  name="ReferenceID"
                  type="text"
                  variant="standard"
                />
                <TextFieldComp
                  label="Email *"
                  name="email"
                  type="email"
                  variant="standard"
                />
                <TextFieldComp
                  label="Mobile *"
                  name="Mobile"
                  type="number"
                  variant="standard"
                />
              
              <div className="w-100">
              <TextFieldComp
                className="w-100"
                  label="Address"
                  name="Address"
                  type="text"
                  variant="standard"
                />
              </div>
              
                 </div>
              </Form>
           
        
        );
      }}
    </Formik>
    </div>
  );
};

export default Form1;
