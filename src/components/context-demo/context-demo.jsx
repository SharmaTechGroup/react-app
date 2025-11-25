import { useState } from "react";

export function ChildComponent({onChildClick}){

    function ChildClick(){
        let data = "Hello ! from Child";
        onChildClick(data);
    }

    return(
        <div className="p-4 bg-danger text-white">
            <h4>Child Component</h4>
            <button className="btn btn-warning" onClick={ChildClick}>Send Data to Parent</button>
        </div>
    )
}


export function ContextDemo(){
    
    const [msg, setMsg] = useState('');

    function GetDataformChild(e){
        setMsg(e);
    }

    return (
        <div className="container-fluid p-4 bg-dark text-white">
             <h2>Parent Component</h2>
             <p> {msg} </p>
             <ChildComponent onChildClick={GetDataformChild} />
        </div>
    )
}