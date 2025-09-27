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
    </div>
  );
}
