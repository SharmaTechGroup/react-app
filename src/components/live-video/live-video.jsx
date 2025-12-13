import { useReducer } from "react"

let initialState = {
    ViewersCount : 0
}

function reducer(state, action){
    switch(action.type)
    {
        case "join": 
        return { ViewersCount: state.ViewersCount + 1 }
        case "exit": 
        return { ViewersCount: state.ViewersCount - 1 }
    }
}

export function LiveVideo(){

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleJoinClick(){
        alert('User Joined');
        dispatch({type:'join'});
    }
    function handleExitClick(){
        alert('You will exit live');
        dispatch({type:'exit'});
    }

    return(
        <div className="container-fluid">
            <h3>Watch Live - [{state.ViewersCount}]</h3>
            <iframe width="500" height="300" src="https://www.youtube.com/embed/tjzVhBF0cuY"></iframe>
            <div className="mt-2">
                <button onClick={handleJoinClick} className="btn btn-primary">Join live</button>
                <button onClick={handleExitClick} className="btn btn-warning mx-2">Exit Live</button>
            </div>
        </div>
    )
}