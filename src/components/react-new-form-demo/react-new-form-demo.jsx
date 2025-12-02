import { useRef} from "react";
export function ReactNewFormDemo(){


    const nameRef = useRef(null);
    const mobileRef = useRef(null);


    function handleSubmit(e){
        e.preventDefault();
        console.log(`UserName=${nameRef.current.value}\nMobile=${mobileRef.current.value}`);
    }

    return(
        <div className="container-fluid">
             <form  onSubmit={handleSubmit}>
                <h2>Register</h2>
             <dl>
                <dt>Name</dt>
                <dd><input type="text" ref={nameRef} name="UserName" /></dd>
                <dt>Mobile</dt>
                <dd><input type="text" ref={mobileRef} name="Mobile" /></dd>
             </dl>
              <button type="submit">Register</button>
             </form>
        </div>
    )
}