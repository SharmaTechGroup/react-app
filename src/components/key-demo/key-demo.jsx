import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){

    const [users, setUsers] = useState([{user_name:null}]);
    const [msg, setMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [progressClass, setProgressClass] = useState('');
    const [progressWidth, setProgressWidth] = useState('');
    const [ifsc, setIfsc] = useState('');

    useEffect(()=>{
        axios.get('users.json')
        .then(response=> {
            setUsers(response.data);
        })
    },[])

    function VerifyUserName(e){ 
         for(var user of users){
              if(user.user_name===e.target.value){
                  setMsg('User Name Taken - Try Another');
                  setErrorClass('text-danger');
                  break;
              } else {
                  setMsg('User Name Available');
                  setErrorClass('text-success');
              }
         }
    }

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
             setPwdMsg('Strong Password');
             setProgressClass('progress-bar bg-success progress-bar-striped progress-bar-animated');
             setProgressWidth('100%');
        } else {
             if(e.target.value.length<4){
                 setPwdMsg('Poor Password');
                 setProgressClass('progress-bar bg-danger progress-bar-striped progress-bar-animated');
                 setProgressWidth('40%');
             } else {
                 setPwdMsg('Weak Password');
                 setProgressClass('progress-bar bg-warning progress-bar-striped progress-bar-animated');
                 setProgressWidth('70%');
             }
        }
    }

    function handleIfscChange(e){
        setIfsc(e.target.value);
    }

    function ChangeCase(e){
        setIfsc(e.target.value.toUpperCase());
    }


    function handleContextMenu(){
        document.oncontextmenu = ()=> {
            alert('right click not allowed');
            return false;
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        alert('Data Submitted to API');
    }

    return(
        <div className="container-fluid" onContextMenu={handleContextMenu}>
            <p>Right Click not allowed</p>
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
            <dl className="mt-3 w-25">
                <dt>User Name</dt>
                <dd><input type="text" name="User" className="form-control" onKeyUp={VerifyUserName} /></dd>
                <dd className={errorClass}>{msg}</dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" className="form-control" onKeyUp={VerifyPassword} /></dd>
                <dd>
                    <div className="progress">
                        <div style={{width:progressWidth}} className={progressClass}>
                            {pwdMsg}
                        </div>
                    </div>
                </dd>
                <dt>Bank IFSC</dt>
                <dd>
                    <input type="text" value={ifsc} onChange={handleIfscChange} onBlur={ChangeCase} className="form-control" />
                </dd>
            </dl>
            <button>Submit</button>
            </form>
        </div>
    )
}