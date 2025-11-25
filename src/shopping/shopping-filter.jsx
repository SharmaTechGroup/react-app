import axios from "axios"
import { useEffect, useState } from "react"


export function ShoppingFilter(){

    const [categories, setCategories] = useState([]);

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
    },[])

    return(
        <div className="container-fluid" style={{height:'450px'}}>
           <div>
              <label className="form-label fw-bold">Select Category</label>
              <div>
                <select className="form-select">
                    {
                        categories.map(category=><option key={category}>{category.toUpperCase()}</option>)
                    }
                </select>
              </div>
           </div>
        </div>
    )
}