import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function ToDoLogin(props){

    const [cookies, setCookie, removeCookie] = useCookies(['userid', 'username']);

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            user_id : '',
            password: ''
        },
        onSubmit:(user)=>{
            axios.get(`http://localhost:3000/users`)
            .then(response=>{
                var userObj = response.data.find(item=> item.user_id===user.user_id);
                if(userObj)
                {
                    if(userObj.password===user.password){
                        setCookie('userid', userObj.user_id);
                        setCookie('username', userObj.user_name);
                        navigate('/dashboard');
                    } else {
                        alert('Invalid Password');
                    }
                }
                else {
                    alert('Invalid User Id');
                }
            })
        }
    })

    return(
        <div className="container-fluid">
           <div className={props.size}>
            <form onSubmit={formik.handleSubmit}>
                 <h4>User Login</h4>
             <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={formik.handleChange} name="user_id" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={formik.handleChange} name="password" className="form-control" /></dd>
            </dl>
            <button type="submit" className="btn btn-warning w-100">Login</button>
            </form>
            <div className="mt-3">
                <Link to="/register"> New User ? </Link>
            </div>
           </div>
        </div>
    )
}