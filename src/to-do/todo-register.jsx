import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"


export function ToDoRegister(props){

    let navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [msgColor, setMsgColor] = useState('');

    const formik = useFormik({
        initialValues: {
            user_id: '',
            user_name:'',
            password:'',
            email:'',
            mobile:''
        },
        onSubmit: (user)=>{
            axios.post(`http://localhost:3000/users`, user)
            .then(()=>{
                 console.log('data added');
            })
            alert('Registered Successfully..');
            navigate('/login');
        }
    })

    function handleUserIdKeyUp(e){
         axios.get(`http://localhost:3000/users`)
         .then(response=>{
            var user = response.data.find(item=> item.user_id===e.target.value);
            if(user){
                setMsg('User ID Taken - Try Another');
                setMsgColor('text-danger');
            } else {
                setMsg('User ID Available');
                setMsgColor('text-success');
            }
         })
    }

    return(
        <div className="container-fluid">
            <div className={props.size}>
               <h3>Register User</h3>
              <form onSubmit={formik.handleSubmit}>
                <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={handleUserIdKeyUp} onChange={formik.handleChange} name="user_id" className="form-control" /></dd>
                <dd className={msgColor}>{msg}</dd>
                <dt>User Name</dt>
                <dd><input type="text" onChange={formik.handleChange} name="user_name" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={formik.handleChange} name="password" className="form-control" /></dd>
                <dt>Email</dt>
                <dd><input type="text" onChange={formik.handleChange} name="email" className="form-control" /></dd>
                <dt>Mobile</dt>
                <dd><input type="text" onChange={formik.handleChange} name="mobile" className="form-control" /></dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
              <div className="mt-3">
                    <Link to="/login"> Have account? </Link>
              </div>
           </div>
        </div>
    )
}