import axios from "axios";
import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"


export function FakestoreSearch(){
    const [searchparam] = useSearchParams();

    const [products, setProducts] = useState([{id:0, title:null, category:null, price:0, image:null, description:null, rating:{rate:0, count:0}}]);


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${searchparam.get('search')}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])
    return(
        <div>
            <h3>Search Results</h3>
            <div className="d-flex flex-wrap">
                    {
                        products.map(product=>
                            <div className="card m-2" style={{width:'120px'}}>
                                <img src={product.image} className="card-img-top" height="100" />
                                <div className="card-footer">
                                    <Link className="btn btn-warning w-100" to={`details/${product.id}`}>Details</Link>
                                </div>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}