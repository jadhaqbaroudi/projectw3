import "./register.scss"
import { Link } from "react-router-dom";


const Register=()=>{

    return(
        <div className="register">
        <div className="card">
        <div className="left">
            <h1>JBOOK</h1>
            <p>
            Welcome JBOOK platform! We're thrilled to have you join our vibrant community. To get started, please take a moment to create your account. Simply fill out the form below with your basic information, and you'll be on your way to connecting with friends, sharing your thoughts, and discovering new experiences. Your privacy and security are our top priorities, so rest assured that your information will be kept safe. Let's begin this journey together
            </p>
            <span>Do you have an acount?</span>
        
            <Link className="Link" to="/login">
                        Login
                        </Link>
            
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="User Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="name" />
                    <button>Register</button>    
            </form>
        </div>
        </div>
    </div>
    )
}
export default Register;