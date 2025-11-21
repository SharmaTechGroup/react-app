import React from "react";
import './register.css';

function Register()
{
    return (
        <main className="d-flex justify-content-center mt-4">
            <form className="form-container">
                <h1 className="bi bi-person-circle"> Register</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </main>
    )
}

export default Register;