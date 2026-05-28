import { useNavigate } from "react-router"

const Home = () => {
  const navigate = useNavigate();

   const handleRegister = () => {
      navigate("/register")
   }

  return (
    <div>
      <h1>Welcome to SellPort!</h1>
       <p>SellPort is a platform that allows you to buy and sell products with ease. Whether you're looking to declutter your home or find great deals, SellPort has got you covered.</p>
        <p>Start exploring our wide range of products and connect with sellers in your area. Happy shopping!</p>

        <button onClick={handleRegister}>Register</button> &nbsp;
        <button onClick={() => navigate("/login")}>Login</button>
    </div>
  )
}

export default Home;
