"use client";
import { Card, Col, Row } from "antd";
import React from "react";
import BasicTabs from "./LeftSideTabs";
import { CardBody } from "react-bootstrap";
import RightSideTabs from "./RightSideTabs";

const Bottom: React.FC = () => (
  <div className="site-card-wrapper">
    <Row gutter={16} className="justify-content-evenly">
      <Col span={12}>
        <CardBody
          className="w-100"
          style={{
            height: "57.6vh",
            border: "1px solid #fff",
            background: "var(--mui-palette-background-paper)",
            color: "var(--mui-palette-text-primary)",
            boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.3), 0px 0px 5px 0px rgba(0,0,0,0.4)",
            borderRadius: "8px",
            padding: "5px 10px",
          }}>
          <BasicTabs />
        </CardBody>
      </Col>
      <Col span={12}>
        <CardBody
          className="w-100 d-flex flex-column justify-content-between position-relative"
          style={{
            height: "57.6vh",
            border: "1px solid #fff",
            background: "var(--mui-palette-background-paper)",
            color: "var(--mui-palette-text-primary)",
            boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.3), 0px 0px 5px 0px rgba(0,0,0,0.4)",
            borderRadius: "8px",
            padding: "5px 10px",
          }}>
          <RightSideTabs />
        </CardBody>
      </Col>
    </Row>
  </div>
);

export default Bottom;
