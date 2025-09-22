import React, { useState } from "react";
import "./Minigamepage.css";

const Minigamepage = ({ onClose }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [pollAnswer, setPollAnswer] = useState(null);

    // Danh sách câu hỏi
 const quizData = [
        {
            question: "CNXH 'không tưởng' nhấn mạnh điều gì?",
            options: [
                { text: "Quy luật kinh tế khách quan", value: "A" },
                { text: "Đạo đức & mô hình lý tưởng", value: "B", correct: true },
                { text: "Bạo lực cách mạng", value: "C" },
                { text: "Công nghệ", value: "D" },
            ],
            explanation: "CNXH 'không tưởng' tập trung vào lý tưởng đạo đức và các mô hình xã hội lý tưởng, do các nhà tư tưởng như Owen, Fourier đề xuất, thiếu cơ sở khoa học.",
        },
        {
            question: "Văn kiện nào đánh dấu bước ngoặt sang CNXHKH?",
            options: [
                { text: "Tư bản (Quyển I)", value: "A" },
                { text: "Utopia", value: "B" },
                { text: "Tuyên ngôn của Đảng Cộng sản (1848)", value: "C", correct: true },
                { text: "Tuyên ngôn Nhân quyền", value: "D" },
            ],
            explanation: "Tuyên ngôn của Đảng Cộng sản (1848) của Marx và Engels đánh dấu sự chuyển từ CNXH không tưởng sang CNXH khoa học.",
        },
        {
            question: "Chủ thể trung tâm của CNXHKH là:",
            options: [
                { text: "Trí thức", value: "A" },
                { text: "Quý tộc khai sáng", value: "B" },
                { text: "Giai cấp công nhân", value: "C", correct: true },
                { text: "Nông dân cá thể", value: "D" },
            ],
            explanation: "Giai cấp công nhân được xem là lực lượng trung tâm trong CNXHKH, dẫn dắt cách mạng xã hội.",
        },
        {
            question: "Công xã Paris (1871) cho bài học quan trọng nào?",
            options: [
                { text: "Thị trường tự điều tiết", value: "A" },
                { text: "Khả năng người lao động tự quản nhà nước", value: "B", correct: true },
                { text: "Bãi bỏ bầu cử", value: "C" },
                { text: "Kế hoạch hóa cứng nhắc", value: "D" },
            ],
            explanation: "Công xã Paris chứng minh người lao động có thể tự quản nhà nước, một mô hình tiên tiến của CNXHKH.",
        },
        {
            question: "Trong vận dụng ở Việt Nam, 'định hướng XHCN' của KTTT nhấn mạnh:",
            options: [
                { text: "Chỉ có sở hữu nhà nước", value: "A" },
                { text: "Tăng trưởng kèm công bằng, an sinh, vai trò kiến tạo của Nhà nước", value: "B", correct: true },
                { text: "Đóng cửa hội nhập", value: "C" },
                { text: "Bỏ qua pháp quyền", value: "D" },
            ],
            explanation: "Định hướng XHCN ở Việt Nam kết hợp tăng trưởng kinh tế với công bằng xã hội và vai trò quản lý của Nhà nước.",
        },
        // 5 câu hỏi mới
        {
            question: "Nhà tư tưởng nào được xem là người đặt nền móng cho CNXH không tưởng?",
            options: [
                { text: "Karl Marx", value: "A" },
                { text: "Friedrich Engels", value: "B" },
                { text: "Robert Owen", value: "C", correct: true },
                { text: "Vladimir Lenin", value: "D" },
            ],
            explanation: "Robert Owen là một trong những nhà tư tưởng đầu tiên của CNXH không tưởng, đề xuất các cộng đồng lý tưởng dựa trên đạo đức và hợp tác.",
        },
        {
            question: "CNXHKH khác CNXH không tưởng ở điểm nào quan trọng nhất?",
            options: [
                { text: "Sử dụng bạo lực thay vì lý tưởng", value: "A" },
                { text: "Dựa trên phân tích khoa học và thực tiễn kinh tế", value: "B", correct: true },
                { text: "Chỉ tập trung vào nông dân", value: "C" },
                { text: "Loại bỏ vai trò của giai cấp công nhân", value: "D" },
            ],
            explanation: "CNXHKH của Marx và Engels dựa trên phân tích khoa học về lịch sử và kinh tế, trong khi CNXH không tưởng chỉ dựa trên lý tưởng chủ quan.",
        },
        {
            question: "Tác phẩm nào của Marx và Engels được xem là nền tảng lý luận của CNXHKH?",
            options: [
                { text: "Utopia", value: "A" },
                { text: "Tư bản (Das Kapital)", value: "B" },
                { text: "Tuyên ngôn của Đảng Cộng sản", value: "C", correct: true },
                { text: "Nhà nước và Cách mạng", value: "D" },
            ],
            explanation: "Tuyên ngôn của Đảng Cộng sản (1848) là tài liệu quan trọng định hình CNXHKH với quan điểm cách mạng giai cấp.",
        },
        {
            question: "CNXH không tưởng chủ yếu xuất hiện trong thời kỳ nào?",
            options: [
                { text: "Thế kỷ 19", value: "A" },
                { text: "Thế kỷ 18", value: "B", correct: true },
                { text: "Thế kỷ 20", value: "C" },
                { text: "Thế kỷ 17", value: "D" },
            ],
            explanation: "CNXH không tưởng phát triển mạnh trong thế kỷ 18, với các tư tưởng của Rousseau, More, và các nhà cải cách xã hội.",
        },
        {
            question: "Mục tiêu cuối cùng của CNXHKH là gì?",
            options: [
                { text: "Xây dựng xã hội lý tưởng không có giai cấp", value: "A", correct: true },
                { text: "Tăng cường quyền lực cho tầng lớp quý tộc", value: "B" },
                { text: "Phát triển công nghệ tối đa", value: "C" },
                { text: "Bảo vệ chế độ tư bản", value: "D" },
            ],
            explanation: "CNXHKH hướng tới xã hội không giai cấp, nơi mọi người được giải phóng khỏi áp bức kinh tế và xã hội.",
        },
    ];

    // Hàm xử lý chọn đáp án
    const handleAnswer = (selectedValue) => {
        const correct = quizData[currentQuestion].options.find((opt) => opt.correct)?.value === selectedValue;
        if (correct) setScore(score + 1);
        setSelectedAnswer(selectedValue);
        setTimeout(() => {
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
            }
        }, 2000);
    };

    const handlePollSubmit = () => {
        alert(`Bạn đã chọn: ${pollAnswer}`);
    };

    if (showResult) {
        return (
            <div 
                className="interactive-section"
                style={{
                    maxWidth: '800px',
                    margin: '40px auto',
                    padding: '25px',
                    background: 'linear-gradient(135deg, #f5f7fa, #e3e8ee)',
                    borderRadius: '15px',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.1)',
                    fontFamily: "'Roboto', sans-serif",
                    position: 'relative',
                    overflow: 'hidden',
                    animation: 'fadeIn 0.6s ease-in-out',
                }}
            >
                <h2 
                    style={{
                        fontSize: '28px',
                        color: '#2c3e50',
                        marginBottom: '20px',
                        textAlign: 'center',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
                        animation: 'slideDown 0.6s ease-in-out',
                    }}
                >
                    Kết quả Mini-Quiz
                </h2>
                <p 
                    style={{
                        fontSize: '22px',
                        color: '#34495e',
                        textAlign: 'center',
                        padding: '15px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                        marginBottom: '20px',
                        fontWeight: 500,
                    }}
                >
                    Điểm của bạn: {score} / {quizData.length}
                </p>
                <button
                    onClick={() => {
                        onClose(); // Đóng popup
                        setCurrentQuestion(0);
                        setScore(0);
                        setShowResult(false);
                        setSelectedAnswer(null);
                        setPollAnswer(null);
                    }}
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        padding: '12px 25px',
                        fontSize: '16px',
                        color: '#fff',
                        background: 'linear-gradient(135deg, #2ecc71, #27ae60)', // Gradient xanh lá
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(46, 204, 113, 0.3)',
                        fontWeight: 600,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #27ae60, #219653)';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 18px rgba(46, 204, 113, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 12px rgba(46, 204, 113, 0.3)';
                    }}
                >
                    Chơi lại
                </button>
                {score === quizData.length && (
                    <p 
                        style={{
                            fontSize: '18px',
                            color: '#27ae60',
                            textAlign: 'center',
                            marginTop: '15px',
                            fontWeight: 600,
                            animation: 'bounceIn 0.8s ease-in-out',
                        }}
                    >
                        🎉 Chúc mừng bạn đã hoàn thành xuất sắc!
                    </p>
                )}
            </div>
        );
    }

    return (
        <div 
            className="interactive-section"
            style={{
                maxWidth: '800px',
                margin: '40px auto',
                padding: '25px',
                background: 'linear-gradient(135deg, #f5f7fa, #e3e8ee)',
                borderRadius: '15px',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.1)',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeIn 0.6s ease-in-out',
            }}
        >
            <h2 
                style={{
                    fontSize: '28px',
                    color: '#2c3e50',
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
                    animation: 'slideDown 0.6s ease-in-out',
                }}
            >
                Mini-Quiz - Câu {currentQuestion + 1}
            </h2>
            <p 
                className="question"
                style={{
                    fontSize: '20px',
                    color: '#34495e',
                    marginBottom: '20px',
                    textAlign: 'center',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                    animation: 'slideUp 0.6s ease-in-out',
                }}
            >
                {quizData[currentQuestion].question}
            </p>
            <div 
                className="options"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '15px',
                    marginBottom: '20px',
                }}
            >
                {quizData[currentQuestion].options.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => !selectedAnswer && handleAnswer(option.value)}
                        style={{
                            padding: '12px',
                            background: selectedAnswer ? (option.correct ? 'linear-gradient(135deg, #2ecc71, #27ae60)' : (selectedAnswer === option.value ? 'linear-gradient(135deg, #e74c3c, #c0392b)' : 'linear-gradient(135deg, #3498db, #2980b9)')) : 'linear-gradient(135deg, #3498db, #2980b9)',
                            borderRadius: '8px',
                            cursor: selectedAnswer ? 'not-allowed' : 'pointer',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 500,
                            textAlign: 'left',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(52, 152, 219, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            opacity: selectedAnswer && selectedAnswer !== option.value ? 0.6 : 1,
                        }}
                        onMouseEnter={(e) => {
                            if (!selectedAnswer) {
                                e.target.style.background = 'linear-gradient(135deg, #2980b9, #1f618d)';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 18px rgba(52, 152, 219, 0.3)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!selectedAnswer) {
                                e.target.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.2)';
                            }
                        }}
                    >
                        <span>{option.value}. {option.text}</span>
                        {selectedAnswer && selectedAnswer === option.value && (
                            <span style={{ fontSize: '16px', transition: 'all 0.3s ease' }}>
                                {option.correct ? ' 🎉 Chúc mừng!' : ' 😢'}
                            </span>
                        )}
                    </div>
                ))}
            </div>
            {selectedAnswer && (
                <div 
                    className="explanation"
                    style={{
                        marginTop: '20px',
                        padding: '15px',
                        background: '#fff',
                        borderLeft: '5px solid #3498db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        color: '#555',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                        animation: 'fadeIn 0.5s ease-in-out',
                    }}
                >
                    <p><strong>Đáp án:</strong> {quizData[currentQuestion].options.find((opt) => opt.correct).text}</p>
                    <p><strong>Giải thích:</strong> {quizData[currentQuestion].explanation}</p>
                </div>
            )}
        </div>
    );
};

export default Minigamepage;