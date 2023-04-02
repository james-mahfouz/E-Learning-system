import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";

import logo from "../../images/logo.png";
import "../AdminSidebar/index.css";
import EnrollClasses from "../EnrollClasses"

const UserSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selectedoption, setSelctedOption] = useState(<EnrollClasses />);

    const handleToggleSidebar = () => {
        if (screenWidth < 768) {
            setIsSidebarOpen(!isSidebarOpen);
        } else {
            setIsSidebarOpen(true);
        }
    };

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // const handleOptions = (option) => {
    //     if (option == 1) {

    //     }
    // }


    return (
        <div className="admin-sidebar">
            <div className="sidebar" style={{ width: (isSidebarOpen || screenWidth >= 768) ? "250px" : "0" }}>
                <a className="close-button" onClick={handleToggleSidebar}> &times; </a>
                <img src={logo} alt="logo" className="logo"></img>
                <ul className="admin_option">
                    <li>Enroll in class</li>

                    <li>View Files</li>

                    <li>Apply for Withdrawal</li>
                </ul>
            </div>
            <div className="main-content">
                <a className="open-button" onClick={handleToggleSidebar}>&#9776;</a>
                <div>{selectedoption} </div>
            </div>
        </div>
    );
}

export default UserSidebar;