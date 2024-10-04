"use client";
import { Card, Col, Row } from "antd";
import React from "react";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material";
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1200,
    },
  },
});
const inter = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const Upper: React.FC = () => (
  <div className="site-card-wrapper mb-3">
    <Row gutter={[25, 16]} className="justify-content-evenly">
      <Col span={8}>
        <Card
          className="w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "var(--mui-palette-background-paper)",
            color: "var(--mui-palette-text-primary)",
            boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.3), 0px 0px 5px 0px rgba(0,0,0,0.5)",
          }}>
          <h2
            style={{
              color: "#0A85D1",
              fontFamily: `${inter.style.fontFamily}`,
              fontWeight: `bold`,
              fontSize: "3rem",
            }}>
            1M+
          </h2>
          <p>community members</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          className="w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "var(--mui-palette-background-paper)",
            color: "var(--mui-palette-text-primary)",
            boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.3), 0px 0px 5px 0px rgba(0,0,0,0.5)",
          }}>
          <h2
            style={{
              color: "#0A85D1",
              fontFamily: `${inter.style.fontFamily}`,
              fontWeight: `bold`,
              fontSize: "3rem",
            }}>
            150+
          </h2>
          <p>community groups</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          className="w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "var(--mui-palette-background-paper)",
            color: "var(--mui-palette-text-primary)",
            boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.3), 0px 0px 5px 0px rgba(0,0,0,0.5)",
          }}>
          <h2
            style={{
              color: "#0A85D1",
              fontFamily: `${inter.style.fontFamily}`,
              fontWeight: `bold`,
              fontSize: "3rem",
            }}>
            50+
          </h2>
          <p>countries represented</p>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Upper;
