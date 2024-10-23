'use client'
import React from 'react'; import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { CardBody } from "react-bootstrap";
import { Select, MenuItem, InputLabel } from "@mui/material";

import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ width: "100%", height: "100%" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const RightSide01 = () => {
  const [value, setValue] = React.useState(0);
  // Handle Tab change
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", py: 0, height: '100%' }}>
        <Tabs
          style={{ overflow: "auto" }}
          value={value}
          orientation="horizontal"
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons={false}
          aria-label="horizontal scrollable prevent tabs example"
        >
          <Tab label="Data Collection" {...a11yProps(0)} />
          
          <Tab label="Comments" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </>
  )
}

export default RightSide01