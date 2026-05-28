import { useEffect, useState } from "react";

const Dashboard = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://6a181f001878294b597c6a45.mockapi.io/products")
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('error featching data: ',error))
  }, []);
  return (
    <div>
      <ul>
        {
          products
          .map(product => (
            <li key={product.id}>{product.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Dashboard;
