import React, { useState } from "react";

const CozeChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Nút avatar nhỏ */}
      {!isOpen && (
        <img
          src="https://your-bot-avatar-url.png" // avatar bot bạn set
          alt="Chatbot"
          onClick={() => setIsOpen(true)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            cursor: "pointer",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        />
      )}

      {/* Khung chat */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "-30px",
              right: "0",
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <iframe
            src="https://coze.com/chat/embed?bot_id=7556392002892365842"
            width="400"
            height="600"
            style={{
              border: "none",
              borderRadius: "12px",
            }}
            title="Coze Chatbot"
          />
        </div>
      )}
    </div>
  );
};

export default CozeChatWidget;
