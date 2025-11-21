import { useEffect, useState } from "react"
import axios from "axios";


export function DataBinding(){
    
    const [product, setProduct] = useState({title:null, price:0, image:null, rating:{rate:0, ratings:0, reviews:0}, offers:[]});

    function LoadProduct(){
         axios.get('product.json')
         .then(response=>{
             setProduct(response.data);
         })
    }

    useEffect(()=>{
        LoadProduct();
    },[])

    return(
        <div className="container-fluid p-2">
            <div className="row">
                <div className="col-3">
                    <img width="100%" src={product.image} />
                </div>
                <div className="col-9">
                    <div className="fs-4">{product.title}</div>
                    <div className="my-2">
                        <span className="badge bg-success text-white rounded p-1"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="fw-bold mx-2 text-secondary"> {product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews.toLocaleString('en-in')} reviews </span>
                    </div>
                    <div className="my-4">
                        <span className="fw-bold fs-1"> {product.price.toLocaleString('en-in', {style:"currency", currency:"INR", minimumFractionDigits:0})} </span>
                    </div>
                    <div className="mt-2">
                        <div className="fw-bold fs-6 my-3"> Available offers </div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=><li className="bi bi-tag-fill text-success my-2" key={offer}> <span className="text-secondary"> {offer} </span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}