import React from "react"
import { useSelector } from "react-redux"
import { FacebookOutlined, YoutubeOutlined, InstagramOutlined } from "@ant-design/icons"
import enTranslations from "../../translations/en.json"
import viTranslations from "../../translations/vn.json"
import { LANGUAGES } from "../../utils/constant"
import './Footer.css'

const sampleData = [
    { id: 1, name: 'Nguyễn Thu Hà', mssv: 'SS160306', role: 'MC' },
    { id: 2, name: 'Dương Thị Thuỳ Trang', mssv: "SS170391", role: 'Làm nội dung' },
    { id: 3, name: 'Ngô Văn Anh', mssv: ' SS170061', role: 'Làm nội dung' },
    { id: 4, name: 'Nguyễn Ngọc Thuỳ Trang', mssv: 'SS170002', role: 'Làm nội dung' },
    { id: 5, name: 'Hà Quốc Huy', mssv: 'SE173627', role: 'Develop' },
    { id: 6, name: 'Phạm Văn Phong', mssv: 'SE161146', role: 'Develop' },
];

const Footer = () => {
    const language = useSelector((state) => state.language)
    const t = language === LANGUAGES.EN ? enTranslations.footer : viTranslations.footer

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>{t.title}</h3>
                    <p>{t.description}</p>
                    <p>Chủ Nghĩa Xã Hội Khoa Học</p>
                    <p>Chủ Nghĩa Xã Hội Không Tưởng</p>
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
                        <a href="https://youtu.be/R7T-a7MSJik?si=sb3CVXeqFKXH_XR2" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <YoutubeOutlined style={{ color: "#ac182bff", fontSize: "22px" }} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <InstagramOutlined style={{ color: "#E4405F", fontSize: "22px" }} />
                        </a>
                    </div>

                </div>
 <div className="footer-section">
      <h3 className="footer-title">Đóng Góp Thành Viên</h3>
      <div className="table-container">
        <table className="member-table">
          <thead>
            <tr>
              <th>Tên</th>
              <th>MSSV</th>
              <th>Vai trò</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((member, index) => (
              <tr
                key={member.id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{member.name}</td>
                <td>{member.mssv}</td>
                <td>{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
