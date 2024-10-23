"use client";
import React, { useState } from "react";
import Upper from "./Upperside";
import Bottom from "./BottomSide";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container } from "react-bootstrap";

// TabPanel component to render content for each tab
const TabPanel = (props: { children?: React.ReactNode; index: number; value: number }) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

// Accessibility props for tabs
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Side = () => {
  // State to track the active tab
  const [value, setValue] = useState(0);

  // Handle tab change
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      {/* Tabs Component */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "20px" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Section" {...a11yProps(0)} />
          <Tab label="Upper Section" {...a11yProps(1)} />
          <Tab label="Bottom Section" {...a11yProps(1)} />
          {/* Add more tabs if needed */}
        </Tabs>
      </Box>

      {/* TabPanels for each section */}
      <TabPanel value={value} index={0}>
        <Upper />
        <Bottom />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Upper />
        
      </TabPanel>
      <TabPanel value={value} index={2}>
     
        <Bottom />
      </TabPanel>

      {/* You can add more TabPanels here for additional containers */}
    </Container>
  );
};

export default Side;
