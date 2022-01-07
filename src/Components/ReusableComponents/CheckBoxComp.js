import React from "react";
import { useField } from "formik";
import Checkbox from '@mui/material/Checkbox';  

const CheckBoxComp = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  
  return (
    <>
      <div className="mb-2 ">
        
        <Checkbox   {...field} {...props}    />
        <label className="opacity-75 h6" >{label}</label>
      </div>
      
    </>
  );
};

export default CheckBoxComp;


