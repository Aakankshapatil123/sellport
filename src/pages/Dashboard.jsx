import { useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../App";

const Dashboard = () => {

    const products = useLoaderData();
    const navigate = useNavigate();

    // get the currently logged in user from AuthContext
    const {user, setUser} = useContext(AuthContext);
     
    // if the user is not logged in, redirect to login page
    useEffect(() => {
        if(!user){
            navigate("/login")
        }
    }, [user]);

    return (
        <div>
           {
            user ? <div><p>welcome, {user.name}!<button onClick={() =>setUser(null)}>logout</button></p></div>:
            <p>Please log in to see the product.</p>
           }
            <h1>Products</h1>
            <ul>
                {
                    products.length > 0 ? products
                        .map(product => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        )) : <p>Loading Products...</p>
                }
            </ul>
        </div>
    )
}

export default Dashboard;