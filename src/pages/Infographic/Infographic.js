import React from "react";
import { useSelector } from "react-redux";
import { Timeline, Card, Table, Typography } from "antd";
import {
  BulbOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";

import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
import { LANGUAGES } from "../../utils/constant";
import "./Infographic.css";

const { Title, Paragraph } = Typography;

const Infographic = () => {
  const language = useSelector((state) => state.language);
  const labels =
    language === LANGUAGES.EN
      ? enTranslations.infographic
      : viTranslations.infographic;

  // Table data lấy từ labels
  const dataSource = labels.table.map((item, idx) => ({
    key: idx,
    aspect: item.aspect,
    utopian: item.utopian,
    scientific: item.scientific,
  }));

  const columns = [
    { title: "Tiêu chí", dataIndex: "aspect", key: "aspect" },
    {
      title: (
        <>
          <BulbOutlined style={{ color: "orange" }} />{" "}
          {language === LANGUAGES.EN ? "Utopian Socialism" : "CNXH không tưởng"}
        </>
      ),
      dataIndex: "utopian",
      key: "utopian",
      render: (text) => <div className="table-cell utopian-cell">{text}</div>,
    },
    {
      title: (
        <>
          <FundProjectionScreenOutlined style={{ color: "blue" }} />{" "}
          {language === LANGUAGES.EN
            ? "Scientific Socialism"
            : "CNXH khoa học"}
        </>
      ),
      dataIndex: "scientific",
      key: "scientific",
      render: (text) => (
        <div className="table-cell scientific-cell">{text}</div>
      ),
    },
  ];

  return (
    <div className="infographic-page">
      <div className="infographic-decoration">
        <h2 className="infographic-subtitle">
          <span>{labels.subtitle}</span>
        </h2>
      </div>

      <div className="infographic-intro">
        <Card>
          <Paragraph className="decoration-line">{labels.intro}</Paragraph>
        </Card>
      </div>

      <div className="infographic-container">
        {/* Bảng so sánh */}
        <div className="infographic-comparison">
          <Card
            title={labels.comparisonTitle}
            className="compare-card"
            style={{ minWidth: 750 }}
          >
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered
            />
          </Card>
        </div>

        {/* Timeline */}
        <div className="infographic-timeline">
          <Card title={labels.timelineTitle} className="timeline-card">
            <Timeline mode="left">
              {labels.timeline.map((item, idx) => (
                <Timeline.Item label={item.year} key={idx}>
                  {item.event}
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </div>
      </div>

      <div className="infographic-conclusion">
        <Card className="conclusion-card">
          <Title level={3}>{labels.conclusionTitle}</Title>
          <Paragraph>{labels.conclusionText}</Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Infographic;
