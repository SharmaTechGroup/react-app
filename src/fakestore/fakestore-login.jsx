import { Button, TextField } from "@mui/material";
import { useState } from "react";

export function FakestoreLogin(){


    const [user, setUser] = useState('');

    function handleNameChange(e){
        setUser(e.target.value);
    }

    return(
        <div className="container-fluid row">
            <div className="col">
                <div className="w-50">
                        <h3>Bootstrap Login</h3>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <div>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div>
                                <input type="Password" className="form-control" />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-danger w-100">Login</button>
                        </div>
                    </div>
            </div>
            <div className="col">
                    <h3>MUI Login</h3>
                    <div className="w-50">
                        <div className="mb-3">
                        <TextField onChange={handleNameChange} type="text" className="w-100" variant="standard" label="User Name"></TextField>
                        </div>
                        <div className="mb-3">
                        <TextField type="password" className="w-100" variant="standard" label="Password"></TextField>
                        </div>
                        <div className="mt-3">
                            <Button variant="contained" color="error" className="w-100"> Login </Button>
                        </div>
                    </div>
                    <h4>Hello ! {user}</h4>
            </div>
        </div>
    )
}