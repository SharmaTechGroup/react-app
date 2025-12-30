import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { ToolBar } from "./toolbar";
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle";
import Login from "../components/login/login";

export class ProductsData extends React.Component
{
    constructor(){
         super();
         this.state = {
             categories: [],
             products: []
         }
         
    }

    LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            this.setState({
                categories: response.data
            })
        })
    }

    componentDidMount(){
        this.LoadCategories();
    }

    render(){
         return(
            <div className="container-fluid p-4">
               
               <h3>Categories</h3>
               <ToolBar title="Amazon" menuItems={['Electronics', 'Fashion', 'Footware']} />
               <select>
                 {
                    this.state.categories.map(category=><option key={category}>{category}</option>)
                 }
               </select>
               <Formik initialValues={{username:'', password:''}} onSubmit={(user)=>{console.log(user)}}>
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="username" /></dd>
                            <dt>Pasword</dt>
                            <dd><Field type="password" name="password" /></dd>
                        </dl>
                        <button type="Submit">Submit</button>
                    </Form>
               </Formik>
            </div>
         )
    }
}