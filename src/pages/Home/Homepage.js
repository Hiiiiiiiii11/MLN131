import "./style.css" // Đổi tên file CSS để tránh xung đột
import InteractiveWorldMap from "../../components/Map/interactive-world-map" // Import interactive world map component

const Home = () => {
  const scrollToComparison = () => {
    const comparisonSection = document.getElementById("comparison-section")
    if (comparisonSection) {
      comparisonSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="home-container">
      <div className="home-header-section">
        <h1 className="home-main-title">Chủ Nghĩa Xã Hội Khoa Học và Chủ Nghĩa Xã Hội Không Tưởng</h1>
        <p className="home-subtitle">Khám phá lịch sử và triết học của hai hệ tư tưởng lớn</p>
      </div>
      <div className="home-content-with-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/330px-Karl_Marx_001.jpg"
          alt="Karl Marx"
          className="home-side-image"
        />
        <div className="home-text-content">
          <h2>Karl Heinrich Marx</h2>
          <p>
            (phiên âm tiếng Việt: Các Mác; 5 tháng 5 năm 1818 – 14 tháng 3 năm 1883) là một nhà triết học, kinh tế học,
            sử học, xã hội học, lý luận chính trị, nhà báo và nhà cách mạng người Đức. Tên tuổi của Marx gắn liền với
            hai danh tác nổi bật, đó là cuốn pamfêlê <em>Tuyên ngôn của Đảng Cộng sản</em> (1848) và bốn tập sách{" "}
            <em>Das Kapital</em>. Những tư tưởng chính trị và triết học của Marx đã có tầm ảnh hưởng lớn lao đến lịch sử
            của các lĩnh vực tri thức, kinh tế và chính trị mãi tận về sau.
          </p>
        </div>
      </div>

      <div className="home-content-with-image">
        <img
          src="https://images.hcmcpv.org.vn/res/news/2021/11/28-11-2021-friedrich-engels-lanh-tu-vi-dai-cua-giai-cap-cong-nhan-va-nhung-nguoi-cong-san-511B6A81.jpg"
          alt="Friedrich Engels"
          className="home-side-image"
        />
        <div className="home-text-content">
          <h2>Friedrich Engels</h2>
          <p>
            Sinh ngày 28 tháng 11 năm 1820, ở thành phố Barmen, tỉnh Rhein, Vương quốc Phổ (Nước Đức hiện nay) trong một
            gia đình chủ xưởng dệt. Để rồi sau đó, trở thành một trong những nhà hoạt động cách mạng lỗi lạc nhất trong
            lịch sử xã hội loài người. Cùng với Karl Marx, ông mãi mãi đi vào lịch sử nhân loại như những người sáng lập
            ra chủ nghĩa cộng sản khoa học có tác động to lớn và sâu rộng đối với nhân loại tiến bộ.
          </p>
        </div>
      </div>

      <div className="home-content-with-image">
        <img
          src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2008/10/15/karlmarx_460x276.jpg"
          alt="Mark Skousen"
          className="home-side-image"
        />
        <div className="home-text-content">
          <h2>Mark Skousen</h2>
          <p>
            Mark Skousen (2007). "Karl Marx Leads a Revolt Against Capitalism", in M. Skousen, The Big Three in
            Economics: Adam Smith, Karl Marx, And John Maynard Keynes (New York: M.E.Sharpe), pp. 64-104 (Ch. 3).
          </p>
        </div>
      </div>

      <div className="home-text-content">
        <h2>1. Tư tưởng XHCN trong lịch sử nhân loại</h2>
        <p>
          Trước Mác và Ăng-ghen, nhiều nhà tư tưởng đã vẽ ra viễn cảnh xã hội công bằng, không còn áp bức. Tuy nhiên,
          các học thuyết này thiên về lý tưởng đạo đức, thiếu cơ sở khoa học nên chỉ dừng lại ở mức "không tưởng", đã có
          nhiều tư tưởng xã hội chủ nghĩa hình thành qua các thời kỳ:
        </p>
        <ul className="timeline-list">
          <li className="timeline-period">
            <strong>Thời cổ đại:</strong>
            <ul className="timeline-details">
              <li>Plato với Cộng hòa – mô tả xã hội lý tưởng, phân chia giai cấp theo tài năng.</li>
            </ul>
          </li>
          <li className="timeline-period">
            <strong>Thời cận đại:</strong>
            <ul className="timeline-details">
              <li>Thomas More (Utopia, 1516) – xã hội không tư hữu, mọi người bình đẳng.</li>
              <li>Tommaso Campanella (Thành phố Mặt Trời) – mô hình cộng đồng lý tưởng.</li>
            </ul>
          </li>
          <li className="timeline-period">
            <strong>Thế kỷ 18–19 (CNXH không tưởng):</strong>
            <ul className="timeline-details">
              <li>Henri de Saint-Simon – nhấn mạnh vai trò khoa học, kỹ sư, nhà công nghiệp.</li>
              <li>Charles Fourier – cộng đồng "phalanstère" sống chung, chia sẻ.</li>
              <li>Robert Owen – cải cách xã hội qua các khu công nghiệp kiểu mẫu.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="home-content-with-image socialist-history-section" style={{ order: -1 }}>
        <div
          className="home-side-image"
          style={{ width: "100%", height: "auto", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "12px" }}
        >
          <InteractiveWorldMap />
        </div>
      </div>
    </div>
  )
}

export default Home

