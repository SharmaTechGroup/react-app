import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ToDoHome } from "./todo-home";
import { ToDoLogin } from "./todo-login";
import { ToDoRegister } from "./todo-register";
import { UserDashboard } from "./user-dashboard";
import { AddAppointment } from "./add-appointment";
import { EditAppointment } from './edit-appointment'; 


export function ToDoIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="p-2 bg-light">
                    <div className="fw-bold fs-4 bi bi-house-door-fill"> <Link to="/" className="text-decoration-none">Task Manager</Link> </div>
                </header>
                <section className="mt-3">
                    <Routes>
                         <Route path="/" element={<ToDoHome />} />
                         <Route path="login" element={<ToDoLogin size='w-25' />} />
                         <Route path="register" element={<ToDoRegister size='w-25'/>} />
                         <Route path="dashboard" element={<UserDashboard />} >
                             <Route path="add-appointment" element={<AddAppointment />} />
                             <Route path="edit-appointment/:id" element={<EditAppointment />} />
                         </Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}