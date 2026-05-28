import { useNavigate } from "react-router";

const Register = () => {
    const naigate = useNavigate();
    
    const handleRegister = (e) => {
       e.preventDefault();
       setTimeout(() => {
        naigate("/login");
       }, 1000);
    }

  return (
    <div>
    <h1>Register</h1>
    <form onSubmit={handleRegister}>
        <input
        type="text" 
        placeholder="Username"
        />

        <input
        type="email" 
        placeholder="Email"
        />

        <input
        type="password" 
        placeholder="Password"
        />

        <button 
        type="submit"
        >Register</button>
    </form>
    </div>
  )
}

export default Register;
