import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlayCircleOutlined } from "@ant-design/icons"; // Icon chơi game
import './MainLayout.css';

import Introductionpage from "../Introduct/Introductionpage";
import Minigamepage from "../Minigame/Minigamepage"; // Import component Minigamepage



const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState('');
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
    const [isGamePopupOpen, setIsGamePopupOpen] = useState(false); // State cho popup
    const navigate = useNavigate();
    const location = useLocation();

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
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
    };

    const images = [
        { url: "https://luatduonggia.vn/wp-content/uploads/2024/09/chu-nghia-xa-hoi-khong-tuong-la-gi-tich-cuc-va-han-che.png", link: "https://example.com/image1" },
        { url: "https://nghiencuulichsu.com/wp-content/uploads/2020/08/capitalism_vs__communism_by_therazgar-d696kv7.png-1024x695-1.jpg", link: "https://example.com/image2" },
        { url: "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/PDP/hinh-anh-2638.jpg", link: "https://example.com/image3" },
        { url: "https://tuyenquang.dcs.vn/Image/Large/20218278521_48282.jpg", link: "https://example.com/image4" },
        { url: "https://usth.edu.vn/wp-content/uploads/2021/12/6-cap-pham-tru-triet-hoc-mac-lenin-1.png", link: "https://example.com/image5" },
    ];

    return (
        <div className="appContainer">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="welcome-message">
                <a href="#">
                    🌍 Chào mừng bạn đến với website lịch sử – nơi khám phá hành trình từ Chủ nghĩa Xã hội Không Tưởng 
                    đến Chủ nghĩa Xã hội Khoa Học ✨. 
                    Cùng tìm hiểu những tư tưởng, con người và bước ngoặt đã làm thay đổi tiến trình nhân loại!
                </a>
            </div>
            <div className="slider-container">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <a href={image.link} target="_blank" rel="noopener noreferrer" key={index}>
                            <img src={image.url} alt={`Slide ${index + 1}`} className="slider-image" />
                        </a>
                    ))}
                </Slider>

                <Homepage />
                <Introductionpage />


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