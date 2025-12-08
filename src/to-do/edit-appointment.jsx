import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";


export function EditAppointment(){


    const [cookies, setCookie, removeCookie] = useCookies(['userid', 'username']);

    const [appointment, setAppointment] = useState({id:null, title:null, description:null, date:Date, user_id:null});
    const params = useParams();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            title : appointment.title,
            description: appointment.description,
            date : appointment.date,
            user_id: cookies['userid']
        },
        onSubmit: (appointment)=>{
            axios.put(`http://localhost:3000/appointments/${params.id}`,appointment)
            .then(()=>console.log('Updated..'));
            alert('Appointment Updated..');
            navigate('/dashboard');
        },
        enableReinitialize: true
    })

    function LoadAppointment(){
        axios.get(`http://localhost:3000/appointments/${params.id}`)
        .then(response=>{
            setAppointment(response.data);
        })
    }

    useEffect(()=>{
         LoadAppointment();
    },[params.id])

    return(
        <div className="container-fluid">
            <h4>Edit Appointment</h4>
            <form onSubmit={formik.handleSubmit} className="w-50">
                <dl>
                <dt>Title</dt>
                <dd><input type="text" value={formik.values.title} onChange={formik.handleChange} className="form-control" name="title" /></dd>
                <dt>Description</dt>
                <dd>
                    <textarea value={formik.values.description} onChange={formik.handleChange} name="description" className="form-control" rows="4" cols="40"></textarea>
                </dd>
                <dt>Date</dt>
                <dd><input type="date" value={formik.values.date} onChange={formik.handleChange} className="form-control" name="date" /></dd>
                </dl>
                <button type="submit" className="btn btn-success">Save Appointment</button>
            </form>
        </div>
    )
}