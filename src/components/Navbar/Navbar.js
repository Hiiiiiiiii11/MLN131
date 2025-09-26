import React, { useState, useEffect } from "react";
import { FacebookOutlined, YoutubeOutlined, InstagramOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
import "./Navbar.css";
import { changeLanguageApp } from "../../actions/appActions";
import { LANGUAGES } from "../../utils/constant";

const Navbar = () => {
    const [selectedMenu, setSelectedMenu] = useState("home");
    const navigate = useNavigate();
    const [isScrolling, setIsScrolling] = useState(false);

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    // ✅ lấy label từ file dịch
    const headerlabel = language === LANGUAGES.EN ? enTranslations.header : viTranslations.header;
    const labels = language === LANGUAGES.EN ? enTranslations.navbar : viTranslations.navbar;

    const handleLanguageChange = (newLang) => {
        dispatch(changeLanguageApp(newLang));
    };

    const handleMenuClick = (menu, sectionId = null) => {
        setSelectedMenu(menu);
        navigate(`/${menu}`);

        if (sectionId) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
        }
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
                    <h1 className="logo">{headerlabel.title}</h1>
                    <span className="logo-sub">MLN131</span>
                </div>
                <div className="social-section">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FacebookOutlined style={{ color: "#4267B2", fontSize: "22px" }} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <YoutubeOutlined style={{ color: "#ca1616ff", fontSize: "22px" }} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <InstagramOutlined style={{ color: "#E4405F", fontSize: "22px" }} />
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bottom-bar">
                <div className="nav-section">
                    <span
                        className={`nav-item ${selectedMenu === "home" ? "selected" : ""}`}
                        onClick={() => handleMenuClick("home")}
                    >
                        {labels.home}
                    </span>
                    <span
                        className={`nav-item ${selectedMenu === "introduction" ? "selected" : ""}`}
                        onClick={() => handleMenuClick("introduction")}
                    >
                        {labels.introduction}
                    </span>
                    <span
                        className={`nav-item ${selectedMenu === "news" ? "selected" : ""}`}
                        onClick={() => handleMenuClick("news", "section1")}
                    >
                        {labels.news}
                    </span>
                    <span
                        className={`nav-item ${selectedMenu === "infographic" ? "selected" : ""}`}
                        onClick={() => handleMenuClick("infographic")}
                    >
                        {labels.infographic}
                    </span>
                    <span
                        className={`nav-item ${selectedMenu === "blog" ? "selected" : ""}`}
                        onClick={() => handleMenuClick("blog")}
                    >
                        {labels.blog}
                    </span>
                </div>

                <div className="language-section">
                    <span
                        onClick={() => handleLanguageChange(LANGUAGES.VI)}
                        className={`language-toggle ${language === LANGUAGES.VI ? "selected" : ""}`}
                    >
                        VN
                    </span>
                    <span
                        onClick={() => handleLanguageChange(LANGUAGES.EN)}
                        className={`language-toggle ${language === LANGUAGES.EN ? "selected" : ""}`}
                    >
                        EN
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
