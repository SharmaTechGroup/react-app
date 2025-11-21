import { useState } from "react"

export function EventBinding(){

    const [user, setUser] = useState('John');

    function UpdateUser(e){
        setUser(e.target.value);
    }
   
    return(
        <div className="container-fluid p-4">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={UpdateUser} value={user} /></dd>
            </dl>
            <p> Hello ! {user} </p>
        </div>
    )
}