import { createBrowserRouter, RouterContextProvider, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homewrapper from "./wrappers/Homewrapper";
import productLoaders from "./loaders/productLoaders";
import ProductDetail from "./pages/ProductDetail";
import productsLoaders from "./loaders/productsLoaders";

// create react object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homewrapper/>,
    children: [
      {
    path: "",
    element: <Home />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/register",
    element:<Register />
  },
    ]
  },
  
  {
    path:"/dashboard",
    element: <Dashboard />,
    loader: productLoaders,
    hydrateFallbackElement: <p>Loading Products...</p>
  },
  {
   path: "/product",
    element: <ProductDetail />,
    loader: productsLoaders,
    hydrateFallbackElement: <p>Loading Product...</p>
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
