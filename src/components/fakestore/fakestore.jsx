import axios from "axios";
import { useEffect, useState } from "react"
import './fakestore.css';

export function Fakestore(){

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:null, image:null, price:0, category:null, description:null, rating:{rate:0, count:0}}]);

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            response.data.unshift("all");
            setCategories(response.data);
        })
    }

    function LoadProducts(){
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])

    return(
        <div className="container-fluid">
            <header className="d-flex mt-2 fs-4 justify-content-between p-2 bg-light">
                <div className="fw-bold">Fakestore</div>
                <div>
                    <div className="input-group">
                        <input type="text" placeholder="Search Fakestore" className="form-control"/>
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <div>
                    <button className="btn btn-warning bi bi-cart4 position-relative"> <span className="badge position-absolute rounded rounded-circle bg-danger text-white"> 0 </span> </button>
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2" >
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select className="form-select">
                             {
                                categories.map((category, index)=><option value={category} key={index}> {category.toUpperCase()} </option>)
                             }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto fakestore-container">
                    {
                        products.map(product=>
                            <div key={product.id} className="card fakestore-card m-2 p-2">
                                <img src={product.image} height="120" className="card-img-top" />
                                <div className="card-header fakestore-card-header">
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price.toLocaleString('en-us', {style:"currency", currency:"USD"})}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="badge bg-success text-white rounded p-2"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning w-100 bi bi-cart4"> Add to Cart </button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}