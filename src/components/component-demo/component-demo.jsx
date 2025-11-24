import { useState } from "react"
import { DataGrid } from "../../controlled-components/data-grid";


export function ComponentDemo(){

    const [products] = useState([
        {Name: 'TV', Price: 45000, Stock: 'Available'},
        {Name: 'Mobile', Price: 13000, Stock: 'Out of Stock'}
    ]);

    const [employees] = useState([
        {FirstName: 'Raj', LastName:'Kiran', Designation:'Developer', Salary: 50000},
        {FirstName: 'RajA', LastName:'Kiran', Designation:'Developer', Salary: 50000},
        {FirstName: 'RajB', LastName:'Kiran', Designation:'Admin', Salary: 50000},
        {FirstName: 'RajC', LastName:'Kiran', Designation:'Manager', Salary: 50000},        

    ])

    return(
        <div className="container-fluid p-2">
            <DataGrid title="Employee Details" fields={Object.keys(employees[0])} data={employees} />
            <DataGrid title="Product Details" fields={Object.keys(products[0])} data={products} />
        </div>
    )
}