import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';


const ProductDetail = () => {
    // get product id from url params
    const { id } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
      axios.get(`https://6a080eccfa9b27c848fa95f5.mockapi.io/products/${id}`)
      .then(res => setProduct(res.data));
    }, [])
  return (
    <div>
      <h1>Product Detail</h1>
      {
                product ? (
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Department: {product.department}</p>
                    </div>
                ) : <p>Loading Product...</p>
            }
    </div>
  )
}

export default ProductDetail;
