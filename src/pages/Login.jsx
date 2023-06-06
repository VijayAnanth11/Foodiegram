import facebook from "../images/facebook.png";
import github from "../images/github.png";
import google from "../images/google.png";

import LoginNav from "../components/LoginNav";
import { Link } from "react-router-dom";

const Login = () => {

    const Google_ = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    const Github_ = () => {
        window.open("http://localhost:5000/auth/github", "_self")
    }

    const Facebook_ = () => {
        window.open("http://localhost:5000/auth/facebook", "_self")
    }

    return (
        <div>
            <LoginNav />
            <div className="login">
                <h1 className="loginTitle">Choose a Login Method</h1>
                <div className="wrapper">
                <div className="left">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                        <Link to='/home'>
                            <button className="submit">Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button className="signup">Signup</button>
                        </Link>
                    </div>
                    
                    <div className="center">
                        <div className="line" />
                        <div className="or">OR</div>
                    </div>
                    <div className="right">
                        <div className="loginButton google" onClick={Google_}>
                            <img src={google} alt="" className="icon" />
                            Google
                        </div>
                        <div className="loginButton facebook" onClick={Facebook_}>
                            <img src={facebook} alt="" className="icon" />
                            Facebook
                        </div>
                        <div className="loginButton github" onClick={Github_}>
                            <img src={github} alt="" className="icon" />
                            Github
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login