import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";


export function UserDashboard(){


    const [appointments, setAppointments] = useState([{title:null, description:null, date:Date}]);

    const [cookies, setCookie, removeCookie] = useCookies(['userid', 'username']);
    const navigate = useNavigate();

    function LoadAppointments(){
         axios.get(`http://localhost:3000/appointments`)
         .then(response=>{
             let appointments =  response.data.filter(appointment=> appointment.user_id===cookies['userid']);
             setAppointments(appointments);
             
         })
    }

    useEffect(()=>{
        if(cookies['userid']===undefined){
             navigate('/login');
        } else {
            LoadAppointments();
            
        }
    },[cookies['userid']])

    function handleSignout(){
        removeCookie('userid');
        removeCookie('username');
        navigate('/login');
    }

    return(
        <div className="container-fluid">
            <div role="header" className="d-flex justify-content-between p-2">
                <div className="fw-bold fs-4">Dashboard <button className="btn btn-dark bi bi-plus"> Add Appointment </button> </div>
                <div>
                    <span className="bi bi-person-circle"> {cookies['username']} <button onClick={handleSignout} className="btn btn-link">Signout</button> </span>
                </div>
            </div>
            <div role="section" className="mt-3">
                <div className="d-flex flex-column flex-wrap">
                    {
                        appointments.map(appointment=>
                            <div key={appointment.title} className="alert w-25 alert-dismissible alert-light shadow shadow-md">
                                <h4>{appointment.title}</h4>
                                <p>{appointment.description}</p>
                                <div className="mt-3">
                                    <button className="btn btn-warning bi bi-pen-fill"></button>
                                    <button className="btn mx-2 btn-danger bi bi-trash-fill"></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}