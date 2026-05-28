import { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import { useLoaderData } from "react-router";

const Dashboard = () => {

  const products = useLoaderData();

  return (
    <div>
      <h1>Produts</h1>
      <ul>
        {
          products
          .map(product => (
            <Product  
            key={product.id}
            product={product}/>
          ))
        }
      </ul>
    </div>
  )
}

export default Dashboard;
