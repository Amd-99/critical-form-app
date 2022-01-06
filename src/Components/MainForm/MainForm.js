import React, { useState } from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import TextFieldComp from "../ReusableComponents/TextFieldComp";
import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Form3 from "../Forms/FieldArrayForms/Form3";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import ModalComp from "../ReusableComponents/ModalComp";

const MainForm = () => {
    const [open, setOpen] = useState(false);
   
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let formData = {"values" : "1"};
  const validate = Yup.object({
    Name: Yup.string()
      .max(15, "it must be 15 characters or less ")
      .required("required field"),
    ReferenceID: Yup.string()
      .max(15, "it must be 15 characters or less ")
      .required("required field"),
    email: Yup.string().email("Enter Valid Email ").required("required field"),
    Mobile: Yup.string()
      .min(6, "Atleast length should be 6 ")
      .required("required field"),
    Address: Yup.string().min(20, "it must be 20 characters or less "),
    blockName: Yup.string()
      .max(15, "it must be 15 characters or less ")
      .required("required field"),
    wardName: Yup.string()
      .min(1, "it must be 15 characters or less ")
      .required("required field"),
    noOfBed: Yup.number()
      .min(2, "Atleast length should be 2 ")
      .required("required field"),
  });

  return (
    <div className=" col-12 ">
      <Formik
        initialValues={{
          Hospital_Info: {
            Name: "",
            ReferenceID: "",
            email: "",
            Mobile: "",
            Address: "",
          },

          ContactPerson_Info: {
            ContactPersonName: "",
            ContactPersonEmail: "",
            ContactPersonMobile: "",
          },
          blockInfo: [{ blockName: "", wardInfo: [] }],
        }}
        // validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
         
          handleOpen()
        
          formData= values

        console.log(values);;
        }}
      >
        {(formik) => {
          return (
            <Form>
              <div className="row  justify-content-between w-100">
                <h4>
                  <u>Hospital Information</u>
                </h4>
                <div className=" form1 d-flex flex-wrap justify-content-between p-2 col-6">
                  <TextFieldComp
                    label="Name *"
                    name="Hospital_Info.Name"
                    type="text"
                    variant="standard"
                  />
                  <TextFieldComp
                    label="Reference ID *"
                    name="Hospital_Info.ReferenceID"
                    type="text"
                    variant="standard"
                  />
                  <TextFieldComp
                    label="Email *"
                    name="Hospital_Info.email"
                    type="email"
                    variant="standard"
                  />
                  <TextFieldComp
                    label="Mobile *"
                    name="Hospital_Info.Mobile"
                    type="number"
                    variant="standard"
                  />

                  <div className="w-100">
                    <TextFieldComp
                      className="w-100"
                      label="Address"
                      name="Hospital_Info.Address"
                      type="text"
                      variant="standard"
                    />
                  </div>
                </div>
                <div className=" form2 d-flex flex-column col-3  justify-content-between p-2">
                  <h4>
                    <u>contact Person Info</u>
                  </h4>
                  <TextFieldComp
                    label="Contact Person Name *"
                    name="ContactPerson_Info.ContactPersonName"
                    type="text"
                    variant="standard"
                  />

                  <TextFieldComp
                    label="Email *"
                    name="ContactPerson_Info.ContactPersonEmail"
                    type="email"
                    variant="standard"
                  />
                  <TextFieldComp
                    label="Mobile *"
                    name="ContactPerson_Info.ContactPersonMobile"
                    type="number"
                    variant="standard"
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <FieldArray
                  name="blockInfo"
                  render={(arrayBlockHelpers) => (
                    <>
                      <button
                        className="btn-warning btn ms-2 float-end w-auto align-self-center"
                        type="button"
                        onClick={() => arrayBlockHelpers.push("")} // insert an empty string at a position
                      >
                        <AddIcon /> AddBlock
                      </button>
                      {formik.values.blockInfo.length > 0
                        ? formik.values.blockInfo.map(
                            (addBlockInfo, blockIndex) =>  <div className='col-12 mt-2 mb-2 p-3 form3' key={blockIndex}>



{/* ---------------------------------------- */}


 <TextFieldComp
                  label="Block Name *"
                  name="blockName"
                  type="text"
                  variant="standard"

                /> 
            
              
               <FieldArray
                    name="wardInfo"
                    render={(arrayWardHelpers) => (
                      <div
                        className="d-flex flex-wrap ms-2 mt-3 justify-content-start align-content-center"
                        style={{ background: "#" }}
                      >
                         
                        {formik.values.wardInfo &&
                         formik.values.wardInfo.length > 0 ? (
                          formik.values.wardInfo.map((wardInfo, wardIndex) => (
                            <div key={wardIndex} className="m-3">
                            
                            <TextFieldComp
                  label="Ward Name *"
                  name={`blockInfo.${blockIndex}.wardName${wardIndex}`}
                  type="text"
                  variant="standard"
                  id={wardIndex}                />
             
                <TextFieldComp
                 id={wardIndex}  
                  label="No. of Bed *"
                  name= {`blockInfo.${blockIndex}.noOfBed.${wardIndex}`}
                  type="number"
                  variant="standard"
                />

                              <button
                                className="btn-danger btn"
                                type="button"
                                onClick={() => arrayWardHelpers.remove(wardIndex)} // remove a friend from the list
                                disabled={wardIndex === 0 ? true : false}
                              >
                                <RemoveIcon />
                              </button>
                              <button
                                className="btn-success btn ms-2"
                                type="button"
                                onClick={() => arrayWardHelpers.insert(wardIndex, "")} // insert an empty string at a position
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
                             onClick={() => arrayWardHelpers.push("")}
                           >
                             {/* show this when user has removed all friends from the list */}
                              Add a block Info
                           </button>
                         )
                        }
                      </div>
                    )}
                  />  


{/* --------------------------------------------- */}




                             {/* <Form3 remProps={<>  <button
                            className="btn-outline-danger bg-danger text-black btn float-end"
                            type="button"
                            onClick={() => arrayBlockHelpers.remove(blockIndex)} // remove a friend from the list
                            
                          >
                            <RemoveIcon /> Remove Block
                          </button>
                          </>} /> */}
              
                          
                            </div>
                          )
                        : () => arrayBlockHelpers.push(" ")}
                    </>
                  )}
                /> 

                <button
                  //disabled={!(formik.isValid && formik.dirty)}
                  className="btn btn-dark mt-3 float-end"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>

     {/* <ModalComp dataValues={formData.values} openModal={open} handleCloseModal={handleClose}/> */}
    </div>
  );
};

export default MainForm;

{
  /* <div className="p-2 w-100 form3">
<TextFieldComp
  label="Block Name *"
  name="blockName"
  type="text"
  variant="standard"
/>

<FieldArray
  name="blockInfo"
  render={(arrayHelpers) => (
    <>
      <button
        className="btn-success btn ms-2"
        type="button"
        onClick={() => arrayHelpers.push("")} // insert an empty string at a position
      >
        <AddIcon />
      </button>
      <div
        className="d-flex flex-wrap ms-2 mt-3 justify-content-start align-content-center"
        style={{ background: "#" }}
      >
        {formik.values.blockInfo &&
        formik.values.blockInfo.length > 0 ? (
          formik.values.blockInfo.map((blockInfo, index) => (
            <div key={index} className="m-3">
              <TextFieldComp
                label="Ward Name *"
                name={`blockInfo.${index}.wardName`}
                type="text"
                variant="standard"
              />

              <TextFieldComp
                label="No. of Bed *"
                name={`blockInfo.${index}.noOfBed`}
                type="number"
                variant="standard"
              />

              <button
                className="btn-danger btn"
                type="button"
                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                disabled={index === 0 ? true : false}
              >
                <RemoveIcon />
              </button>
            </div>
          ))
        ) : (
          <button
            type="button"
            className="btn-secondary btn ms-2"
            onClick={() => arrayHelpers.push("")}
          >
            {/* show this when user has removed all friends from the list */
  //
  /* <TextFieldComp
label="Block Name *"
name={`blockInfo.${blockIndex}.wardName`}
type="text"
variant="standard"
/>

<FieldArray
name={`blockInfo.${blockIndex}.wardInfo`}
render={(arrayWardHelpers) => (
  <>
    <button
      className="btn-success btn ms-2"
      type="button"
      onClick={() =>
        arrayWardHelpers.push("")
      } // insert an empty string at a position
    >
      <AddIcon />
    </button>


    <div
      className="d-flex flex-wrap ms-2 mt-3 justify-content-start align-content-center"
      style={{ background: "#" }}
    >
      {formik.values.blockInfo &&
      formik.values.blockInfo.length === 0
        ? arrayWardHelpers.push("")
        : formik.values.blockInfo.map(
            (wardInfo, wardindex) => (
              <div
                key={index}
                className="m-3"
              >
                <TextFieldComp
                  label="Ward Name *"
                  name={`wardInfo.${index}.wardName`}
                  type="text"
                  variant="standard"
                />

                <TextFieldComp
                  label="No. of Bed *"
                  name={`wardInfo.${index}.noOfBed`}
                  type="number"
                  variant="standard"
                />

                <button
                  className="btn-danger btn"
                  type="button"
                  onClick={() =>
                    arrayWardHelpers.remove(
                      index
                    )
                  } // remove a friend from the list
                  disabled={
                    index === 0 ? true : false
                  }
                >
                  <RemoveIcon />
                </button>
              </div>
            )
          )}
    </div>
  </>
)}
/> */
}
