import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./index.css"

// import "../MySignup/index.css"


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const data = new FormData()
    //     data.append('email', email)
    //     data.append('password', password)

    //     try {
    //         const response = await axios.post('http://localhost:8000/api/v1/auth/login', data);
    //         if(response.data.status === "success"){
    //             localStorage.setItem('token', response.data.authorisation.token);
    //             navigate("/landing")
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div class="signin-wrapper">
            <div class="signin-logo">
                <img src="images/logo.png" alt=""></img>
            </div>
            <div class="wrapper">
                <div class="title">
                    <h2>Sign-In</h2>
                </div>

                <div class="form">
                    <div class="inputfield">
                        <label>Email Address</label>
                        <input type="text" class="register_input" id="e_mail"></input>
                    </div>

                    <div class="inputfield">
                        <label>Password</label>
                        <input type="password" class="register_input" id="pass_code"></input>
                    </div>
                    <p>don't have an account? <a href="register.html">Sign-Up</a></p>
                    <div class="inputfield">
                        <input type="submit" value="login" class="btn" id="signin_btn"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;