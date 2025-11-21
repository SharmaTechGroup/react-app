import './login.css';
function Login(){
     return(
        <div>
            <h3 className="title">Login</h3>
            <dl>
                <dt>Your Email</dt>
                <dd><input type="email" /></dd>
            </dl>
            <button className='btn btn-warning'>Login</button>
        </div>
     )
}
export default Login;