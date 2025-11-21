import { useEffect, useState } from "react"

export function ConditionDemo(){


    const [isSignedIn, setIsSignedIn] = useState(false);

    function SigninClick(){
        alert('Signed In Successfully..');
         window.localStorage.setItem('user', 'john');
         location.reload();
    }

    function SignoutClick(){
        alert('Signed Out');
        window.localStorage.removeItem('user');
        location.reload();
    }

    useEffect(()=>{
        if(window.localStorage.getItem('user')===null){
              setIsSignedIn(false);
        } else {
            setIsSignedIn(true);
        }
    },[])
    
    return(
        <div className="container-fluid p-2">
            <header className="d-flex justify-content-between p-4 border border-2 align-items-center">
                <div> <span className="fw-bold fs-5"> Amazon </span> </div>
                <div>
                   <div className="input-group">
                      <select className="input-group-text"><option>All</option></select>
                      <input className="form-control" type="text" placeholder="Search Amazon.in" />
                      <button className="btn btn-warning bi bi-search"></button>
                   </div>
                </div>
                <div>
                    {
                        (isSignedIn===true) ? <span><img width={30} height={30} src="flag.gif" /> <button onClick={SignoutClick} className="btn btn-warning">Signout</button></span> : <button onClick={SigninClick} className="btn btn-danger">Sign In</button>
                    }
                </div>
            </header>
        </div>
    )
}