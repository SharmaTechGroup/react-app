import { useEffect, useRef, useState } from "react"

export function DebounceDemo(){


    const [milliSec, setMilliSec] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let ms=0, sec=0, min=0, hrs = 0;
    function StartWatch(){
        ms++;
        if(ms===999){
            sec++;
            ms=0;
            if(sec===59){
                min++;
                sec=0;
                if(min===59){
                    hrs++;
                    min=0;
                }
            }
        }
        setMilliSec(ms);
        setSeconds(sec);
    }

    let thread = useRef(null);
    
    function handleStartClick(){
        thread.current = setInterval(StartWatch,1);
    }

    function handleStopClick(){
        clearInterval(thread.current);
        setMilliSec(0);
        setSeconds(0);
    }

    return(
        <div className="container-fluid p-3 d-flex justify-content-center">
            <div className="mt-4 bg-primary text-white p-4">
                <div className="row fs-2 fw-bold">
                    <div className="col">
                        00
                    </div>
                    <div className="col">
                        :
                    </div>
                    <div className="col">
                        00     
                    </div>
                    <div className="col">
                        :
                    </div>
                    <div className="col">
                        {seconds}
                    </div>
                    <div className="col">
                        :
                    </div>
                    <div className="col">
                        {milliSec}
                    </div>
                </div>
                <div className="mt-4">
                    <button onClick={handleStartClick} className="btn btn-warning">Start</button>
                    <button onClick={handleStopClick} className="btn btn-danger mx-2">Stop</button>
                </div>
            </div>
        </div>
    )
}