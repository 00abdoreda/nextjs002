"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  // State for all input fields across tabs
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    referringDoctor: "",
    dateReceived: "",
    department: "",
    dateReportGenerated: "",
    organSite: "",
    typeOfSpecimen: "",
    diagnosis: "",
    comments: "",
    recommendations: "",
    clinicalData: "",
  });

  // Handle Tab change
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Handle TextField value changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Select dropdown change
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFormData({ ...formData, clinicalData: event.target.value as string });
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", py: 0 }}>
        <Tabs
          style={{ overflow: "auto" }}
          value={value}
          orientation="horizontal"
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons
          aria-label="horizontal scrollable prevent tabs example"
        >
          <Tab label="Patient Data" {...a11yProps(0)} />
          <Tab label="Sharable Information" {...a11yProps(1)} />
          <Tab label="Specimen Information" {...a11yProps(2)} />
          <Tab label="Clinical Data" {...a11yProps(3)} />
          <Tab label="Gross Picture" {...a11yProps(4)} />
          <Tab label="Microscopic Picture" {...a11yProps(5)} />
          <Tab label="Diagnosis" {...a11yProps(6)} />
          <Tab label="Comments" {...a11yProps(7)} />
          <Tab label="Recommendations" {...a11yProps(8)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField
            id="outlined-basic"
            label="Patient Name"
            variant="outlined"
            className="col-6"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Patient Age"
            variant="outlined"
            className="col-5"
            name="patientAge"
            value={formData.patientAge}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Referring Doctor"
            variant="outlined"
            className="col-6"
            name="referringDoctor"
            value={formData.referringDoctor}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Date Received"
            variant="outlined"
            className="col-5"
            name="dateReceived"
            value={formData.dateReceived}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Department"
            variant="outlined"
            className="col-6"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Date Report Generated"
            variant="outlined"
            className="col-5"
            name="dateReportGenerated"
            value={formData.dateReportGenerated}
            onChange={handleInputChange}
          />
        </CardBody>
      </CustomTabPanel>

      {/* Sharable Information Tab */}
      <CustomTabPanel value={value} index={1}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly" style={{ maxHeight: "300px", overflowY: "auto" }}>
          <TextField
            id="outlined-basic"
            label="Information"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            className="col-12"
          />
        </CardBody>
      </CustomTabPanel>

      {/* Specimen Information Tab */}
      <CustomTabPanel value={value} index={2}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField
            id="outlined-basic"
            label="Organ Site"
            variant="outlined"
            className="col-6"
            name="organSite"
            value={formData.organSite}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Type Of Specimen"
            variant="outlined"
            className="col-5"
            name="typeOfSpecimen"
            value={formData.typeOfSpecimen}
            onChange={handleInputChange}
          />
        </CardBody>
      </CustomTabPanel>

      {/* Clinical Data Tab */}
      <CustomTabPanel value={value} index={3}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <InputLabel id="dropdown-label">Select Item</InputLabel>
          <Select
            labelId="dropdown-label"
            value={formData.clinicalData}
            // onChange={handleSelectChange}
            label="Select Item"
            className="col-10"
          >
            <MenuItem value={1}>Item 1</MenuItem>
            <MenuItem value={2}>Item 2</MenuItem>
            <MenuItem value={3}>Item 3</MenuItem>
          </Select>
        </CardBody>
      </CustomTabPanel>

      {/* Gross Picture Tab */}
      <CustomTabPanel value={value} index={4}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField
            id="outlined-basic"
            label="Gross Picture Details"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            className="col-12"
          />
        </CardBody>
      </CustomTabPanel>

      {/* Microscopic Picture Tab */}
      <CustomTabPanel value={value} index={5}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField
            id="outlined-basic"
            label="Microscopic Picture Details"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            className="col-12"
          />
        </CardBody>
      </CustomTabPanel>

      {/* Diagnosis Tab */}
      <CustomTabPanel value={value} index={6}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField
            id="outlined-basic"
            label="Diagnosis"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            className="col-12"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
          />
        </CardBody>
      </CustomTabPanel>

      {/* Comments Tab */}
      <CustomTabPanel value={value} index={7}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField
            id="outlined-basic"
            label="Comments"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            className="col-12"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </CardBody>
      </CustomTabPanel>

      {/* Recommendations Tab */}
      <CustomTabPanel value={value} index={8}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField
            id="outlined-basic"
            label="Recommendations"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            className="col-12"
            name="recommendations"
            value={formData.recommendations}
            onChange={handleInputChange}
          />
        </CardBody>
      </CustomTabPanel>
    </>
  );
}
