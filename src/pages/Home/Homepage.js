import React from "react";
import { useSelector } from "react-redux";

import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
import { LANGUAGES } from "../../utils/constant";

import "./style.css";
import InteractiveWorldMap from "../../components/Map/interactive-world-map";

const Home = () => {
  const language = useSelector((state) => state.language);

  // ✅ lấy labels theo ngôn ngữ
  const labels =
    language === LANGUAGES.EN ? enTranslations.home : viTranslations.home;

  return (
    <div className="home-container">
      {/* Header */}
      <div className="home-header-section">
        <h1 className="home-main-title">{labels.mainTitle}</h1>
        <p className="home-subtitle">{labels.subtitle}</p>
      </div>

     {/* Karl Marx */}
<div className="home-content-with-image">
  <a href="https://en.wikipedia.org/wiki/Karl_Marx" target="_blank" rel="noopener noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/330px-Karl_Marx_001.jpg"
      alt="Karl Marx"
      className="home-side-image"
    />
  </a>
  <div className="home-text-content">
    <h2>{labels.marxTitle}</h2>
    <p>{labels.marxContent}</p>
  </div>
</div>

{/* Engels */}
<div className="home-content-with-image">
  <a href="https://en.wikipedia.org/wiki/Friedrich_Engels" target="_blank" rel="noopener noreferrer">
    <img
      src="https://images.hcmcpv.org.vn/res/news/2021/11/28-11-2021-friedrich-engels-lanh-tu-vi-dai-cua-giai-cap-cong-nhan-va-nhung-nguoi-cong-san-511B6A81.jpg"
      alt="Friedrich Engels"
      className="home-side-image"
    />
  </a>
  <div className="home-text-content">
    <h2>{labels.engelsTitle}</h2>
    <p>{labels.engelsContent}</p>
  </div>
</div>

{/* Lenin */}
<div className="home-content-with-image">
  <a href="https://en.wikipedia.org/wiki/Vladimir_Lenin" target="_blank" rel="noopener noreferrer">
    <img
      src="https://tulieuvankien.dangcongsan.vn/Uploads/2018/5/5/2/lenin-lenin.jpg"
      alt="Lenin"
      className="home-side-image"
    />
  </a>
  <div className="home-text-content">
    <h2>{labels.leninTitle}</h2>
    <p>{labels.leninContent}</p>
  </div>
</div>

      {/* Section 1 */}
      <div className="home-text-content">
        <h2>{labels.section1Title}</h2>
        <p>{labels.section1Content}</p>

        <ul className="timeline-list">
          <li className="timeline-period">
            <strong>{labels.timeline.ancient.title}:</strong>
            <ul className="timeline-details">
              {labels.timeline.ancient.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </li>

          <li className="timeline-period">
            <strong>{labels.timeline.modern.title}:</strong>
            <ul className="timeline-details">
              {labels.timeline.modern.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </li>

          <li className="timeline-period">
            <strong>{labels.timeline["18_19"].title}:</strong>
            <ul className="timeline-details">
              {labels.timeline["18_19"].items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* Map */}
      <div
        className="home-content-with-image socialist-history-section"
        style={{ order: -1 }}
      >
        <div
          className="home-side-image"
          style={{
            width: "100%",
            height: "auto",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
          }}
        >
          <InteractiveWorldMap />
        </div>
      </div>
    </div>
  );
};

export default Home;
