import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../App";

const Login = () => {
  const navigate = useNavigate();

  const {user, setUser} = useContext(AuthContext); 

  const handleLogin = (e) => {
     e.preventDefault();

      setUser({name: "Krish"})

     setTimeout(() => {
      console.log("user logged in successfuly")
      navigate("/dashboard");
     }, 500);
  }

  // if user is already logged in , redirect to dashbord
  useEffect(() => {
    if(user){
      navigate("/dashboard")
    }
  },[user])

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
        type="text"
        placeholder="Username" 
        />

        <input
        type="password"
        placeholder="password" 
        />

        <button type="submit">Login</button>
      </form>
      <p>Don't have a account? <Link to="/register">Register</Link></p>
    </div>
  )
}

export default Login;
