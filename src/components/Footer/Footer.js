import React from "react";
import { Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Triết Học Marx–Lenin</h3>
                    <p>MLN131 - Nền tảng học thuật và nghiên cứu triết học Marx-Lenin.</p>
                </div>
                <div className="footer-section">
                    <h3>Liên hệ</h3>
                    <p>Email: info@mln131.com</p>
                    <p>Điện thoại: 090 123 4567</p>
                    <p>Địa chỉ: 123 Đường Triết Học, TP. Hà Nội</p>
                </div>
                <div className="footer-section">
                    <h3>Theo dõi chúng tôi</h3>
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
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MLN131. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;