import React from 'react'
import {Formik , FieldArray , Field} from 'formik';

const Form5 = () => {
    return (
       <Formik
       initialValues={{options:[{name:''}]}}
       onSubmit={(values , { resetForm })=>{
        console.log(values);
         resetForm();
     }}      >
         {(formikProps)=>(
             <form onSubmit={formikProps.handleSubmit}>
                 <FieldArray 
                 name="options">
                     {( fieldArrayProps)=>(
                         <>
                         <button type='button' onClick={()=>fieldArrayProps.push({name:""})}>
                             add input
                         </button>
                         {formikProps.values.options.map((option,index)=>{
                             <Field name={`options.${index}.name`}> 
                             {
                                 (fieldProps)=> (
                                    <input placeholder='add name' {...fieldProps.field} />
                                 )
                             }

                             </Field>
                         })}
                         </>

                     )}

                 </FieldArray>
             </form>
         )}


       </Formik>
    )
}

export default Form5
