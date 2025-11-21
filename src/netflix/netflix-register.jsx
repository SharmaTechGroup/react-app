

export function NetflixRegister(){
     return(
        <form className="d-flex justify-content-center">
            <div>
                <div className="mt-5">
                    Ready to watch? Enter your email to create or restart your membership.
                </div>
                <div className="input-group input-group-lg mt-3">
                    <input type="email" className="form-control" />
                    <button className="btn btn-danger"> Get Started <span className="bi bi-chevron-right"></span> </button>
                </div>
            </div>
        </form>
     )
}