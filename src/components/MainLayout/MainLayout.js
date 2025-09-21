import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainLayout.css';

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState('');
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

    // Cấu hình cho Slider
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

    // Danh sách hình ảnh với liên kết
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
                <a>Chào mừng đã đến với website nói về lịch sử về chủ đề CNXH Không Tưởng và  CNXH Khoa Học</a>
                </div>
                
            <div className="slider-container">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <a href={image.link} target="_blank" rel="noopener noreferrer" key={index}>
                            <img src={image.url} alt={`Slide ${index + 1}`} className="slider-image" />
                        </a>
                    ))}
                </Slider>
            </div>
            <div className={`appHero ${isSidebarOpen ? "collapsed" : ""}`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;