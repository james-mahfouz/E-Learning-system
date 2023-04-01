import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import AddClasses from "../AddClasses";
import ListStudents from "../ListStudents";
import UploadFiles from "../UploadFiles";
import WithdrawalForms from "../WithdrawalForms";
import logo from "../../images/logo.png";
import "./index.css";

function AdminSidebar() {
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

    // function()
    // if (window.innerWidth < 768) {
    //     // The screen is smaller than 768 pixels wide
    // } else {
    //     // The screen is larger than or equal to 768 pixels wide
    // }


    return (
        <div className="admin-sidebar">
            <div className="sidebar" style={{ width: (isSidebarOpen || screenWidth >= 768) ? "250px" : "0" }}>
                <a className="close-button" onClick={handleToggleSidebar}> &times; </a>
                <img src={logo} alt="logo" className="logo"></img>
                <ul>
                    <li><Link to="/admin/add-classes">Add Classes</Link></li>

                    <li><Link to="/admin/list-students">List Students</Link></li>

                    <li><Link to="/admin/upload-files">Upload Files</Link></li>

                    <li><Link to="/admin/withdrawal-forms">Withdrawal Forms</Link></li>
                </ul>
            </div>
            <div className="main-content">
                <a className="open-button" onClick={handleToggleSidebar}>&#9776;</a>
                <Routes>
                    <Route path="/admin/add-classes" component={AddClasses} />
                    <Route path="/admin/list-students" component={ListStudents} />
                    <Route path="/admin/upload-files" component={UploadFiles} />
                    <Route path="/admin/withdrawal-forms" component={WithdrawalForms} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminSidebar;

