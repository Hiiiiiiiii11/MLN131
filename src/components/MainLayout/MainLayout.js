import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./MainLayout.css";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import image1 from "../../assets/image (10).png";
import image2 from "../../assets/image (11).png";
import image3 from "../../assets/image (12).png";
import image4 from "../../assets/image (13).png";
import image5 from "../../assets/image (14).png";
import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
import { LANGUAGES } from "../../utils/constant";
import Minigamepage from "../Minigame/Minigamepage";
import { useSelector } from "react-redux";

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState("");
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
    const [isGamePopupOpen, setIsGamePopupOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const language = useSelector((state) => state.language);

    const labels =
        language === LANGUAGES.EN ? enTranslations.mainlayout : viTranslations.mainlayout;

    useEffect(() => {
        // Inject Elfsight script and div dynamically
        const script = document.createElement("script");
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.body.appendChild(script);

        const div = document.createElement("div");
        div.className = "elfsight-app-97925ff1-74c4-4c7c-b9e3-e6d254481b8d";
        div.setAttribute("data-elfsight-app-lazy", "");
        document.body.appendChild(div);

        // Cleanup when component unmounts
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(div);
        };
    }, []); // Chạy một lần khi component mount

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const handleMenuSelect = (menuItem) => setSelectedMenu(menuItem);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setIsScrollButtonVisible(true);
            else setIsScrollButtonVisible(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const images = [
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
                <a href="#">{labels.welcome}</a>
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
            <div className={`appHero ${isSidebarOpen ? "collapsed" : ""}`}>
                <Outlet />
            </div>
            <Footer />
            {isScrollButtonVisible && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
            <div className="game-icon" onClick={() => setIsGamePopupOpen(true)}>
                <img
                    src="https://www.emojiall.com/images/60/joypixels/1f3ae.png"
                    alt="Game Icon"
                    style={{ width: "48px", height: "48px", cursor: "pointer" }}
                />
            </div>
            {isGamePopupOpen && (
                <div className="game-popup-overlay" onClick={() => setIsGamePopupOpen(false)}>
                    <div className="game-popup" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsGamePopupOpen(false)}>
                            ×
                        </button>
                        <Minigamepage onClose={() => setIsGamePopupOpen(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainLayout;