import { useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import { useLoaderData } from "react-router";

const Dashboard = () => {

    const products = useLoaderData();

    return (
        <div>
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