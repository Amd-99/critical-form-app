import React from 'react'
import { Formik, Form, FieldArray, Field } from "formik";

import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import TextFieldComp from '../../ReusableComponents/TextFieldComp';

const Form3 = (props) => {
    const validate = Yup.object({
        blockName: Yup.string().max(15, "it must be 15 characters or less ")
        .required("required field"),
        wardName: Yup.string().max(15, "it must be 15 characters or less ")
        .required("required field"),
        noOfBed: Yup.string().min(1, "Atleast length should be 6 ")
        .required("required field"),
      
      });
    return (
        <div className='col-12 mt-2 mb-2 p-3 form3'>
          <div>
            {props.remProps}
          </div>
             <Formik
      initialValues={{
        blockName: "",
        blockInfo: [""],
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
        
            
              <div>
                  <Form>
                <div className="p-2 w-100">
                <TextFieldComp
                  label="Block Name *"
                  name="blockName"
                  type="text"
                  variant="standard"
                />
            
              
              <FieldArray
                    name="blockInfo"
                    render={(arrayHelpers) => (
                      <div
                        className="d-flex  flex-wrap ms-2 mt-3 justify-content-start align-content-center"
                        style={{ background: "#" }}
                      >
                         
                        {formik.values.blockInfo &&
                         formik.values.blockInfo.length > 0 ? (
                          formik.values.blockInfo.map((blockInfo, index) => (
                            <div key={index} className="m-3 d-flex ">
                            
                            <TextFieldComp
                  label="Ward Name *"
                  name={`blockInfo.${index}.wardName`}
                  type="text"
                  variant="standard"
                  className="m-1"
                />
             
                <TextFieldComp
                  label="No. of Bed *"
                  name= {`blockInfo.${index}.noOfBed`}
                  type="number"
                  variant="standard"
                  className="m-1"
                />

                              <button
                                className="btn-danger btn"
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                disabled={index === 0 ? true : false}
                              >
                                <RemoveIcon />
                              </button>
                              <button
                                className="btn-success btn ms-2"
                                type="button"
                                onClick={() => arrayHelpers.insert(index+1, "")} // insert an empty string at a position
                              >
                                <AddIcon />
                              </button>
                            </div>
                          ))
                         )
                         : ( 
                          <button
                           type="button"
                          className="btn-secondary btn ms-2"
                             onClick={() => arrayHelpers.push("")}
                           >
                             {/* show this when user has removed all friends from the list */}
                             Add a block Info
                           </button>
                         )
                        }
                      </div>
                    )}
                  />
              
                 </div>
              </Form>
              </div>
           
        
        );
      }}
    </Formik>
        </div>
    )
}

export default Form3
