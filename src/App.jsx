import { createBrowserRouter, RouterContextProvider, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homewrapper from "./wrappers/Homewrapper";
import productLoaders from "./loaders/productLoaders";
import ProductDetail from "./pages/ProductDetail";
import { createContext, useState } from "react";

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
  }



]);
// create context for user Authentication
export const AuthContext = createContext();

const App = () => {
  // provide the context to the entire app
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider>
  )
}

export default App;
