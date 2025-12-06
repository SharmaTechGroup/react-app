import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";
import { FakestoreSearch } from "./fakestore-search";
import { FakestoreLogin } from "./fakestore-login";

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="d-flex justify-content-between p-3 border border-1 bg-light mt-2">
                <div className="fs-bold fs-3">Fakestore</div>
                <div>
                    <form className="input-group" action={'/search'}>
                        <input type="text" className="form-control" name="search" placeholder="Search Fakestore.in"/>
                        <button className="btn btn-warning bi bi-search"></button>
                    </form>
                </div>
                <div>
                    <button className="btn btn-warning"><span className="bi bi-cart4"></span></button>
                    <Link to="/login" className="btn mx-2 btn-danger bi bi-person"></Link>
                </div>
            </header>
            <section className="mt-3">
                <Routes>
                    <Route path="/" element={<FakestoreHome />} />
                    <Route path="products/:category" element={<FakestoreProducts />}>
                       <Route path="details/:id" element={<FakestoreDetails />} />
                    </Route>
                    <Route path="search" element={<FakestoreSearch />} />
                    <Route path="login" element={<FakestoreLogin />} />
                </Routes>
            </section>
            </BrowserRouter>
        </div>
    )
}