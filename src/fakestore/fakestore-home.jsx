import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export function FakestoreHome(){

    const [categories, setCategores] = useState([]);

    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            setCategores(response.data);
        })
    }
    useEffect(()=>{
        LoadCategories();
    },[])

    return(
        <div className="container-fluid">
            <h4>Fakestore Home</h4>
            <ul className="list-group w-25">
                {
                    categories.map(category=>
                        <li key={category} className="list-group-item list-group-item-primary my-1"> <Link className="text-decoration-none" to={`/products/${category}`}> {category.toUpperCase()} </Link> </li>
                    )
                }
            </ul>
        </div>
    )
}