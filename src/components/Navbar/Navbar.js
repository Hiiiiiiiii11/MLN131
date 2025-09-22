import React, { useState, useEffect } from "react";
import { MailOutlined, PhoneOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [language, setLanguage] = useState("VI");
    const [selectedMenu, setSelectedMenu] = useState("home"); // default là home
    const navigate = useNavigate();
    const [isScrolling, setIsScrolling] = useState(false);

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        navigate(`/${menu}`);
    };

    useEffect(() => {
        let scrollTimer;

        const handleScroll = () => {
            setIsScrolling(true);

            if (scrollTimer) clearTimeout(scrollTimer);

            scrollTimer = setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar-container ${isScrolling ? "transparent" : "solid"}`}>
            <div className="top-bar">
                <div className="logo-section">
                    <h1 className="logo">Triết Học Marx–Lenin</h1>
                    <span className="logo-sub">MLN131</span>
                </div>
                <div className="social-section">


                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FacebookOutlined style={{ color: "#4267B2", fontSize: "22px" }} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <TwitterOutlined style={{ color: "#1DA1F2", fontSize: "22px" }} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <InstagramOutlined style={{ color: "#E4405F", fontSize: "22px" }} />
                    </a>

                </div>
            </div>

            {/* Bottom Bar: Search, Navigation, Language */}
            <div className="bottom-bar">
                {/* <div className="search-section">
                    <Input
                        placeholder="Search..."
                        prefix={<SearchOutlined style={{ color: "#999" }} />}
                        className="search-input"
                    />
                </div> */}
                <div className="nav-section">
                    <Space size="large">
                        <span
                            className={`nav-item ${selectedMenu === "home" ? "selected" : ""}`}
                            onClick={() => handleMenuClick("home")}
                        >
                            Home
                        </span>
                        <span
                            className={`nav-item ${selectedMenu === "introduction" ? "selected" : ""}`}
                            onClick={() => handleMenuClick("introduction")}
                        >
                            Introduction
                        </span>
                        <span
                            className={`nav-item ${selectedMenu === "infographic" ? "selected" : ""}`}
                            onClick={() => handleMenuClick("infographic")}
                        >
                            Infographic
                        </span>
                        <span
                            className={`nav-item ${selectedMenu === "interactive" ? "selected" : ""}`}
                            onClick={() => handleMenuClick("interactive")}
                        >
                            Interactive Section
                        </span>
                        <span
                            className={`nav-item ${selectedMenu === "blog" ? "selected" : ""}`}
                            onClick={() => handleMenuClick("blog")}
                        >
                            Blog
                        </span>

                    </Space>
                </div>
                <div className="language-section">
                    <span
                        onClick={() => handleLanguageChange("VI")}
                        className={`language-toggle ${language === "VI" ? "selected" : ""}`}
                    >
                        VN
                    </span>
                    <span
                        onClick={() => handleLanguageChange("EN")}
                        className={`language-toggle ${language === "EN" ? "selected" : ""}`}
                    >
                        EN
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
