"use client"

import { useState } from "react"
import "./Introduction.css";
import SocialistComparison from "./socialist-comparison"
import { useSelector } from "react-redux";
import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
import { LANGUAGES } from "../../utils/constant";
import image6 from '../../assets/image.png';
import image7 from '../../assets/image (3).png';
import image8 from '../../assets/image (5).png';
import image9 from '../../assets/image (1).png';
import image10 from '../../assets/image (8).png';



const Introduction = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const language = useSelector((state) => state.language);
  const labels =
    language === LANGUAGES.EN ? enTranslations.introduction : viTranslations.introduction;

  const characters = [
    {
      name: "Henri de Saint-Simon",
      image: image6,
    },
    {
      name: "charles fourier (Pháp)",
      image: image7,
    },
    { name: "Robert Owen (Anh).", 
      image: image8, },
    {
      name: "Karl Marx",
      image: image9,
    },
    {
      name: "Friedrich Engels",
      image: image10,
    },
  ];

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="introduction-container">
      <div className="header-section">
        <h2 className="subtitle">{labels.subtitle}</h2>
      </div>
      <div className="content-section">
        <p>{labels.paragraph1}</p>
        <p>{labels.paragraph2}</p>
        <h3>{labels.diffTitle}</h3>
        <p>{labels.diff1}</p>
        <p>{labels.diff2}</p>
        <h3>{labels.roleTitle}</h3>
        <p>{labels.roleText}</p>
      </div>

      <div className="two-column-layout">
        {/* Cột trái: Utopian */}
        <div className="column left-column">
          <p className="caption">{labels.captionUtopian}</p>
          <div className="card-group">
            {characters.slice(0, 3).map((char, index) => (
              <div key={index} className="mini-card" onClick={() => setSelectedCard(char)}>
                <img src={char.image} alt={char.name} className="card-image" />
                <span className="card-name">{char.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cột phải: Scientific */}
        <div className="column right-column">
          <p className="caption">{labels.captionScientific}</p>
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

      <SocialistComparison />

      {/* Modal */}
      {selectedCard && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedCard.image} alt={selectedCard.name} className="modal-image" />
            <h3 className="modal-name">{selectedCard.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Introduction;
