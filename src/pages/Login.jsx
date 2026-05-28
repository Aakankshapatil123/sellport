import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
     e.preventDefault();
     setTimeout(() => {
      navigate("/dashboard");
     }, 500);
  }

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
