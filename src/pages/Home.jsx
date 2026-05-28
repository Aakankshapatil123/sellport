import { useNavigate } from "react-router"

const Home = () => {
  const navigate = useNavigate();

   const handleRegister = () => {
      navigate("/register")
   }

  return (
    <div>
        <button onClick={handleRegister}>Register</button> &nbsp;
        <button onClick={() => navigate("/login")}>Login</button>
    </div>
  )
}

export default Home;
