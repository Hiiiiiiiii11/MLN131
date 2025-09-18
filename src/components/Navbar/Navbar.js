import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguageApp } from "../../actions/appActions"; // Điều chỉnh đường dẫn cho đúng
import { LANGUAGES } from "../../utils/constant";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Lấy ngôn ngữ hiện tại từ Redux store (mặc định có thể là 'vi')
    const language = useSelector((state) => state.language);

    const toggleMenuHeader = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Hàm xử lý chuyển ngôn ngữ: khi nhấn "VN" hoặc "EN"
    const handleLanguageChange = (newLanguage) => {
        dispatch(changeLanguageApp(newLanguage));
        console.log("change languge is clicked!")
    };

    useEffect(() => {
        if (!toggleSidebar) {
            toggleMenuHeader();
        }
    }, [toggleSidebar]);

    return (
        <div className={`navbar ${isSidebarOpen ? "" : "extended"}`}>
            <div className="navbar-menu-icon" onClick={toggleSidebar}>
                <MenuOutlined
                    style={{ fontSize: "24px", cursor: "pointer" }}
                    onClick={toggleMenuHeader}
                />
            </div>

            <div className="navbar-right">
                {/* Khi nhấn vào các thành phần VN hoặc EN sẽ gọi hàm xử lý thay đổi */}
                <span
                    onClick={() => handleLanguageChange(LANGUAGES.VI)}
                    style={{ fontSize: "20px", marginLeft: "20px", cursor: "pointer" }}
                    className={language === LANGUAGES.VI ? "selected" : ""}
                >
                    VN
                </span>
                <span
                    onClick={() => handleLanguageChange(LANGUAGES.EN)}
                    style={{ fontSize: "20px", marginLeft: "20px", cursor: "pointer" }}
                    className={language === LANGUAGES.EN ? "selected" : ""}
                >
                    EN
                </span>
            </div>

        </div>
    );
};

export default Navbar;
