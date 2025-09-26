"use client"

import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import enTranslations from "../../translations/en.json"
import viTranslations from "../../translations/vn.json"
import { LANGUAGES } from "../../utils/constant"
import "./Blogpage.css"

const HistoryBlog = () => {
  const language = useSelector((state) => state.language)
  const labels =
    language === LANGUAGES.EN ? enTranslations.blogpage : viTranslations.blogpage

  const [blogContent, setBlogContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentTopic, setCurrentTopic] = useState("Karl_Marx")

  const historyTopics = Object.keys(labels.topics).map((id) => ({
    id,
    ...labels.topics[id]
  }))

  useEffect(() => {
    const fetchHistoryData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${currentTopic}?redirect=true`)
        if (!response.ok) throw new Error("Cannot load history data")

        const data = await response.json()

        const contentResponse = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${currentTopic}&prop=extracts&exintro=true&explaintext=true&exsectionformat=plain&origin=*`
        )
        const contentData = await contentResponse.json()
        const pages = contentData.query.pages
        const pageId = Object.keys(pages)[0]
        const fullContent = pages[pageId]?.extract || data.extract

        setBlogContent({
          title: data.title,
          extract: data.extract,
          fullContent,
          thumbnail: data.thumbnail?.source,
          description: data.description,
          url: data.content_urls?.desktop?.page
        })
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchHistoryData()
  }, [currentTopic])

  if (loading) return <div className="blog-loading">{labels.loading}</div>
  if (error) return <div className="blog-error">{labels.error} {error}</div>

  return (
    <div className="history-blog-wrapper">
      <div className="topic-selector">
        <h2>{labels.selectTopic}</h2>
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
          <h1 className="blog-title">{blogContent?.title}</h1>
          <p className="blog-description">{blogContent?.description}</p>
          <p className="blog-date">{labels.updatedAt} {new Date().toLocaleDateString(language === LANGUAGES.EN ? "en-US" : "vi-VN")}</p>
        </div>

        <div className="blog-content">
          <div className="content-summary">
            <h3>{labels.summaryTitle}</h3>
            <p>{blogContent?.extract}</p>
          </div>

          <div className="content-full">
            <h3>{labels.fullContentTitle}</h3>
            <p>{blogContent?.fullContent}</p>
          </div>

          {blogContent?.url && (
            <div className="source-link">
              <a href={blogContent.url} target="_blank" rel="noopener noreferrer">
                {labels.readMore}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HistoryBlog
