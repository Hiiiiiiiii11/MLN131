"use client"

import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import enTranslations from "../../translations/en.json"
import viTranslations from "../../translations/vn.json"
import { LANGUAGES } from "../../utils/constant"

export default function InteractiveWorldMapEnhanced() {
  const language = useSelector((state) => state.language)
  const t =
    language === LANGUAGES.EN
      ? enTranslations.interactiveWorldMap
      : viTranslations.interactiveWorldMap

  const [selectedPeriod, setSelectedPeriod] = useState("all")
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [hoveredEvent, setHoveredEvent] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  const periods = t.periods
  const historicalEvents = t.historicalEvents

  const filteredEvents =
    selectedPeriod === "all"
      ? historicalEvents
      : historicalEvents.filter((e) => e.period === selectedPeriod)

  const handleImageLoad = () => setImageLoaded(true)
  const handleImageError = (e) => {
    e.currentTarget.src = "/world-map.png"
    setImageLoaded(true)
  }

  return (
    <div style={{ width: "100%", maxWidth: "100%", margin: "0 auto", padding: "16px" }}>
      {/* Period Filter */}
      <div
        style={{
          marginBottom: "24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
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
            }}
            onMouseEnter={(e) => {
              if (selectedPeriod !== period.id) {
                e.target.style.backgroundColor = period.color
                e.target.style.color = "white"
                e.target.style.transform = "translateY(-2px)"
              }
            }}
            onMouseLeave={(e) => {
              if (selectedPeriod !== period.id) {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = period.color
                e.target.style.transform = "translateY(0)"
              }
            }}
          >
            {period.name}
          </button>
        ))}
      </div>

      {/* Map */}
      <div
        style={{
          marginBottom: "24px",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        <img
          src="https://thuvienvector.vn/wp-content/uploads/2025/03/ban-do-the-gioi-png.jpg"
          alt="World Map"
          style={{
            width: "100%",
            height: "500px",
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
              }}
              onClick={() => setSelectedEvent(event)}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              title={`${event.name} - ${event.year} - ${event.location}: ${event.description}`}
            >
              <div
                style={{
                  width: hoveredEvent === event.id ? "24px" : "20px",
                  height: hoveredEvent === event.id ? "24px" : "20px",
                  borderRadius: "50%",
                  backgroundColor: event.color,
                  border: "3px solid white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 12px ${event.color}60`,
                  animation: "pulse 2s infinite",
                  transition: "all 0.3s ease",
                }}
              >
                📍
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
            padding: "16px",
            minWidth: "200px",
          }}
        >
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>{t.title}</h3>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>{t.clickInfo}</p>
          <p style={{ fontSize: "12px", color: "#666" }}>{t.eventsCount.replace("{count}", filteredEvents.length)}</p>
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
            padding: "16px",
          }}
        >
          <h2 style={{ color: selectedEvent.color }}>{selectedEvent.name}</h2>
          <h4 style={{ color: "#666" }}>
            {selectedEvent.year} - {selectedEvent.location}
          </h4>
          <p>{selectedEvent.description}</p>
        </div>
      )}

      {/* Timeline */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "32px" }}>{t.timelineTitle}</h2>
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "40px",
              top: "0",
              bottom: "0",
              width: "4px",
              background: "linear-gradient(to bottom, #667eea, #764ba2)",
              borderRadius: "2px",
              zIndex: 0,
            }}
          />

          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              style={{
                position: "relative",
                marginBottom: index === filteredEvents.length - 1 ? "0" : "32px",
                paddingLeft: "100px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Timeline circle */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: event.color,
                  border: "4px solid white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedEvent(event)}
              >
                {event.number}
              </div>

              {/* Event card */}
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  padding: "16px",
                  width: "100%",
                }}
                onClick={() => setSelectedEvent(event)}
              >
                <h3 style={{ color: event.color, marginBottom: "4px" }}>{event.name}</h3>
                <p style={{ fontSize: "12px", color: "#666" }}>
                  📅 {event.year} • 📍 {event.location}
                </p>
                <p style={{ fontSize: "14px", color: "#4a5568" }}>{event.description}</p>
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
      `}</style>
    </div>
  )
}
