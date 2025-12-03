import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


export function FakestoreProducts(){

    let params = useParams();

    const [products, setProducts] = useState([{id:0, title:null, category:null, price:0, image:null, description:null, rating:{rate:0, count:0}}]);


    function LoadProducts(){
        axios(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{

        LoadProducts();

    },[])

    return(
        <div className="container-fluid">
           <div className="row">
              <div className="col">
                  <h4>Products</h4>
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
                    <Link to="/">Back to Home</Link>
              </div>
              <div className="col">
                     <Outlet></Outlet>
              </div>
           </div>
        </div>
    )
}