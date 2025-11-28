import { useForm } from "react-hook-form"

export function HookFormDemo(){

    const { register, handleSubmit, formState:{errors} } = useForm();

    const submit = (values) =>{
        console.log(values);
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...register("UserName",{required:true, minLength:4})} name="UserName" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.UserName?.type==="required")? <span>User Name Required</span>:<span></span> &&
                            (errors.UserName?.type==="minLength")? <span>Name too short</span>: <span></span>
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input {...register("Mobile",{required:true, pattern:/\+91\d{10}/})} type="text" name="Mobile" /></dd>
                     <dd className="text-danger">
                        {
                            (errors.Mobile?.type==="required")? <span>Mobile Required</span>:<span></span> &&
                            (errors.Mobile?.type==="pattern")? <span>Invalid Mobile</span>: <span></span>
                        }
                    </dd>
                </dl>
                <button type="Submit">Register</button>
            </form>
        </div>
    )
}