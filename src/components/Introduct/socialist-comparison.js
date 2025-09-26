import { useSelector } from "react-redux"
import enTranslations from "../../translations/en.json"
import viTranslations from "../../translations/vn.json"
import { LANGUAGES } from "../../utils/constant"
import "./Introduction.css"

const SocialistComparison = () => {
  const language = useSelector((state) => state.language)
  const labels =
    language === LANGUAGES.EN ? enTranslations.socialistComparison : viTranslations.socialistComparison

  return (
    <div className="introduction-container">
      <div className="header-section">
        <h2 className="subtitle">{labels.subtitle}</h2>
      </div>

      <div className="content-section">
        <div className="comparison-table">
          <table className="comparison-table-content">
            <thead>
              <tr>
                <th className="criteria-header">Tiêu chí</th>
                <th className="utopian-header">{language === LANGUAGES.EN ? "Utopian Socialism" : "CNXH Không tưởng"}</th>
                <th className="scientific-header">{language === LANGUAGES.EN ? "Scientific Socialism" : "CNXH Khoa học"}</th>
              </tr>
            </thead>
            <tbody>
              {labels.criteria.map((row, index) => (
                <tr key={index}>
                  <td className="criteria-cell"><strong>{row.title}</strong></td>
                  <td className="utopian-cell">{row.utopian}</td>
                  <td className="scientific-cell">{row.scientific}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SocialistComparison
