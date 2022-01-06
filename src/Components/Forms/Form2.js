import React from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import TextFieldComp from "../ReusableComponents/TextFieldComp";
import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Form2 = () => {
  const validate = Yup.object({
    ContactPersonName: Yup.string().max(15, "it must be 15 characters or less ")
    .required("required field"),
    email: Yup.string().email("Enter Valid Email ")
    .required("required field"),
    Mobile: Yup.number().min(6, "Atleast length should be 6 ")
    .required("required field"),
  });


  return (

    <div className="form2 col-3 ">
    <Formik
      initialValues={{
        ContactPersonName: "",
        email: "",
        Mobile: "",
        
       
      }}
      validationSchema={validate}
      
      onSubmit={(values, { resetForm }) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
        
            
              <Form>
                <div className="d-flex flex-column w-75  justify-content-between p-2">
                <TextFieldComp
                  label="Contact Person Name *"
                  name="ContactPersonName"
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
              
        
              
                 </div>
              </Form>
           
        
        );
      }}
    </Formik>
    </div>
  );
};

export default Form2;
