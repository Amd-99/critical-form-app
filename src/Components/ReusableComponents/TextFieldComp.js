import React from "react";
import { useField, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";

const TextFieldComp = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  let errVal = meta.touched && meta.error && "is-invalid" ? true : false;
  return (
    <>
      <div className="mb-2">
        <TextField error={errVal} label={label} {...field} {...props}   />
        <div style={{ color: "red" }}>
          <ErrorMessage name={field.name} />
        </div>
      </div>
      
    </>
  );
};

export default TextFieldComp;

