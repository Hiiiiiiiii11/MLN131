import "./Introduction.css"

const SocialistComparison = () => {
  return (
    <div className="introduction-container">
      <div className="header-section">
        <h2 className="subtitle">2. So sánh CNXH Không tưởng và CNXH Khoa học</h2>
      </div>

      <div className="content-section">
        <div className="comparison-table">
          <table className="comparison-table-content">
            <thead>
              <tr>
                <th className="criteria-header">Tiêu chí</th>
                <th className="utopian-header">CNXH Không tưởng</th>
                <th className="scientific-header">CNXH Khoa học</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="criteria-cell">
                  <strong>Thời kỳ hình thành</strong>
                </td>
                <td className="utopian-cell">
                  Đầu thế kỷ XIX, trong bối cảnh chủ nghĩa tư bản mới phát triển, giai cấp công nhân chưa trưởng thành.
                </td>
                <td className="scientific-cell">
                  Giữa thế kỷ XIX (sau 1848), khi giai cấp công nhân đã hình thành, đấu tranh mạnh mẽ.
                </td>
              </tr>
              <tr>
                <td className="criteria-cell">
                  <strong>Cơ sở lý luận</strong>
                </td>
                <td className="utopian-cell">Xuất phát từ lý tưởng đạo đức, lòng nhân ái, khát vọng công bằng.</td>
                <td className="scientific-cell">
                  Dựa trên chủ nghĩa duy vật lịch sử và duy vật biện chứng; phân tích khoa học quy luật phát triển xã
                  hội.
                </td>
              </tr>
              <tr>
                <td className="criteria-cell">
                  <strong>Mục tiêu</strong>
                </td>
                <td className="utopian-cell">Mơ ước xây dựng xã hội công bằng, bình đẳng, bác ái.</td>
                <td className="scientific-cell">
                  Xây dựng xã hội cộng sản chủ nghĩa thông qua đấu tranh giai cấp và cách mạng vô sản.
                </td>
              </tr>
              <tr>
                <td className="criteria-cell">
                  <strong>Phương pháp</strong>
                </td>
                <td className="utopian-cell">
                  Đề xuất mô hình lý tưởng (cộng đồng chung sống, phân chia công bằng…) nhưng không có cách thức thực
                  hiện cụ thể.
                </td>
                <td className="scientific-cell">
                  Gắn với phong trào công nhân, đấu tranh chính trị, cách mạng xã hội, tổ chức đảng cách mạng.
                </td>
              </tr>
              <tr>
                <td className="criteria-cell">
                  <strong>Đại diện tiêu biểu</strong>
                </td>
                <td className="utopian-cell">Henri de Saint-Simon, Charles Fourier, Robert Owen.</td>
                <td className="scientific-cell">Karl Marx, Friedrich Engels.</td>
              </tr>
              <tr>
                <td className="criteria-cell">
                  <strong>Hạn chế / Ưu điểm</strong>
                </td>
                <td className="utopian-cell">
                  <strong>Ưu điểm:</strong> khơi gợi khát vọng công bằng, chỉ ra bất công của tư bản.
                  <br />
                  <strong>Hạn chế:</strong> thiếu cơ sở khoa học, không khả thi trong thực tiễn.
                </td>
                <td className="scientific-cell">
                  <strong>Ưu điểm:</strong> khoa học, gắn với thực tiễn phong trào công nhân, định hướng cách mạng.
                  <br />
                  <strong>Hạn chế:</strong> cần bổ sung, phát triển qua thực tiễn lịch sử.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SocialistComparison
