import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlayCircleOutlined } from "@ant-design/icons"; // Icon chơi game
import './MainLayout.css';
import photo1 from '../../assets/photo1.png';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.png';
import photo4 from '../../assets/photo4.png';
import photo5 from '../../assets/photo5.png';
import image1 from '../../assets/image (10).png';
import image2 from '../../assets/image (11).png';
import image3 from '../../assets/image (12).png';
import image4 from '../../assets/image (13).png';
import image5 from '../../assets/image (14).png';


import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
import { LANGUAGES } from "../../utils/constant";
import Minigamepage from "../Minigame/Minigamepage";
import { useSelector } from "react-redux"; // Import component Minigamepage



const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState('');
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
    const [isGamePopupOpen, setIsGamePopupOpen] = useState(false); // State cho popup
    const navigate = useNavigate();
    const location = useLocation();
    const language = useSelector((state) => state.language);

    // ✅ lấy labels theo ngôn ngữ
    const labels =
        language === LANGUAGES.EN ? enTranslations.mainlayout : viTranslations.mainlayout;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuSelect = (menuItem) => {
        setSelectedMenu(menuItem);
    };

    // useEffect(() => {
    //     if (window.performance) {
    //         if (performance.getEntriesByType("navigation")[0].type === "reload") {
    //             // navigate(`/layout/${role}`);
    //         }
    //     }
    // }, [navigate]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrollButtonVisible(true);
            } else {
                setIsScrollButtonVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500, // Transition speed in ms
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds
        arrows: true,
    };

    const images = [
        // { url: photo1, link: "#1" },
        // { url: photo2, link: "#2" },
        // { url: photo3, link: "#3" },
        // { url: photo4, link: "#4" },
        // { url: photo5, link: "#5" },
        { url: image1, link: "#6" },
        { url: image2, link: "#7" },
        { url: image3, link: "#8" },
        { url: image4, link: "#9" },
        { url: image5, link: "#10" },
    ];

    return (
        <div className="appContainer">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="welcome-message">
                <a href="#">
                    {labels.welcome}
                </a>
            </div>
            <div className="slider-container">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <a href={image.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={image.url}
                                    alt={`Slide ${index + 1}`}
                                    className="slider-image"
                                />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Chỉ render nội dung route */}
            <div className={`appHero ${isSidebarOpen ? "collapsed" : ""}`}>
                <Outlet />
            </div>
            <Footer />
            {isScrollButtonVisible && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
            {/* Icon chơi game mở popup */}
            <div className="game-icon" onClick={() => setIsGamePopupOpen(true)}>
                <img
                    src="https://www.emojiall.com/images/60/joypixels/1f3ae.png"
                    alt="Game Icon"
                    style={{ width: "48px", height: "48px", cursor: "pointer" }}
                />
            </div>


            {/* Popup Mini-Quiz */}
            {isGamePopupOpen && (
                <div className="game-popup-overlay" onClick={() => setIsGamePopupOpen(false)}>
                    <div className="game-popup" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsGamePopupOpen(false)}>×</button>
                        <Minigamepage onClose={() => setIsGamePopupOpen(false)} /> {/* Gọi component Minigamepage */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainLayout;