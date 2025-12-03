import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";


export function FakestoreDetails(){

    const [product, setProduct] = useState({id:0, title:null, category:null, price:0, image:null, description:null, rating:{rate:0, count:0}});
    let params = useParams();

    function LoadProduct(){
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    

    useEffect(()=>{
        LoadProduct();
        
    },[params.id])

    return(
        <div className="container-fluid">
            <h3>Details</h3>
            <img src={product.image} width="200" height="200"/>
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
            </dl>
        </div>
    )
}