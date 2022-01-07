import React from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import TextFieldComp from "../ReusableComponents/TextFieldComp";
import AddIcon from "@mui/icons-material/Add";
import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";


// import { styled, Box } from "@mui/system";
// import ModalUnstyled from "@mui/base/ModalUnstyled";
// import ModalComp from "../ReusableComponents/ModalComp";

const MainForm = () => {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  const validate = Yup.object({

    Hospital_Info: Yup.object().shape(
     { Name: Yup.string()
      .max(15, "it must be 15 characters or less ")
      .required("required field"),
    ReferenceID: Yup.string()
      .max(15, "it must be 15 characters or less ")
      .required("required field"),
    email: Yup.string().email("Enter Valid Email ").required("required field"),
    Mobile: Yup.string()
      .min(6, "Atleast length should be 6 ")
      .required("required field"),
    Address: Yup.string().min(20, "it must be 20 characters or less ").required("required field"),
}
    ),

    ContactPerson_Info: Yup.object().shape(
      { Name: Yup.string()
       .max(15, "it must be 15 characters or less ")
       .required("required field"),

     Email: Yup.string().email("Enter Valid Email ").required("required field"),
     Mobile: Yup.string()
       .min(6, "Atleast length should be 6 ")
       .required("required field"),
     
 }
     ),
//      blockInfo: Yup.array().of(
// {
//   // blockName: Yup.string()
//   //     .max(15, "it must be 15 characters or less ")
//   //     .required("required field"),
//   //  wardInfo: Yup.array().of(
//   //  { wardName.Yup.string()
//   //   .min(1, "it must be 15 characters or less ")
//   //   .required("required field"),
//   // noOfBed.Yup.number()
//   //   .min(2, "Atleast length should be 2 ")
//   //   .required("required field"),}
//   //  )
// }
//      )
    
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
            Name: "",
            Email: "",
            Mobile: "",
          },
          blockInfo: [
            { blockName: "", wardInfo: [{ wardName: "", noOfBed: "" }] },
          ],
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
         

        //  formData = values;

          console.log(values);
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
                <div className=" form2 d-flex flex-column col-3  justify-content-between p-2" >
                  <h4>
                    <u>contact Person Info</u>
                  </h4>
                  <TextFieldComp
                    label="Contact Person Name *"
                    name="ContactPerson_Info.Name"
                    type="text"
                    variant="standard"
                 
                  />

                  <TextFieldComp
                    label="Email *"
                    name="ContactPerson_Info.Email"
                    type="email"
                    variant="standard"
                  />
                  <TextFieldComp
                    label="Mobile *"
                    name="ContactPerson_Info.Mobile"
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
                        onClick={() =>
                          arrayBlockHelpers.push({
                            blockName: "",
                            wardInfo: [{ wardName: "", noOfBed: "" }],
                          })
                        }
                      >
                        <AddIcon /> AddBlock
                      </button>
                      {formik.values.blockInfo.length > 0
                        ? formik.values.blockInfo.map(
                            (addBlockInfo, blockIndex) => (
                             
                             
                              <div
                                className="col-12 mt-2 mb-2 p-3 form3"
                                key={blockIndex+"a"}
                              >
                                 <button
                                                className="btn-danger btn m-2 float-end"
                                                type="button"
                                                disabled={blockIndex === 0? true:false}
                                                onClick={() =>
                                                  arrayBlockHelpers.remove(
                                                    blockIndex
                                                  )
                                                } 
                                              >
                                               <RemoveIcon/> remove ward
                                              </button>
                                <TextFieldComp
                                  name={`blockInfo[${blockIndex}].blockName`}
                                  label="Block Name"
                                  type="text"
                                  variant="standard"
                                />
                                

                                <FieldArray
                               
                                  name={`blockInfo[${blockIndex}].wardInfo`}
                                  render={(arrayWardHelpers) => (
                                    <div  key={blockIndex+"c"}>
                                     <button
                                        className="btn-outline-success btn m-2"
                                        type="button"
                                        onClick={() =>
                                          arrayWardHelpers.push("")
                                        } 
                                      >
                                       <AddIcon/> add ward
                                      </button>
                                    <div className="d-flex flex-wrap m-2" key={blockIndex+9} >
                                     
                                      {formik.values.blockInfo[blockIndex]
                                        .wardInfo.length > 0 ? (
                                        formik.values.blockInfo[
                                          blockIndex
                                        ].wardInfo.map(
                                          (wardInfo, wardIndex) => (
                                            <div key={wardIndex+21}>
                                              <TextFieldComp
                                                name={`blockInfo[${blockIndex}].wardInfo[${wardIndex}].wardName`}
                                                label="ward name"
                                                variant="standard"
                                                type="text"
                                                className="m-2"
                                              />
                                              <TextFieldComp  
                                                name={`blockInfo[${blockIndex}].wardInfo[${wardIndex}].noOfBed`}
                                                label="No of beds "
                                                variant="standard"
                                                type="text"
                                                className="m-2"
                                              />

                                              <button
                                                className="btn-outline-danger btn m-2"
                                                type="button"
                                                disabled={wardIndex === 0? true:false}
                                                onClick={() =>
                                                  arrayWardHelpers.remove(
                                                    wardIndex
                                                  )
                                                } 
                                              >
                                                <RemoveIcon/> remove ward
                                              </button>
                                            </div>
                                          )
                                        )
                                      ) : ( null )}
                                    </div></div>
                                  )}
                                />
                              </div>
                            )
                          )
                        : () => arrayBlockHelpers.push(" ")}
                    </>
                  )}
                />

                <button
                  disabled={!(formik.isValid && formik.dirty)}
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

