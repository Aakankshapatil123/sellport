import { Outlet } from "react-router"

const Homewrapper = () => {
  return (
    <div>
      <h1>Welcome to SellPort!</h1>
       <p>SellPort is a platform that allows you to buy and sell products with ease. Whether you're looking to declutter your home or find great deals, SellPort has got you covered.</p>
        <p>Start exploring our wide range of products and connect with sellers in your area. Happy shopping!</p>

        <Outlet />
    </div>
  )
}

export default Homewrapper
