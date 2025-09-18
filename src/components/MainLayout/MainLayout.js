import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import './MainLayout.css';


const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState('');
    const navigate = useNavigate();
    const location = useLocation(); // Get current location

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuSelect = (menuItem) => {
        setSelectedMenu(menuItem);
    };
    useEffect(() => {
        if (window.performance) {
            if (performance.getEntriesByType("navigation")[0].type === "reload") {
                // navigate(`/layout/${role}`);
            }
        }
    }, [navigate]);




    return (
        <div className="appContainer">
            <Sidebar isOpen={isSidebarOpen} onSelect={handleMenuSelect} />
            <Navbar toggleSidebar={toggleSidebar} />
            <div className={`appHero ${isSidebarOpen ? "collapsed" : ""}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
