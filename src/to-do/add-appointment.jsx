import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function AddAppointment(){
    const [cookies, setCookie, removeCookie] = useCookies(['userid', 'username']);
    const navigate = useNavigate();

    const formik= useFormik({
        initialValues: {
            title: '',
            description:'',
            date: new Date(), 
            user_id:cookies['userid']
        },
        onSubmit: (appointment)=>{
             axios.post('http://localhost:3000/appointments',appointment)
             .then(()=>{
                console.log('Appointment Added');
             })
             alert('Appointment Added Successfully..');
             navigate('/dashboard');
        }
    })

    return(
        <div className="container-fluid">
            <h4>Add New Appointment</h4>
            <form onSubmit={formik.handleSubmit} className="w-50">
                <dl>
                <dt>Title</dt>
                <dd><input type="text" onChange={formik.handleChange} className="form-control" name="title" /></dd>
                <dt>Description</dt>
                <dd>
                    <textarea onChange={formik.handleChange} name="description" className="form-control" rows="4" cols="40"></textarea>
                </dd>
                <dt>Date</dt>
                <dd><input type="date" onChange={formik.handleChange} className="form-control" name="date" /></dd>
                </dl>
                <button type="submit" className="btn btn-primary">Add Appointment</button>
            </form>
        </div>
    )
}