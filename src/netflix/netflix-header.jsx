

export function NetflixHeader(){
     return(
        <header className="d-flex justify-content-between p-3 text-white">
            <div>
                <span className="fs-1 fw-bold text-danger">NETFLIX</span>
            </div>
            <div className="d-flex">
               <div>
                 <div className="input-group">
                    <span className="bi input-group-text bi-translate"></span>
                    <select className="form-select"> 
                        <option>Language</option>
                    </select>
                </div>
               </div>
               <div>
                 <button className="btn mx-3 btn-danger">Sign In</button>
               </div>
            </div>
        </header>
     )
}