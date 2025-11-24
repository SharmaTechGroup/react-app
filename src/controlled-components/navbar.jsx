
export function Navbar(props){
    if(props.orientation==='horizontal'){
        return(
        <nav className={`d-flex flex-row ${props.theme} my-2 align-items-center justify-content-between p-3 border border-1 border-secondary`}>
            <div className="fs-5 fw-bold">{props.brandTitle}</div>
            <div>
                {
                    props.menuItems.map((item,index)=><span key={index} className="mx-4">{item}</span>)
                }
            </div>
            <div>
                <button className={`btn ${props.btnstyle}`}>Sign in</button>
            </div>
        </nav>
        )
    }
    else {
        return(
            <nav className={`d-flex p-2 justify-content-baseline align-items-baseline flex-column ${props.theme} border border-1 border-secondary`} style={{width:'160px'}}>
                <div className="fs-5 fw-bold">{props.brandTitle}</div>
                <div>
                    <ul className="list-unstyled">
                    {
                        props.menuItems.map((item,index)=><li key={index} className="p-2 w-100 my-4 border border-light">{item}</li>)
                    }
                </ul>
                </div>
                <div>
                    <button className={`btn  ${props.btnstyle}`}>Sign In</button>
                </div>
            </nav>
        )
    }
}