import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./index.css"
import logo from "../../images/logo.png";


// import "../MySignup/index.css"


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData()
        data.append('email', email)
        data.append('password', password)
        console.log(data, email, password)

        //     try {
        //         const response = await axios.post('http://localhost:8000/api/v1/auth/login', data);
        //         if(response.data.status === "success"){
        //             localStorage.setItem('token', response.data.authorisation.token);
        //             navigate("/landing")
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
    };

    return (
        <div className="signin-wrapper">
            <div className="signin-logo">
                <img src={logo} alt=""></img>
            </div>
            <div className="wrapper">
                <div className="title">
                    <h2>Sign-In</h2>
                </div>

                <div className="form">
                    <div className="inputfield">
                        <label>Email Address</label>
                        <input type="email" className="register_input" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div className="inputfield">
                        <label>Password</label>
                        <input type="password" className="register_input" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <p>don't have an account? <a href="/register">Sign-Up</a></p>
                    <div className="inputfield">
                        <input type="submit" value="login" className="btn" onClick={handleSubmit}></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;