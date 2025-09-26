import React, { useState } from "react";
import { useSelector } from "react-redux";
import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
import { LANGUAGES } from "../../utils/constant";
import "./Minigamepage.css";

const Minigamepage = ({ onClose }) => {
    const language = useSelector((state) => state.language);

    // Lấy quizData theo ngôn ngữ
    const quizData =
        language === LANGUAGES.EN
            ? enTranslations.quiz.questions
            : viTranslations.quiz.questions;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (selectedValue) => {
        const correct =
            quizData[currentQuestion].options.find((opt) => opt.correct)?.value ===
            selectedValue;
        if (correct) setScore(score + 1);
        setSelectedAnswer(selectedValue);

        setTimeout(() => {
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
            }
        }, 4000);
    };

    if (showResult) {
        return (
            <div className="interactive-section">
                <h2>
                    {language === LANGUAGES.EN
                        ? enTranslations.quiz.resultTitle
                        : viTranslations.quiz.resultTitle}
                </h2>
                <p>
                    {language === LANGUAGES.EN
                        ? `Your score: ${score} / ${quizData.length}`
                        : `Điểm của bạn: ${score} / ${quizData.length}`}
                </p>
                <button
                    className="btn-play-again"
                    onClick={() => {
                        onClose();
                        setCurrentQuestion(0);
                        setScore(0);
                        setShowResult(false);
                        setSelectedAnswer(null);
                    }}
                >
                    {language === LANGUAGES.EN
                        ? enTranslations.quiz.playAgain
                        : viTranslations.quiz.playAgain}
                </button>
                {score === quizData.length && (
                    <p className="congrats">
                        🎉 {language === LANGUAGES.EN ? "Perfect Score!" : "Hoàn thành xuất sắc!"}
                    </p>
                )}
            </div>
        );
    }

    const currentQuiz = quizData[currentQuestion];

    return (
        <div className="interactive-section">
            <h2 className="quiz-title">
                {language === LANGUAGES.EN
                    ? `${enTranslations.quiz.quizTitle} - Question ${currentQuestion + 1}`
                    : `${viTranslations.quiz.quizTitle} - Câu ${currentQuestion + 1}`}
            </h2>

            <p className="question">{currentQuiz.question}</p>

            <div className="options">
                {currentQuiz.options.map((option) => {
                    const isSelected = selectedAnswer === option.value;
                    const isCorrect = option.correct;
                    return (
                        <div
                            key={option.value}
                            className={`option-item ${selectedAnswer
                                ? isCorrect
                                    ? "correct"
                                    : isSelected
                                        ? "wrong"
                                        : "disabled"
                                : ""
                                }`}
                            onClick={() => !selectedAnswer && handleAnswer(option.value)}
                        >
                            <span>
                                {option.value}. {option.text}
                            </span>
                            {isSelected && (
                                <span>{isCorrect ? "🎉" : "😢"}</span>
                            )}
                        </div>
                    );
                })}
            </div>

            {selectedAnswer && (
                <div className="explanation">
                    <p>
                        <strong>
                            {language === LANGUAGES.EN
                                ? enTranslations.quiz.answer
                                : viTranslations.quiz.answer}
                        </strong>
                        : {currentQuiz.options.find((opt) => opt.correct).text}
                    </p>
                    <p>
                        <strong>
                            {language === LANGUAGES.EN
                                ? enTranslations.quiz.explanation
                                : viTranslations.quiz.explanation}
                        </strong>
                        : {currentQuiz.explanation}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Minigamepage;
