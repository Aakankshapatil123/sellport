import { useNavigate } from "react-router";

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
      <form onClick={handleLogin}>
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
    </div>
  )
}

export default Login;
