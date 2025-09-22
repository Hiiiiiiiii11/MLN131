import React, { useState } from "react";
import './Introduction.css';

const Introduction = () => {
    const [selectedCard, setSelectedCard] = useState(null); // State để quản lý card được chọn

    // Danh sách nhân vật và ảnh
    const characters = [
        { name: "Henri de Saint-Simon", image: "https://sociologiaifdtbo.wordpress.com/wp-content/uploads/2013/05/saint-simon1.jpg" },
        { name: "Joseph Fourier", image: "https://c8.alamy.com/comp/HKXWBK/jean-baptiste-joseph-fourier-1768-1830-mathematician-physicist-HKXWBK.jpg" },
        { name: "Robert Owen", image: "https://www.art-prints-on-demand.com/kunst/english_school/robert_owen.jpg" },
        { name: "Karl Marx", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/150px-Karl_Marx_001.jpg" },
        { name: "Friedrich Engels", image: "https://images.hcmcpv.org.vn/res/news/2021/11/28-11-2021-friedrich-engels-lanh-tu-vi-dai-cua-giai-cap-cong-nhan-va-nhung-nguoi-cong-san-511B6A81.jpg" },
    ];

    // Hàm đóng modal
    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="introduction-container">
            <div className="header-section">
                <h2 className="subtitle">Hai hướng tiếp cận khác nhau của chủ nghĩa xã hội</h2>
            </div>
            <div className="content-section">
                <p>
                    Chủ nghĩa xã hội không tưởng xuất hiện từ đầu thế kỷ XIX, do các nhà tư tưởng như Saint-Simon, Fourier, Owen khởi xướng. Nó dựa trên lý tưởng đạo đức và khát vọng công bằng, nhưng thiếu cơ sở khoa học và thực tiễn cách mạng.
                </p>
                <p>
                    Chủ nghĩa xã hội khoa học, do Karl Marx và Friedrich Engels xây dựng vào giữa thế kỷ XIX, dựa trên phân tích khoa học về xã hội và quy luật phát triển lịch sử, trở thành nền tảng cho phong trào công nhân hiện đại.
                </p>
            </div>
            <div className="two-column-layout">
                {/* Cột trái: Chủ nghĩa Xã hội Không tưởng */}
                <div className="column left-column">
                    <p className="caption">CNXH Không tưởng – Lý tưởng, đạo đức, thiếu cơ sở khoa học</p>
                    <div className="card-group">
                        {characters.slice(0, 3).map((char, index) => (
                            <div key={index} className="mini-card" onClick={() => setSelectedCard(char)}>
                                <img src={char.image} alt={char.name} className="card-image" />
                                <span className="card-name">{char.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Cột phải: Chủ nghĩa Xã hội Khoa học */}
                <div className="column right-column">
                    <p className="caption">CNXHKH – Cơ sở khoa học, gắn với phong trào công nhân</p>
                    <div className="card-group">
                        {characters.slice(3).map((char, index) => (
                            <div key={index + 3} className="mini-card" onClick={() => setSelectedCard(char)}>
                                <img src={char.image} alt={char.name} className="card-image" />
                                <span className="card-name">{char.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal hiển thị ảnh full và tên */}
            {selectedCard && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <img src={selectedCard.image} alt={selectedCard.name} className="modal-image" />
                        <h3 className="modal-name">{selectedCard.name}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Introduction;