import React from "react";
import { Space } from 'antd';
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
                    <Space size="medium">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </Space>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MLN131. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;