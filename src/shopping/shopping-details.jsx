import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { SearchContext } from "./shopping-index";


export function ShoppingDetails({onAddToCartClick}){

    const [products, setProducts] = useState([{id:0, title:null, price:0, category:null, description:null, image:null, rating:{rate:0, count:0}}]);

    const context = useContext(SearchContext);

    function LoadProducts(){
        if(context==="all"){
            axios.get(`https://fakestoreapi.com/products`)
            .then(response=>{
                setProducts(response.data);
            })
        } else {
            axios.get(`https://fakestoreapi.com/products/category/${context}`)
            .then(response=>{
                setProducts(response.data);
            })
        }
    }

    useEffect(()=>{
        LoadProducts();
    },[context])

    function handleAddClick(product){
        onAddToCartClick(product);
    }

    return(
        <div className="container-fluid d-flex overflow-auto flex-wrap" style={{height:'500px'}}>
            {
                products.map(product=> 
                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                        <img src={product.image} className="card-img-top" height="110" />
                        <div className="card-header" style={{height:'100px'}}>
                            {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                            </dl>
                        </div>  
                        <div className="card-footer">
                            <button onClick={()=>{ handleAddClick(product) }} className="btn btn-warning w-100 bi bi-cart3"> Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}