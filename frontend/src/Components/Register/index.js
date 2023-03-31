import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
// import SignupButton2 from "../Buttons/SignupButton2";
// import Logo from "../../images/logo.png";
import "../Login/index.css";
import button from "../reg-logButton"

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     console.log(name, email, password)
    //     const data = new FormData()
    //     data.append('name', name)
    //     data.append('email', email)
    //     data.append('password', password)

    //     try {
    //     const response = await axios.post('http://localhost:8000/api/v1/auth/signup', data);
    //     if(response.data.status === "success"){
    //         localStorage.setItem('token', response.data.authorisation.token);
    //         navigate("/landing")
    //     }
    //     } catch (error) {
    //     console.log(error);
    //     alert('Signup failed. Please try again.');
    //     }
    // };

    return (
        <div class="signin-wrapper">
            <div class="signin-logo">
                <img src="images/logo.png" alt=""></img>
            </div>
            <div class="wrapper">
                <div class="title">
                    <h2>Sign-Up</h2>
                </div>

                <div class="form">
                    <div class="inputfield">
                        <label>Full Name</label>
                        <input type="text" class="register_input" id="f_name"></input>
                    </div>

                    <div class="inputfield">
                        <label>Age</label>
                        <input type="number" class="register_input" id="age"></input>
                    </div>

                    <div class="inputfield">
                        <label>Gender</label>
                        <div class="custom_select">
                            <select id="gender">
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div class="inputfield">
                        <label>Email Address</label>
                        <input type="text" class="register_input" id="e_mail"></input>
                    </div>

                    <div class="inputfield">
                        <label>Password</label>
                        <input type="password" class="register_input" id="pass_code"></input>
                    </div>

                    <div class="inputfield">
                        <label>Country</label>
                        <div class="custom_select">
                            <select id="country_list"></select>
                        </div>
                    </div>

                    <p>Have an account? <a href="login.html">Sign-In</a></p>
                    <div class="inputfield">
                        <input type="submit" value="Register" class="btn" id="register_btn"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
