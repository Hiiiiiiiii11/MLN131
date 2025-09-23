"use client"

import { useState, useEffect } from "react"

const historicalEvents = [
  {
    id: "plato",
    name: "Plato - Cộng hòa",
    year: "380 TCN",
    location: "Athens, Hy Lạp",
    coordinates: { x: 55, y: 45 },
    description: "Mô tả xã hội lý tưởng với phân chia giai cấp theo tài năng",
    color: "#8B4513",
    period: "ancient",
    icon: "🏛️",
    number: 1,
  },
  {
    id: "more",
    name: "Thomas More - Utopia",
    year: "1516",
    location: "London, Anh",
    coordinates: { x: 50, y: 35 },
    description: "Xã hội không tư hữu, mọi người bình đẳng",
    color: "#4A5568",
    period: "medieval",
    icon: "📚",
    number: 2,
  },
  {
    id: "campanella",
    name: "Campanella - Thành phố Mặt Trời",
    year: "1623",
    location: "Calabria, Ý",
    coordinates: { x: 52, y: 42 },
    description: "Mô hình cộng đồng lý tưởng với chế độ công hữu",
    color: "#4A5568",
    period: "medieval",
    icon: "☀️",
    number: 3,
  },
  {
    id: "saint-simon",
    name: "Saint-Simon",
    year: "1821",
    location: "Paris, Pháp",
    coordinates: { x: 51, y: 38 },
    description: "Nhấn mạnh vai trò khoa học, kỹ sư, nhà công nghiệp",
    color: "#2B6CB0",
    period: "modern",
    icon: "🔬",
    number: 4,
  },
  {
    id: "fourier",
    name: "Charles Fourier",
    year: "1808",
    location: "Besançon, Pháp",
    coordinates: { x: 51.5, y: 37 },
    description: 'Cộng đồng "phalanstère" sống chung, chia sẻ',
    color: "#2B6CB0",
    period: "modern",
    icon: "🏘️",
    number: 5,
  },
  {
    id: "owen",
    name: "Robert Owen",
    year: "1813",
    location: "New Lanark, Scotland",
    coordinates: { x: 49, y: 32 },
    description: "Cải cách xã hội qua các khu công nghiệp kiểu mẫu",
    color: "#2B6CB0",
    period: "modern",
    icon: "🏭",
    number: 6,
  },
  {
    id: "marx-engels",
    name: "Marx & Engels",
    year: "1848",
    location: "London, Anh",
    coordinates: { x: 50, y: 35 },
    description: "Tuyên ngôn Đảng Cộng sản - CNXH khoa học",
    color: "#DC2626",
    period: "scientific",
    icon: "⚡",
    number: 7,
  },
]

const periods = [
  { id: "all", name: "Tất cả", color: "#6B7280" },
  { id: "ancient", name: "Thời cổ đại", color: "#8B4513" },
  { id: "medieval", name: "Thời cận đại", color: "#4A5568" },
  { id: "modern", name: "Thế kỷ 18-19", color: "#2B6CB0" },
  { id: "scientific", name: "CNXH khoa học", color: "#DC2626" },
]

