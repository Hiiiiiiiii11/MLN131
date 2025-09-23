"use client"

import { useState, useEffect } from "react"
import "./Blogpage.css";

const HistoryBlog = () => {
  const [blogContent, setBlogContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentTopic, setCurrentTopic] = useState("Karl_Marx")

  // Danh sách các chủ đề lịch sử
  const historyTopics = [
    { id: "Karl_Marx", title: "Karl Marx", description: "Nhà tư tưởng vĩ đại của chủ nghĩa xã hội" },
    { id: "Friedrich_Engels", title: "Friedrich Engels", description: "Đồng sáng lập chủ nghĩa xã hội khoa học" },
    { id: "Vladimir_Lenin", title: "Vladimir Lenin", description: "Lãnh tụ cách mạng Nga và lý luận gia Marxist" },
    { id: "Ho_Chi_Minh", title: "Hồ Chí Minh", description: "Chủ tịch Hồ Chí Minh - Người anh hùng dân tộc" },
    {
      id: "Communist_Manifesto",
      title: "Tuyên ngôn Đảng Cộng sản",
      description: "Tác phẩm kinh điển của Marx và Engels",
    },
    { id: "Russian_Revolution", title: "Cách mạng Nga 1917", description: "Cuộc cách mạng thay đổi thế giới" },
  ]

  useEffect(() => {
    const fetchHistoryData = async () => {
      setLoading(true)
      setError(null)

      try {
        // Sử dụng Wikipedia API để lấy nội dung lịch sử thực tế
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${currentTopic}?redirect=true`)

        if (!response.ok) throw new Error("Không thể tải dữ liệu lịch sử")

        const data = await response.json()

        // Lấy thêm nội dung chi tiết
        const contentResponse = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${currentTopic}&prop=extracts&exintro=true&explaintext=true&exsectionformat=plain&origin=*`,
        )

        const contentData = await contentResponse.json()
        const pages = contentData.query.pages
        const pageId = Object.keys(pages)[0]
        const fullContent = pages[pageId]?.extract || data.extract

        setBlogContent({
          title: data.title,
          extract: data.extract,
          fullContent: fullContent,
          thumbnail: data.thumbnail?.source,
          description: data.description,
          url: data.content_urls?.desktop?.page,
        })
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchHistoryData()
  }, [currentTopic])

  if (loading) return <div className="blog-loading">Đang tải nội dung lịch sử...</div>
  if (error) return <div className="blog-error">Lỗi: {error}</div>

  return (
    <div className="history-blog-wrapper">
      <div className="topic-selector">
        <h2>Chọn chủ đề lịch sử:</h2>
        <div className="topic-grid">
          {historyTopics.map((topic) => (
            <button
              key={topic.id}
              className={`topic-card ${currentTopic === topic.id ? "active" : ""}`}
              onClick={() => setCurrentTopic(topic.id)}
            >
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="blog-container">
        <div className="blog-header">
          {blogContent?.thumbnail && (
            <div className="blog-thumbnail">
              <img src={blogContent.thumbnail || "/placeholder.svg"} alt={blogContent.title} />
            </div>
          )}
          <h1 className="blog-title">{blogContent?.title || "Nội dung lịch sử"}</h1>
          <p className="blog-description">{blogContent?.description}</p>
          <p className="blog-date">Cập nhật: {new Date().toLocaleDateString("vi-VN")}</p>
        </div>

        <div className="blog-content">
          <div className="content-summary">
            <h3>Tóm tắt:</h3>
            <p>{blogContent?.extract}</p>
          </div>

          <div className="content-full">
            <h3>Nội dung chi tiết:</h3>
            <p>{blogContent?.fullContent}</p>
          </div>

          {blogContent?.url && (
            <div className="source-link">
              <a href={blogContent.url} target="_blank" rel="noopener noreferrer">
                📖 Đọc thêm trên Wikipedia
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HistoryBlog
