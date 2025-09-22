import React, { useState } from "react";
import { MailOutlined, PhoneOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space } from 'antd';
import "./Navbar.css";

const Navbar = () => {
    const [language, setLanguage] = useState("VI"); // State nội bộ cho ngôn ngữ

    // Hàm xử lý chuyển ngôn ngữ
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div className="navbar-container">
            <div className="top-bar">
                <div className="logo-section">
                    <h1 className="logo">Triết Học Marx–Lenin</h1>
                    <span className="logo-sub">MLN131</span>
                </div>
                <div className="social-section">
                    <Space size="medium">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FacebookOutlined style={{ color: "#4267B2", fontSize: "22px" }} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <TwitterOutlined style={{ color: "#1DA1F2", fontSize: "22px" }} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <InstagramOutlined style={{ color: "#E4405F", fontSize: "22px" }} />
                        </a>
                    </Space>
                </div>
            </div>

            {/* Bottom Bar: Search, Navigation, Language */}
            <div className="bottom-bar">
                <div className="search-section">
                    <Input
                        placeholder="Search..."
                        prefix={<SearchOutlined style={{ color: "#999" }} />}
                        className="search-input"
                    />
                </div>
                <div className="nav-section">
                    <Space size="large">
                        <span className="nav-item">Homes</span>
                        <span className="nav-item">Introduction</span>
                        <span className="nav-item">Infographic</span>
                        <span className="nav-item">Interactive Section</span>
                        <span className="nav-item">Blog </span>
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