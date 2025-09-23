import "./Newspage.css"
import photo11 from '../../assets/photo11.png';


export default function News() {
  return (
    <div className="news-container">
      {/* Header Section */}
      <header className="news-header">
        <div className="header-content">
          <h1 className="main-title">Chủ nghĩa Xã hội Khoa học</h1>
          <p className="subtitle">Lịch sử hình thành và ý nghĩa thời đại</p>
        </div>
        <div className="header-decoration"></div>
      </header>

      {/* Main Content */}
      <div className="news-content">
        {/* Section 1: Tuyên ngôn Đảng Cộng sản */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Tuyên ngôn Của Đảng Cộng sản (1848)</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>
                Tác phẩm kinh điển của Mác & Ăng-ghen, lần đầu tiên trình bày toàn diện hệ thống lý luận của CNXHKH, trở
                thành cương lĩnh đấu tranh của phong trào công nhân quốc tế.
              </p>
            </div>

            <div className="content-grid">
              <div className="content-card">
                <h3>Nội dung chính</h3>
                <ul>
                  <li>Lịch sử xã hội loài người là lịch sử đấu tranh giai cấp.</li>
                  <li>Giai cấp công nhân là lực lượng cách mạng xóa bỏ CNTB.</li>
                  <li>
                    Mục tiêu cuối cùng: xây dựng xã hội cộng sản chủ nghĩa – không có giai cấp, không áp bức, không bóc
                    lột.
                  </li>
                  <li>Khẩu hiệu: "Vô sản toàn thế giới, liên hiệp lại!"</li>
                </ul>
              </div>

              <div className="content-card highlight">
                <h3>Ảnh hưởng</h3>
                <p>Trở thành cương lĩnh đấu tranh của phong trào công nhân quốc tế.</p>
              </div>
            </div>

            <div className="historical-info">
              <div className="info-card">
                <div className="section-image-container">
                  <img
                    src="https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/tuyenngon31122.jpg"
                    alt="Tuyên ngôn của Đảng Cộng sản"
                    className="content-img"
                  />
                  <div className="image-overlay">
                    <span className="image-caption">
                      Trang bìa "Tuyên ngôn của Đảng Cộng Sản" xuất bản lần đầu ngày 24/2/1848
                    </span>
                  </div>
                </div>

                <div className="text-content">
                  <p>
                    Được sự ủy nhiệm của những người cộng sản, ngày 24/02/1848, Tuyên ngôn của Đảng Cộng sản bao gồm 4
                    chương do Các Mác và Ph.Ăng-ghen soạn thảo đã lần đầu tiên được xuất bản tại Luân Đôn (thủ đô nước
                    Anh). Sau đó tác phẩm được dịch và xuất bản ra nhiều thứ tiếng ở châu Âu như tiếng Anh, Pháp, Đức,
                    Italia, Đan Mạch, Ba Lan, Nga… Chỉ tính riêng châu Âu, sau khi "Tuyên ngôn của Đảng Cộng sản" được
                    xuất bản đã nhanh chóng truyền bá và dịch ở hơn hai mươi quốc gia.
                  </p>

                  <p>
                    Thời điểm đó, sức ảnh hưởng của tác phẩm ở châu Âu được cho là lớn mạnh nhất và sau đó lan sang các
                    nước châu Á như Ấn Độ, Georgia, Armenia, Nhật Bản, Trung Quốc, Việt Nam… Đây là một tác phẩm lý luận
                    bất hủ, tràn đầy sức sống thực tiễn, giữ địa vị đặc biệt quan trọng trong kho tàng lý luận của chủ
                    nghĩa Mác – Lênin.
                  </p>

                  <p>
                    Nội dung cơ bản trong Tuyên ngôn của Đảng Cộng sản đã khẳng định: Hai nguyên lý của chủ nghĩa Mác là
                    phương thức sản xuất và trao đổi kinh tế cùng với cơ cấu xã hội của phương thức đó quyết định sự hợp
                    thành nền tảng của xã hội; lịch sử phát triển của xã hội có giai cấp là lịch sử của đấu tranh giai
                    cấp; giai cấp vô sản chỉ có thể tự giải phóng khỏi tình trạng bị áp bức bóc lột, nếu đồng thời và
                    vĩnh viễn giải phóng toàn bộ xã hội khỏi tình trạng bị áp bức bóc lột, phân chia giai cấp và đấu
                    tranh giai cấp.
                  </p>

                  <p>
                    Kỷ niệm 174 năm ra đời Tuyên ngôn của Đảng Cộng sản trong bối cảnh thế giới, khu vực có nhiều diễn
                    biến phức tạp và khó lường, nhìn lại chặng đường cách mạng của Đảng ta hơn 35 năm đổi mới đất nước,
                    chúng ta càng nhận thức sâu sắc hơn những giá trị bền vững và ý nghĩa thời đại của Tuyên ngôn của
                    Đảng Cộng sản.
                  </p>
                </div>
              </div>

              <div className="quote-card">
                <blockquote>
                  "Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người"
                </blockquote>
                <cite>- Tuyên ngôn Đảng Cộng sản</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Sự phát triển của CNXHKH bởi Lênin */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Sự phát triển của CNXHKH bởi Lênin</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>
                Lênin đã phát triển CNXHKH để phù hợp với thời kỳ mới, khi CNTB bước sang giai đoạn đế quốc, chiến tranh
                và mâu thuẫn giai cấp ngày càng gay gắt.
              </p>
            </div>

            <div className="section-image-container">
              <img
                src="https://truongchinhtri.gialai.org.vn/getattachment/29477e94-f6b6-4a18-ae7d-870b5874f0a5/H2.jpg.aspx"
                alt="Lênin và sự phát triển CNXHKH"
                className="content-img"
              />
              <div className="image-overlay">
                <span className="image-caption">Lênin - Người phát triển CNXHKH trong thời đại mới</span>
              </div>
            </div>

            <div className="content-grid">
              <div className="content-card">
                <h3>Điểm nhấn</h3>
                <ul>
                  <li>Phân tích chủ nghĩa tư bản độc quyền (đế quốc chủ nghĩa).</li>
                  <li>Đề xuất Đảng Cộng sản kiểu mới – đội tiên phong của giai cấp công nhân.</li>
                  <li>
                    Khẳng định cách mạng XHCN có thể nổ ra trước tiên ở một số nước, không cần toàn thế giới cùng lúc.
                  </li>
                  <li>Xây dựng lý luận về nhà nước XHCN và chuyên chính vô sản.</li>
                </ul>
              </div>

              <div className="content-card">
                <h3>Tiền đề bổ sung</h3>
                <ul>
                  <li>CNTB chuyển sang giai đoạn đế quốc → mâu thuẫn gay gắt.</li>
                  <li>Giai cấp công nhân và phong trào cách mạng phát triển.</li>
                  <li>Bối cảnh chiến tranh thế giới, khủng hoảng xã hội.</li>
                </ul>
              </div>
            </div>

            <div className="vietnam-section">
              <div className="info-card special">
                <h4>Hồ Chí Minh và CNXHKH tại Việt Nam</h4>
                <p>
                  Hồ Chí Minh là người vận dụng sáng tạo lý luận CMXHCN vào nước ta phù hợp điều kiện tình hình nước ta
                  "cách mạng thuộc địa có thể giành được thắng lợi trước cách mạng vô sản ở chính quốc".
                </p>
                <p>
                  Người đã lãnh đạo thành lập Đảng Cộng sản Việt Nam – nhân tố chủ quan hoàn thành CMXHCN như nhà kinh
                  điển CNXHKH đã nói, Hồ Chí Minh đã lãnh đạo cách mạng nước ta làm CMDC rồi tiếp tục cách mạng không
                  ngừng lên CMXHCN (năm 1945 – 1954 ở miền Bắc và 30.4.1975 cả nước) và sự nghiệp đổi mới 36 năm qua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vận dụng CNXHKH ở các nước XHCN */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>Vận dụng CNXHKH ở các nước XHCN</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>
                Các phong trào cách mạng trên thế giới đã vận dụng linh hoạt CNXHKH, mỗi nước theo bối cảnh riêng, nhưng
                đều dựa trên nền tảng Mác – Lênin.
              </p>
            </div>

            <div className="section-image-container">
              <img src={photo11} className="content-img" />
              <div className="image-overlay">
                <span className="image-caption">Các nước xã hội chủ nghĩa trên thế giới</span>
              </div>
            </div>

            <div className="countries-grid">
              <div className="country-card">
                <div className="country-header">
                  <h3>Liên Xô (1917)</h3>
                  <span className="year">1917</span>
                </div>
                <p>Nhà nước XHCN đầu tiên, khởi nguồn từ Cách mạng Tháng Mười.</p>
              </div>

              <div className="country-card">
                <div className="country-header">
                  <h3>Trung Quốc (1949)</h3>
                  <span className="year">1949</span>
                </div>
                <p>Kết hợp CNXHKH với thực tiễn nông thôn.</p>
              </div>

              <div className="country-card highlight">
                <div className="country-header">
                  <h3>Việt Nam (1930–nay)</h3>
                  <span className="year">1930</span>
                </div>
                <p>Kiên định con đường CNXHKH, gắn với giải phóng dân tộc.</p>
              </div>

              <div className="country-card">
                <div className="country-header">
                  <h3>Cuba (1959)</h3>
                  <span className="year">1959</span>
                </div>
                <p>Con đường XHCN ở Mỹ Latinh.</p>
              </div>
            </div>

            <div className="conclusion-text">
              <p>
                Dù mỗi quốc gia có điều kiện lịch sử – kinh tế – văn hóa khác nhau, nhưng đều dựa trên nền tảng lý luận
                của CNXHKH để định hướng phát triển.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Ý nghĩa thời đại */}
        <section className="content-section final">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2>Ý nghĩa thời đại của CNXHKH</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>
                Chủ nghĩa xã hội khoa học (CNXHKH) không chỉ dừng lại ở một học thuyết lý luận, mà còn trở thành một sức
                mạnh vật chất và phong trào toàn cầu.
              </p>
            </div>

            <div className="significance-grid">
              <div className="significance-card">
                <div className="card-icon">🔬</div>
                <h3>Cơ sở khoa học để phân tích xã hội</h3>
                <p>
                  CNXHKH cung cấp phương pháp luận duy vật biện chứng và duy vật lịch sử, giúp lý giải bản chất của xã
                  hội loài người, chỉ ra quy luật vận động và mâu thuẫn giai cấp.
                </p>
                <p>
                  Không chỉ dừng ở phê phán, học thuyết còn đưa ra con đường giải quyết: thay thế xã hội tư bản bằng xã
                  hội cộng sản chủ nghĩa.
                </p>
              </div>

              <div className="significance-card">
                <div className="card-icon">🌍</div>
                <h3>Kim chỉ nam cho phong trào công nhân quốc tế</h3>
                <p>
                  Từ nửa cuối thế kỷ XIX, CNXHKH trở thành nền tảng lý luận cho các tổ chức công nhân và phong trào cách
                  mạng trên toàn thế giới.
                </p>
                <p>
                  Khẩu hiệu "Vô sản toàn thế giới, liên hiệp lại!" đã biến thành phương châm hành động, tạo sự đoàn kết
                  quốc tế giữa các giai cấp lao động.
                </p>
              </div>

              <div className="significance-card">
                <div className="card-icon">🏛️</div>
                <h3>Hình thành hệ thống nhà nước XHCN</h3>
                <p>
                  Thắng lợi của Cách mạng Tháng Mười Nga năm 1917 đã mở ra một kỷ nguyên mới: lần đầu tiên trong lịch
                  sử, CNXHKH được hiện thực hóa thành nhà nước.
                </p>
                <p>
                  Sau đó, hàng loạt nước XHCN ra đời ở Đông Âu, châu Á, Mỹ Latinh, làm thay đổi sâu sắc bản đồ chính trị
                  thế giới trong thế kỷ XX.
                </p>
              </div>

              <div className="significance-card">
                <div className="card-icon">⭐</div>
                <h3>Ý nghĩa lâu dài, bền vững</h3>
                <p>
                  Dù bối cảnh thế giới biến đổi mạnh mẽ, CNXHKH vẫn giữ vai trò là nền tảng tư tưởng của nhiều Đảng Cộng
                  sản và công nhân.
                </p>
                <p>
                  Các giá trị cốt lõi về công bằng, bình đẳng, nhân văn, giải phóng con người tiếp tục được vận dụng
                  linh hoạt vào thực tiễn phát triển của từng quốc gia.
                </p>
              </div>
            </div>

            <div className="final-quote">
              <blockquote>
                "Có thể nói, CNXHKH vừa là ngọn đuốc lý luận soi đường, vừa là động lực chính trị – xã hội, để phong
                trào công nhân và các dân tộc bị áp bức tìm thấy lối đi trong tiến trình lịch sử nhân loại."
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
