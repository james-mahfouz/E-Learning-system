import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";

import logo from "../../images/logo.png";
import "../AdminSidebar/index.css";
import EnrollClasses from "../EnrollClasses"
import ViewFiles from "../ViewFiles"
import WithdrawalForm from "../WithdrawalForm"

const UserSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selectedoption, setSelectedOption] = useState(<ViewFiles />);

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

    const handleOptions = (option) => {
        if (option === 1) {
            setSelectedOption(<EnrollClasses />)
        } else if (option === 2) {
            setSelectedOption(<ViewFiles />)
        } else if (option === 3) {
            setSelectedOption(<WithdrawalForm />)
        }
    }


    return (
        <div className="admin-sidebar">
            <div className="sidebar" style={{ width: (isSidebarOpen || screenWidth >= 768) ? "250px" : "0" }}>
                <a className="close-button" onClick={handleToggleSidebar}> &times; </a>
                <img src={logo} alt="logo" className="logo"></img>
                <ul className="admin_option">
                    <li onClick={() => { handleOptions(1) }}>Enroll in class</li>

                    <li onClick={() => { handleOptions(2) }}>View Files</li>

                    <li onClick={() => { handleOptions(3) }}>Apply for Withdrawal</li>
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