
export function DataGrid(props){
    return(
        <div className="table-responsive">
          <table className="table table-hover">
              <caption className="caption-top">{props.title}</caption>
              <thead>
                  <tr>
                    <td><input type="text" className="form-control" placeholder={`Search in ${props.title}`} /></td>
                  </tr>
                  <tr>
                     {
                        props.fields.map((field, index)=><th key={index}>{field} 
                          <div className="dropdown d-inline">
                            <button data-bs-toggle="dropdown" data-bs-target="#menu" className="bi bi-three-dots-vertical btn"></button> 
                            <ul className="dropdown-menu" id="menu">
                                <li className="dropdown-item"> <span className="bi bi-flask"> Filter </span> </li>
                                <li className="dropdown-item"> <span className="bi bi-sort-alpha-down"> Sort Ascending</span> </li>
                                <li className="dropdown-item"> <span className="bi bi-sort-alpha-up"> Sort Decending</span> </li>
                            </ul>
                          </div>
                          
                        </th>)
                     }
                     <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                 {
                    props.data.map((item,index)=>
                        <tr key={index}>
                            {
                                Object.keys(item).map((key,index)=><td key={index}>{item[key]}</td>)
                            }
                            <td>
                                <button className="btn btn-warning bi bi-pen"></button>
                                <button className="btn btn-danger bi bi-trash mx-2"></button>
                            </td>
                        </tr>
                    )
                 }
              </tbody>
          </table>
        </div>
    )
}