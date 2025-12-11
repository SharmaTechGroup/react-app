import { useEffect, useLayoutEffect, useState } from "react"

export function A(){
    
    useLayoutEffect(()=>{

        console.log('A mounted..');

        return()=>{
            console.log('A Unmounted');
        }

    },[])
    return(
        <div>
            <h3>A component</h3>
        </div>
    )
}


export function B(){
    
    useEffect(()=>{

        console.log('B mounted..');

        return()=>{
            console.log('B Unmounted');
        }

    },[])
    return(
        <div>
            <h3>A component</h3>
        </div>
    )
}
export function EffectDemo(){

    const [container, setContainer] = useState();

    function handleAClick(){
        setContainer(<A />);
    }

    function handleBClick(){
        setContainer(<B />);
    }
    return(

        <div className="container-fluid">
            <h3>Effect Demo</h3>
            <button onClick={handleAClick}>Load A</button>
            <button onClick={handleBClick}>Load B</button>
            <hr />
            {container}
        </div>
    )
}