import { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

const Dashboard = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://6a181f001878294b597c6a45.mockapi.io/products")
    .then(response => setProducts(response.data))
    .catch(error => console.error('error featching data: ',error))
  }, []);
  return (
    <div>
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
