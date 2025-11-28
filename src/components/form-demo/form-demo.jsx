import { useState } from "react"
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"
import * as yup from "yup"

export function FormDemo(){

   
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik 
            initialValues={{UserName:'', Mobile:''}} 
            validationSchema={yup.object({
             UserName: yup.string().required('User Name Required').min(4, "Name too short"), 
             Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile +91 10 digitis'),
            })} 
            onSubmit={(values)=> console.log(values)}
         >
                <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field type="text" name="UserName" /></dd>
                        <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile" /></dd>
                        <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                    </dl>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )
}