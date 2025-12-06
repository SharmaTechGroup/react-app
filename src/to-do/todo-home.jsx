import { ToDoLogin } from "./todo-login";
import { ToDoRegister } from "./todo-register";

export function ToDoHome(){
    return(
        <div className="container-fluid row">
            <div className="col">
                        <img src="todo.jpg" height="500" width="100%" />
                    </div>
                     <div className="col p-4">
                         <ul className="nav nav-tabs">
                             <li className="nav-item"> <a href="#login" data-bs-toggle="tab" className="nav-link active"> User Login </a> </li>
                             <li className="nav-item"> <a href="#register" data-bs-toggle="tab" className="nav-link"> Register </a> </li>
                         </ul>
                         <div className="tab-content w-50 mt-4">
                             <div className="tab-pane active" id="login">
                                 <ToDoLogin />
                             </div>
                              <div className="tab-pane" id="register">
                                 <ToDoRegister />
                             </div>
                         </div>
                    </div>
        </div>
    )
}