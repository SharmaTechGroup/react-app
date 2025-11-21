import { useState } from "react"

export function MouseMove(){

    const [styleObj, setStyleObj] = useState({position:'', top:'', left:''});

    function handleMouseMove(e){
        setStyleObj({position:'fixed', top:e.clientY+'px', left:e.clientX+'px'});
    }

    return(
        <div  onMouseMove={handleMouseMove} className="container-fluid">
            <div style={{height:'1000px'}}>Move mouse pointer to test.</div>
            <img style={styleObj} src="flag.gif" width={50} height={50} />
        </div>
    )
}