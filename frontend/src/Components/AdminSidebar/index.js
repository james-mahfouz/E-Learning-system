import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
// import AddClasses from "../AddClasses";
import ListStudents from "../ListStudents";
// import UploadFiles from "../UploadFiles";
// import WithdrawalForms from "../WithdrawalForms";
import logo from "../../images/logo.png";
import "./index.css";

const AdminSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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


    return (
        <div className="admin-sidebar">
            <div className="sidebar" style={{ width: (isSidebarOpen || screenWidth >= 768) ? "250px" : "0" }}>
                <a className="close-button" onClick={handleToggleSidebar}> &times; </a>
                <img src={logo} alt="logo" className="logo"></img>
                <ul className="admin_option">
                    <li><Link to="list-students">List Students</Link></li>

                    <li><Link to="add_classes">Add Classes</Link></li>

                    <li><Link to="upload-files">Upload Files</Link></li>

                    <li><Link to="withdrawal-forms">Withdrawal Forms</Link></li>
                </ul>
            </div>
            <div className="main-content">
                <a className="open-button" onClick={handleToggleSidebar}>&#9776;</a>
                <ListStudents />
            </div>
        </div>
    );
}

export default AdminSidebar;

