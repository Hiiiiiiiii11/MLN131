import React from "react";
import { Timeline, Card, Table, Tag, Typography } from "antd";

import {
  BulbOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import "./Infographic.css";
const { Title, Paragraph } = Typography;
const Inforgraphic = () => {
  // Dữ liệu bảng so sánh
  const dataSource = [
    {
      key: "1",
      aspect: "Thời kỳ hình thành",
      utopian: "Đầu thế kỷ XIX, trong bối cảnh chủ nghĩa tư bản mới phát triển, giai cấp công nhân chưa trưởng thành.",
      scientific: "Giữa thế kỷ XIX (sau 1848), khi giai cấp công nhân đã hình thành, đấu tranh mạnh mẽ.",
    },
    {
      key: "2",
      aspect: "Cơ sở lý luận",
      utopian: "Ý chí, đạo đức, mơ ước về xã hội tốt đẹp",
      scientific: "Quy luật lịch sử–xã hội, duy vật lịch sử, đấu tranh giai cấp",
    },
    {
      key: "3",
      aspect: "Phương pháp",
      utopian: "Thiết kế “mô hình lý tưởng”, thuyết phục tầng lớp trên",
      scientific:
        "Phân tích khoa học, tổ chức lực lượng công nhân, cách mạng xã hội",
    },
    {
      key: "4",
      aspect: "Chủ thể",
      utopian: "Các “nhà cải cách” nhân đạo",
      scientific: "Giai cấp công nhân liên minh với các lực lượng lao động khác",
    },
    {
      key: "5",
      aspect: "Mục tiêu",
      utopian: "Công bằng, bác ái, hợp tác",
      scientific:
        "Xóa bỏ áp bức bóc lột, thiết lập CNXH/CSC bằng lực lượng hiện thực",
    },
    {
      key: "6",
      aspect: "Cách đạt được",
      utopian: "Thử nghiệm cộng đồng, kêu gọi lương tri",
      scientific:
        "Tổ chức chính trị, đấu tranh, nắm chính quyền, cải biến QHSX",
    },
    {
      key: "7",
      aspect: "Hạn chế/Ưu điểm",
      utopian: "Nhân văn nhưng thiếu khả thi, thiếu quy luật",
      scientific:
        "Tính khoa học, khả thi lịch sử; vẫn cần vận dụng sáng tạo theo thời đại",
    },
    {
      key: "8",
      aspect: "Di sản",
      utopian: "Gợi ý về công bằng, phúc lợi",
      scientific:
        "Khung lý luận – phương pháp cho phong trào công nhân hiện đại",
    },
  ];

  const columns = [
    { title: "Tiêu chí", dataIndex: "aspect", key: "aspect" },
    {
      title: (
        <>
          <BulbOutlined style={{ color: "orange" }} /> CNXH không tưởng
        </>
      ),
      dataIndex: "utopian",
      key: "utopian",
      render: (text) => <Tag color="volcano">{text}</Tag>,
    },
    {
      title: (
        <>
          <FundProjectionScreenOutlined style={{ color: "blue" }} /> CNXH khoa học
        </>
      ),
      dataIndex: "scientific",
      key: "scientific",
      render: (text) => <Tag color="blue">{text}</Tag>,
    },
  ];

  return (
    <div className="infographic-page">
      <div className="infographic-intro">
        <Card className="intro-card">
          <Title level={1}>Infographic: CNXH Không tưởng & CNXH Khoa học</Title>
          <Paragraph>
            Chủ nghĩa xã hội (CNXH) đã trải qua nhiều giai đoạn phát triển. Từ những
            ước mơ lý tưởng của các nhà tư tưởng nhân đạo thời kỳ đầu, đến lý luận
            khoa học của Karl Marx và Friedrich Engels, CNXH dần trở thành một
            phong trào xã hội có cơ sở lý luận và phương pháp đấu tranh rõ ràng.
          </Paragraph>
        </Card>
      </div>
      <div className="infographic-container">

        {/* Bảng so sánh */}
        <div className="infographic-comparison">
          <Card
            title="So sánh CNXH không tưởng vs CNXH khoa học"
            className="compare-card"
            style={{ minWidth: 1200 }}
          >
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered
            />
          </Card>
        </div>
        <div className="infographic-timeline">
          {/* Timeline */}
          <Card
            title="Timeline: từ CNXH không tưởng → CNXH khoa học"
            className="timeline-card"
            style={{ minWidth: 1200 }}
          >
            <Timeline mode="left">
              <Timeline.Item label="1516">
                Utopia (Thomas More): mầm mống tư tưởng bình đẳng
              </Timeline.Item>
              <Timeline.Item label="Cuối TK XVIII – đầu XIX">
                Saint-Simon, Fourier, Owen: mô hình cộng đồng lý tưởng → CNXH không tưởng
              </Timeline.Item>
              <Timeline.Item label="1848">
                Tuyên ngôn của Đảng Cộng sản (Marx & Engels): khai sinh CNXH khoa học
              </Timeline.Item>
              <Timeline.Item label="1864–1876">
                Quốc tế I; 1867 – Tư bản (Quyển I)
              </Timeline.Item>
              <Timeline.Item label="1871">
                Công xã Paris: thực nghiệm chính quyền của người lao động
              </Timeline.Item>
              <Timeline.Item label="1889">
                Quốc tế II; Ngày Quốc tế Lao động 1/5
              </Timeline.Item>
              <Timeline.Item label="Thế kỷ XX">
                Phong trào công nhân toàn cầu; chuẩn mực lao động, nhà nước phúc lợi, cách mạng XHCN ở một số nước
              </Timeline.Item>
              <Timeline.Item label="Hiện đại">
                Phong trào lao động trong bối cảnh số hóa, toàn cầu hoá, kinh tế nền tảng
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </div>
      <div className="infographic-conclusion">
        <Card className="conclusion-card">
          <Title level={3}>Kết luận</Title>
          <Paragraph>
            CNXH không tưởng để lại những giá trị nhân văn và lý tưởng về công bằng,
            trong khi CNXH khoa học cung cấp cơ sở lý luận, phương pháp và chiến
            lược để phong trào công nhân có thể hiện thực hóa các mục tiêu đó. Cả
            hai đều đóng vai trò quan trọng trong tiến trình lịch sử nhân loại.
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Inforgraphic;
