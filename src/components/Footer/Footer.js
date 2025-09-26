import React from "react"
import { useSelector } from "react-redux"
import { FacebookOutlined, YoutubeOutlined, InstagramOutlined } from "@ant-design/icons"
import enTranslations from "../../translations/en.json"
import viTranslations from "../../translations/vn.json"
import { LANGUAGES } from "../../utils/constant"
import './Footer.css'

const Footer = () => {
    const language = useSelector((state) => state.language)
    const t = language === LANGUAGES.EN ? enTranslations.footer : viTranslations.footer

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>{t.title}</h3>
                    <p>{t.description}</p>
                </div>

                <div className="footer-section">
                    <h3>{t.contact.title}</h3>
                    <p>{t.contact.email}</p>
                    <p>{t.contact.phone}</p>
                    <p>{t.contact.address}</p>
                </div>

                <div className="footer-section">
                    <h3>{t.followUs}</h3>
                    <div className="social-section">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FacebookOutlined style={{ color: "#4267B2", fontSize: "22px" }} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <YoutubeOutlined style={{ color: "#ac182bff", fontSize: "22px" }} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <InstagramOutlined style={{ color: "#E4405F", fontSize: "22px" }} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MLN131. {t.slogan}</p>
            </div>
        </footer>
    )
}

export default Footer
