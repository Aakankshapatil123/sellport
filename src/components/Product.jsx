import { Link } from "react-router";

const Product = ({product}) => {
  return (
       <li><Link to={`/product/${product.id}`}>{product.name}</Link></li >
  )
}

export default Product;