export default function InteractiveWorldMapEnhanced() {
  const [selectedPeriod, setSelectedPeriod] = useState("all")
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [hoveredEvent, setHoveredEvent] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filteredEvents =
    selectedPeriod === "all" ? historicalEvents : historicalEvents.filter((event) => event.period === selectedPeriod)

  const handleImageError = (e) => {
    console.log("[v0] Image failed to load, using fallback")
    e.currentTarget.src = "/world-map.png"
    setImageLoaded(true)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleEventClick = (event) => {
    setSelectedEvent(event)
  }

  const handleEventHover = (eventId) => {
    setHoveredEvent(eventId)
  }

  const handleEventLeave = () => {
    setHoveredEvent(null)
  }

  const handlePeriodClick = (periodId) => {
    setSelectedPeriod(periodId)
  }

  return (
    <div style={{ width: "100%", maxWidth: "100%", margin: "0 auto", padding: "16px" }}>
      {/* Period Filter Chips */}
      <div style={{ marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => handlePeriodClick(period.id)}
            style={{
              backgroundColor: selectedPeriod === period.id ? period.color : "transparent",
              color: selectedPeriod === period.id ? "white" : period.color,
              border: `2px solid ${period.color}`,
              borderRadius: "20px",
              padding: "8px 16px",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              if (selectedPeriod !== period.id) {
                e.target.style.backgroundColor = period.color
                e.target.style.color = "white"
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = `0 4px 12px ${period.color}40`
              }
            }}
            onMouseLeave={(e) => {
              if (selectedPeriod !== period.id) {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = period.color
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }
            }}
          >
            {period.name}
          </button>
        ))}
      </div>

      {/* Map Container */}
      <div
        style={{
          marginBottom: "24px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          transform: isLoaded ? "translateY(0)" : "translateY(20px)",
          opacity: isLoaded ? 1 : 0,
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ padding: 0, position: "relative" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://thuvienvector.vn/wp-content/uploads/2025/03/ban-do-the-gioi-png.jpg"
              alt="Bản đồ thế giới"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />

            {/* Event Markers */}
            {imageLoaded &&
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  style={{
                    position: "absolute",
                    left: `${event.coordinates.x}%`,
                    top: `${event.coordinates.y}%`,
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                    zIndex: 10,
                  }}
                  onClick={() => handleEventClick(event)}
                  onMouseEnter={() => handleEventHover(event.id)}
                  onMouseLeave={handleEventLeave}
                  title={`${event.name} - ${event.year} - ${event.location}: ${event.description}`}
                >
                  <div
                    style={{
                      position: "relative",
                      width: hoveredEvent === event.id ? "24px" : "20px",
                      height: hoveredEvent === event.id ? "24px" : "20px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Main marker */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        backgroundColor: event.color,
                        border: "3px solid white",
                        boxShadow: `0 4px 12px ${event.color}60`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        animation: "pulse 2s infinite",
                      }}
                    >
                      <span style={{ color: "white", fontSize: "12px" }}>📍</span>
                    </div>

                    {/* Year label */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-25px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        color: "white",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {event.year}
                    </div>
                  </div>
                </div>
              ))}

            {/* Info Panel */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(15px)",
                borderRadius: "12px",
                padding: "24px",
                minWidth: "250px",
                maxWidth: "300px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <h3 style={{ marginBottom: "8px", fontWeight: "bold", color: "#2D3748", fontSize: "20px" }}>
                🌍 Bản đồ Tư tưởng XHCN
              </h3>
              <p style={{ marginBottom: "16px", color: "#666", fontSize: "14px" }}>
                Click vào các điểm để xem chi tiết lịch sử
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#2B6CB0" }}>ℹ️</span>
                <span style={{ fontSize: "12px", color: "#666" }}>{filteredEvents.length} sự kiện được hiển thị</span>
              </div>
            </div>

            {/* Loading indicator */}
            {!imageLoaded && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h3>Đang tải bản đồ...</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Event Details */}
      {selectedEvent && (
        <div
          style={{
            marginBottom: "24px",
            borderLeft: `4px solid ${selectedEvent.color}`,
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "24px",
          }}
        >
          <h2 style={{ marginBottom: "8px", fontWeight: "bold", color: selectedEvent.color, fontSize: "24px" }}>
            {selectedEvent.name}
          </h2>
          <h3 style={{ marginBottom: "8px", fontSize: "18px", color: "#666" }}>
            {selectedEvent.year} - {selectedEvent.location}
          </h3>
          <p style={{ lineHeight: 1.6, fontSize: "16px" }}>{selectedEvent.description}</p>
        </div>
      )}

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          padding: "32px",
          position: "relative",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "28px",
            color: "#1a202c",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          🕰️ Dòng thời gian phát triển
        </h2>

        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          {/* Vertical Timeline Line */}
          <div
            style={{
              position: "absolute",
              left: "40px",
              top: "0",
              bottom: "0",
              width: "4px",
              background: "linear-gradient(to bottom, #667eea, #764ba2)",
              borderRadius: "2px",
              zIndex: 1,
            }}
          />

          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              style={{
                position: "relative",
                marginBottom: index === filteredEvents.length - 1 ? "0" : "32px",
                paddingLeft: "100px",
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Timeline Icon Circle */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: event.color,
                  border: "4px solid white",
                  boxShadow: `0 4px 12px ${event.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => handleEventClick(event)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)"
                  e.currentTarget.style.boxShadow = `0 6px 20px ${event.color}60`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = `0 4px 12px ${event.color}40`
                }}
              >
                {event.number}
              </div>

              {/* Event Card */}
              <div
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  padding: "20px",
                  transition: "all 0.3s ease",
                  border: `2px solid ${event.color}20`,
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
                onClick={() => handleEventClick(event)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.borderColor = `${event.color}60`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)"
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.borderColor = `${event.color}20`
                }}
              >
                {/* Icon Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: `${event.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  {event.icon}
                </div>

                <div style={{ paddingRight: "50px" }}>
                  <h3
                    style={{
                      fontWeight: "bold",
                      marginBottom: "8px",
                      fontSize: "20px",
                      color: event.color,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {event.name}
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "12px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    📅 {event.year} • 📍 {event.location}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#4a5568",
                    }}
                  >
                    {event.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "60px",
                    height: "4px",
                    backgroundColor: event.color,
                    borderRadius: "0 4px 0 0",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
