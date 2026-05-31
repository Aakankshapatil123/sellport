import { useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import { useLoaderData } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../App";

const Dashboard = () => {

    const products = useLoaderData();

    // get the currently logged in user from AuthContext
    const {user, setUser} = useContext(AuthContext);

    return (
        <div>
           {
            user ? <p>welcome, {user.name}!</p>:
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