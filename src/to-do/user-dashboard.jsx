import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, Outlet, useNavigate } from "react-router-dom";


export function UserDashboard(){


    const [appointments, setAppointments] = useState([{id:null, title:null, description:null, date:Date, user_id:null}]);

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
    },[cookies['userid'], appointments])

    function handleSignout(){
        removeCookie('userid');
        removeCookie('username');
        navigate('/login');
    }

    function handleDeleteClick(id){
        let choice = confirm('Are you sure\nWant to Delete?');
        if(choice===true){
            axios.delete(`http://localhost:3000/appointments/${id}`)
            .then(()=>{console.log('deleted..')});
            navigate('/dashboard');
        }
    }

    return(
        <div className="container-fluid">
            <div role="header" className="d-flex justify-content-between p-2">
                <div className="fw-bold fs-4">Dashboard <Link to="add-appointment" className="btn btn-dark bi bi-plus"> Add Appointment </Link> </div>
                <div>
                    <span className="bi bi-person-circle"> {cookies['username']} <button onClick={handleSignout} className="btn btn-link">Signout</button> </span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div role="section" className="mt-3">
                    <div className="d-flex w-100 flex-row overflow-auto flex-wrap">
                        {
                            appointments.map(appointment=>
                                <div key={appointment.title} className="alert m-2 w-50 alert-dismissible alert-light shadow shadow-md">
                                    <h4>{appointment.title}</h4>
                                    <p>{appointment.description}</p>
                                    <div className="my-2">
                                        {moment(appointment.date).format('dddd DD, MMMM yyyy')}
                                    </div>
                                    <div className="mt-3">
                                        <Link to={`edit-appointment/${appointment.id}`} className="btn btn-warning bi bi-pen-fill"></Link>
                                        <button onClick={()=>{handleDeleteClick(appointment.id)}} className="btn mx-2 btn-danger bi bi-trash-fill"></button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                  </div>
                </div>
                <div className="col">
                        <Outlet />
                </div>
            </div>
        </div>
    )
}