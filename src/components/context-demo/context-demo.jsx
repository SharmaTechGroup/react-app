import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);


export function Level1(){

    let context = useContext(UserContext);

    return(
        <div className="p-4 bg-warning text-white">
            <h4>Level-1  Hello ! {context} </h4>
            <Level2  />
        </div>
    )
}
export function Level2(){

    let context = useContext(UserContext);

    return(
        <div className="p-4 bg-danger text-white">
            <h4>Level-2 Hello ! {context}</h4>
        </div>
    )
}

export function ContextDemo(){
    const [uname, setUname] = useState('John');
    function handleNameChange(e){
        setUname(e.target.value);
    }
    return (
        <div className="container-fluid p-4 bg-dark text-white">
            <div className="my-2">
                <input type="text" onChange={handleNameChange} placeholder="Enter User Name" />
            </div>
            <h2>Parent Component - Hello ! {uname} </h2>
            <UserContext value={uname}>
                <Level1 />
            </UserContext>
        </div>
    )
}