import React from "react";
import { useSelector } from "react-redux";

import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
import { LANGUAGES } from "../../utils/constant";

import "./Newspage.css";
import photo11 from "../../assets/photo11.png";
import article from "../../assets/article.jpeg";

export default function News() {
  const language = useSelector((state) => state.language);

  // ✅ lấy labels theo ngôn ngữ
  const labels =
    language === LANGUAGES.EN ? enTranslations.news : viTranslations.news;

  return (
    <div className="news-container">
      {/* Header Section */}
      <header className="news-header">
        <div className="news-header-content">
          <h1 className="news-main-title">{labels.header.title}</h1>
          <p className="news-subtitle">{labels.header.subtitle}</p>
        </div>
        <div className="header-decoration"></div>
      </header>

      {/* Main Content */}
      <div className="news-content">
        {/* Section 1 */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">{labels.sections.section1.number}</span>
            <h2>{labels.sections.section1.title}</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>{labels.sections.section1.intro}</p>
            </div>

            <div className="content-grid">
              <div className="content-card">
                <h3>{labels.sections.section1.mainTitle}</h3>
                <ul>
                  {labels.sections.section1.mainPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="content-card highlight">
                <h3>{labels.sections.section1.impactTitle}</h3>
                <p>{labels.sections.section1.impact}</p>
              </div>
            </div>

            <div className="historical-info">
              <div className="info-card">
                <div className="section-image-container">
                  <img
                    src="https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/tuyenngon31122.jpg"
                    alt="Communist Manifesto"
                    className="content-img"
                  />
                  <div className="image-overlay">
                    <span className="image-caption">
                      {labels.sections.section1.caption}
                    </span>
                  </div>
                </div>

                <div className="text-content">
                  <p>{labels.sections.section1.paragraph1}</p>
                  <p>{labels.sections.section1.paragraph2}</p>
                  <p>{labels.sections.section1.paragraph3}</p>
                  <p>{labels.sections.section1.paragraph4}</p>
                </div>
              </div>

              <div className="quote-card">
                <blockquote>{labels.sections.section1.quote}</blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">{labels.sections.section2.number}</span>
            <h2>{labels.sections.section2.title}</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>{labels.sections.section2.intro}</p>
            </div>

            <div className="section-image-container">
              {/* <img
                src="https://truongchinhtri.gialai.org.vn/getattachment/29477e94-f6b6-4a18-ae7d-870b5874f0a5/H2.jpg.aspx"
                alt="Lenin"
                className="content-img"
              /> */}
              <img src={article} className="content-img" alt="Lenin" />
              <div className="image-overlay">
                <span className="image-caption">
                  {labels.sections.section2.caption}
                </span>
              </div>
            </div>

            <div className="content-grid">
              <div className="content-card">
                <h3>{labels.sections.section2.highlight.title}</h3>
                <ul>
                  {labels.sections.section2.highlight.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="content-card">
                <h3>{labels.sections.section2.extra.title}</h3>
                <ul>
                  {labels.sections.section2.extra.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="vietnam-section">
              <div className="info-card special">
                <h4>{labels.sections.section2.vietnam.title}</h4>
                {labels.sections.section2.vietnam.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">{labels.sections.section3.number}</span>
            <h2>{labels.sections.section3.title}</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>{labels.sections.section3.intro}</p>
            </div>

            <div className="section-image-container">
              <img src={photo11} className="content-img" alt="Socialist countries" />
              <div className="image-overlay">
                <span className="image-caption">
                  {labels.sections.section3.caption}
                </span>
              </div>
            </div>

            <div className="countries-grid">
              <div className="country-card">
                <h3>{labels.sections.section3.countries.ussr}</h3>
              </div>
              <div className="country-card">
                <h3>{labels.sections.section3.countries.china}</h3>
              </div>
              <div className="country-card highlight">
                <h3>{labels.sections.section3.countries.vietnam}</h3>
              </div>
              <div className="country-card">
                <h3>{labels.sections.section3.countries.cuba}</h3>
              </div>
            </div>

            <div className="conclusion-text">
              <p>{labels.sections.section3.conclusion}</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="content-section final">
          <div className="section-header">
            <span className="section-number">{labels.sections.section4.number}</span>
            <h2>{labels.sections.section4.title}</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>{labels.sections.section4.intro}</p>
            </div>

            <div className="significance-grid">
              <div className="significance-card">
                <h3>{labels.sections.section4.points.science.title}</h3>
                <p>{labels.sections.section4.points.science.content}</p>
              </div>
              <div className="significance-card">
                <h3>{labels.sections.section4.points.movement.title}</h3>
                <p>{labels.sections.section4.points.movement.content}</p>
              </div>
              <div className="significance-card">
                <h3>{labels.sections.section4.points.state.title}</h3>
                <p>{labels.sections.section4.points.state.content}</p>
              </div>
              <div className="significance-card">
                <h3>{labels.sections.section4.points.values.title}</h3>
                <p>{labels.sections.section4.points.values.content}</p>
              </div>
            </div>

            <div className="final-quote">
              <blockquote>{labels.sections.section4.finalQuote}</blockquote>
            </div>
          </div>
          
        </section>
      </div>
        <header className="news-header">
        <div className="news-header-content">
          <h1 className="news-main-title">Chũ Nghĩa Xã Hội Không Tưởng</h1>
          <p className="news-subtitle">{labels.header.subtitle}</p>
        </div>
        <div className="header-decoration"></div>
      </header>
          <div className="news-content">
        {/* Section 1 */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">{labels.sections.section1.number}</span>
            <h2> Hoàn cảnh ra đời</h2>
          </div>

          <div className="section-content">
            <div className="intro-text">
              <p>Chủ nghĩa xã hội không tưởng xuất hiện từ thời cổ đại nhưng phát triển mạnh mẽ vào thế kỷ XVI – XIX, khi xã hội tư bản chủ nghĩa sơ khai nảy sinh nhiều mâu thuẫn gay gắt:</p>
            </div>

            <div className="content-grid">
              <div className="content-card">
                <h3>{labels.sections.section1.mainTitle}</h3>
                <ul>
                  <li>Sự phân hóa giàu nghèo ngày càng lớn.</li>
                  <li>Người lao động bị bóc lột, làm việc trong điều kiện khắc nghiệt.</li>
                  <li>Các giá trị đạo đức, công bằng và nhân văn bị chà đạp.</li>
                </ul>
              </div>

              <div className="content-card highlight">
                <h3 >{labels.sections.section1.impactTitle}</h3>
                <p>Trong bối cảnh đó, nhiều nhà tư tưởng đã vẽ ra hình ảnh một xã hội lý tưởng – công bằng, không còn áp bức bóc lột. Tuy nhiên, họ chưa lý giải được quy luật phát triển của xã hội và lực lượng có thể thực hiện những ước mơ ấy. Vì thế, các học thuyết chỉ dừng lại ở mức “không tưởng”.</p>
              </div>
            </div>

            {/* <div className="historical-info">
              <div className="info-card">
                <div className="section-image-container">
                  <img
                    src="https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/tuyenngon31122.jpg"
                    alt="Communist Manifesto"
                    className="content-img"
                  />
                  <div className="image-overlay">
                    <span className="image-caption">
                      {labels.sections.section1.caption}
                    </span>
                  </div>
                </div>

                <div className="text-content">
                  <p>{labels.sections.section1.paragraph1}</p>
                  <p>{labels.sections.section1.paragraph2}</p>
                  <p>{labels.sections.section1.paragraph3}</p>
                  <p>{labels.sections.section1.paragraph4}</p>
                </div>
              </div>

              <div className="quote-card">
                <blockquote>{labels.sections.section1.quote}</blockquote>
              </div>
            </div> */}
          </div>
        </section>

        {/* Section 2 */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">{labels.sections.section2.number}</span>
            <h2>Nội dung và đặc điểm cơ bản</h2>
          </div>

          <div className="section-content">
            {/* <div className="intro-text">
              <p>Tư tưởng chủ đạo: mong muốn xóa bỏ bất công xã hội, xây dựng xã hội công bằng, nhân ái.</p>
            </div> */}

            {/* <div className="section-image-container">
              <img
                src="https://truongchinhtri.gialai.org.vn/getattachment/29477e94-f6b6-4a18-ae7d-870b5874f0a5/H2.jpg.aspx"
                alt="Lenin"
                className="content-img"
              />
              <img src={article} className="content-img" alt="Lenin" />
              <div className="image-overlay">
                <span className="image-caption">
                  {labels.sections.section2.caption}
                </span>
              </div>
            </div> */}

            <div className="content-grid">
              <div className="content-card">
                <h3>Tư tưởng chủ đạo:</h3>
                <ul>
                  <li>Mong muốn xóa bỏ bất công xã hội, xây dựng xã hội công bằng, nhân ái.</li>
                  <li>Đề cao vai trò của lý tưởng đạo đức, tình thương yêu con người.</li>
                  <li>Vẽ ra hình ảnh xã hội tương lai tốt đẹp, không còn áp bức, bóc lột.</li>

                </ul>
                <h3>Đặc điểm:</h3>
                <ul>
                <li>Dựa trên lý tưởng đạo đức và trí tưởng tượng, chưa có cơ sở khoa học.</li>
                <li>Đề cao bình đẳng, chống tư hữu, hướng tới cộng đồng chung.</li>
                <li>Thiếu phân tích về quy luật kinh tế – xã hội, thiếu lực lượng xã hội tiên phong.</li>

                </ul>
              </div>

              {/* <div className="content-card">
                <h3>{labels.sections.section2.extra.title}</h3>
                <ul>
                  {labels.sections.section2.extra.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div> */}
            </div>

            {/* <div className="vietnam-section">
              <div className="info-card special">
                <h4>{labels.sections.section2.vietnam.title}</h4>
                {labels.sections.section2.vietnam.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* Section 3 */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">{labels.sections.section3.number}</span>
            <h2> Một số nhà tư tưởng tiêu biểu</h2>
          </div>

          <div className="content-grid">
              <div className="content-card">
                <h3>Plato (427–347 TCN) – Cộng hòa</h3>
                <ul>
                  <li>mô tả xã hội lý tưởng, phân chia giai cấp theo tài năng, nhấn mạnh công lý và trật tự..</li>
                 

                </ul>
                <h3>Thomas More (1478–1535) – Utopia (1516)</h3>
                <ul>
                <li>hình dung xã hội không có tư hữu, mọi người bình đẳng, làm việc 6 giờ/ngày, không có sự xa hoa lãng phí.
</li>
              

                </ul>
                  <h3>Tommaso Campanella (1568–1639) – Thành phố Mặt Trờ</h3>
                <ul>
                  <li>mô hình cộng đồng lý tưởng, tài sản chung, mọi người lao động và hưởng thụ ngang nhau, giáo dục và trách nhiệm tập thể.
</li>
                 

                </ul>
                  <h3>Henri de Saint-Simon (1760–1825)</h3>
                <ul>
                  <li>nhấn mạnh vai trò của khoa học, kỹ sư, nhà công nghiệp trong tổ chức xã hội mới, kêu gọi cải cách xã hội dựa trên tiến bộ khoa học.
</li>
                 

                </ul>
                  <h3>Charles Fourier (1772–1837)::</h3>
                <ul>
                  <li> đề xuất mô hình cộng đồng hợp tác Phalanstère – mỗi cộng đồng khoảng 1.600 người cùng sống, lao động và chia sẻ của cải.
</li>
                 

                </ul>
                  <h3>Robert Owen (1771–1858)</h3>
                <ul>
                  <li> doanh nhân và nhà cải cách xã hội Anh. Ông đã lập ra các khu công nghiệp kiểu mẫu, giảm giờ làm, cấm lao động trẻ em, xây trường học cho công nhân, cải thiện điều kiện sống. Thực nghiệm này cho thấy tinh thần nhân văn, tiến bộ của CNXHKT, nhưng do thiếu cơ sở khoa học, nó không thể mở rộng thành một hệ thống xã hội hoàn chỉnh.
</li>
                  
  
                  </ul>
              </div>

        
            </div>
        </section>

        {/* Section 4 */}
        <section className="content-section final">
          <div className="section-header">
            <span className="section-number">{labels.sections.section4.number}</span>
            <h2>Giá trị và hạn chế</h2>
          </div>

          <div className="section-content">
            {/* <div className="intro-text">
              <p>{labels.sections.section4.intro}</p>
            </div> */}

            <div className="significance-grid">
              <div className="significance-card">
                <h2>Giá trị</h2>
              <ul>
                <li>Thể hiện khát vọng về xã hội công bằng, nhân văn.</li>
                <li>Phê phán bất công của xã hội phong kiến và tư bản sơ khai.</li>
                <li>Đặt nền móng tư tưởng cho sự phát triển của phong trào công nhân.</li>
                <li>Gợi mở tinh thần nhân đạo, cải cách xã hội tiến bộ.</li>
              </ul>
              </div>
              <div className="significance-card">
                <h2>Hạn chế</h2>
                   <ul>
                <li>Dựa nhiều vào đạo đức và trí tưởng tượng, thiếu cơ sở khoa học.</li>
                <li>Không tìm ra lực lượng cách mạng có thể thực hiện lý tưởng.</li>
                <li>

Chưa chỉ ra được con đường, phương pháp hiện thực hóa.
</li>
              
              </ul>
              </div>
              {/* <div className="significance-card">
                <h3>{labels.sections.section4.points.state.title}</h3>
                <p>{labels.sections.section4.points.state.content}</p>
              </div>
              <div className="significance-card">
                <h3>{labels.sections.section4.points.values.title}</h3>
                <p>{labels.sections.section4.points.values.content}</p>
              </div> */}
            </div>

            {/* <div className="final-quote">
              <blockquote>{labels.sections.section4.finalQuote}</blockquote>
            </div> */}
          </div>
           {/* Section 3 */}
        <section className="content-section">
          <div className="section-header">
            <span className="section-number">5</span>
            <h2> Ví dụ thực tiễn</h2>
          </div>

          <div className="content-grid">
              <div className="content-card">
                <h3>Một ví dụ tiêu biểu là Robert Owen ở Anh</h3>
                <ul>
                  <li>Ông là chủ xưởng dệt tại New Lanark (Scotland). Thay vì bóc lột công nhân như nhiều chủ xưởng khác, Owen thực hiện nhiều cải cách tiến bộ: giảm giờ làm, xây trường học miễn phí, xây nhà ở tốt hơn cho công nhân, cấm lao động trẻ em dưới 10 tuổi.</li>
                  <li>Ông còn thí nghiệm xây dựng các cộng đồng hợp tác ở Mỹ và Anh, nơi tài sản chung được chia sẻ và mọi người cùng nhau lao động.</li>
                  <li>Tuy nhiên, các cộng đồng này không tồn tại lâu dài vì thiếu cơ sở kinh tế vững chắc và sự ủng hộ rộng rãi của xã hội.</li>
                 

                </ul>
                
              </div>

        
            </div>
              <div className="final-quote">
              <blockquote>Dù thất bại, nhưng những thực nghiệm của Owen và các nhà tư tưởng khác đã để lại dấu ấn lớn, góp phần hình thành nền tảng tư tưởng ban đầu cho phong trào công nhân thế kỷ XIX, mở đường cho sự ra đời của Chủ nghĩa xã hội khoa học sau này.</blockquote>
            </div>
        </section>
            <div className="vietnam-section">
              <div className="info-card special">
            <h3>  Chủ nghĩa xã hội không tưởng là giai đoạn chuẩn bị về tư tưởng và tinh thần nhân văn cho phong trào công nhân và sự xuất hiện của Chủ nghĩa xã hội khoa học. Dù không thể trở thành hiện thực, CNXHKT đã góp phần gieo mầm khát vọng về một xã hội công bằng, nhân đạo, từ đó được Mác và Ăng-ghen kế thừa, phát triển thành hệ thống lý luận khoa học.</h3>
            </div>
            </div>
        </section>
        
      </div>
      
    </div>
  );
}
