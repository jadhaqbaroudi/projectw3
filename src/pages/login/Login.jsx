import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const {login}=useContext(AuthContext);

  const handleLogin=()=>{
    login();
  }
    return (
    <div className="login">
        <div className="card">
        <div className="left">
            <h1>Hello World</h1>
            <p>
            Welcome to JBOOK, where the power of connection is at your
            fingertips. Whether you're looking to forge new friendships, 
            share
            your passions, or stay updated
            with the latest trends, our app
            provides a vibrant platform for it all.
            </p>
            <span>Create your account</span>
            <Link className="Link" to="/register">
            Register
            </Link>
            
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="User Name" />
                    <input type="password" placeholder="password" />
                        <button onClick={handleLogin}>Login</button>
            </form>
        </div>
        </div>
    </div>
    );
};
export default Login;
