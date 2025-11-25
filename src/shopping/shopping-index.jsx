import { createContext, useEffect, useState } from "react";
import { ShoppingDetails } from "./shopping-details";
import { ShoppingFilter } from "./shopping-filter";

export let SearchContext = createContext(null); 

export function ShoppingIndex(){

    const [category, setCategory] = useState('all');
    const [categoryName, setCategoryName] = useState('');

    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    function handleCategoryChange(e){
        setCategoryName(e.target.value);
    }

    function handleSearchClick(){
        setCategory(categoryName);
    }

    function AddClick(product){
        alert(`${product.title}\nAdded to Cart`);
        cartItems.push(product);
        setCartCount(cartItems.length);
    }

    useEffect(()=>{},[])

    return(
        <div className="container-fluid">
            <header className="p-3 mt-2 d-flex align-items-center justify-content-between bg-light">
                <div className="fw-bold fs-4"> <span className="bi bi-bag-fill text-danger"></span> Shopping</div>
                <div>
                    <div className="input-group">
                        <input onChange={handleCategoryChange} placeholder=" eg:electronics, jewelery" type="text" className="form-control" />
                        <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <div>
                    <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="btn btn-warning bi bi-cart position-relative">
                        <span className="badge rounded rounded-circle bg-danger text-white position-absolute">{cartCount}</span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            <h4>Your Cart Items</h4>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Preview</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map(item=>
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td><img  src={item.image} width="50" height="50" /></td>
                                                <dt>{item.price}</dt>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
            <section className="row p-3 mt-3">
                <div className="col-2 shadow bg-light">
                    <ShoppingFilter />
                </div>
                <div className="col-10">
                    <SearchContext value={category}>
                        <ShoppingDetails onAddToCartClick={AddClick} category={category} />
                    </SearchContext>
                </div>
            </section>
        </div>
    )
}