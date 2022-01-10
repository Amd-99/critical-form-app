import React from "react";
import { useField, ErrorMessage ,FastField } from "formik";
//import TextField from "@mui/material/TextField";
import { TextField  } from 'formik-mui';

const SimpleTextFieldComp = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  let errVal = meta.touched && meta.error && "is-invalid" ? true : false;

  return (
    console.log(field),
    <>
      
          <div className="mb-2">
          {/* <Field name="checkbox" type="checkbox" component={Checkbox} />   */}
          
          
                  <FastField
             
              label={label}
              {...field}
              {...props}
             
           
           />
         
            <div style={{ color: "red" }}>
              <ErrorMessage name={field.name} />
            </div>

            {/* </FastField> */}
          </div>
        
     
    </>
  );
};

export default SimpleTextFieldComp;
