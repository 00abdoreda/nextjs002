"use client";
import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { CardBody } from "react-bootstrap";
import { Select, MenuItem, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  const [value, setValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false); // State for controlling the dialog
  const [specimens, setSpecimens] = useState([
    {
      typeOfSpecimen: '',
      siteOfSpecimen: '',
      numberOfSpecimens: '',
      dateReceived: '',
      referringDoctor: '',
      isOpen: false,
    }
  ]);

  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    dateCreated: "",
    referringDoctor: "",
    dateReceived: "",
    typeOfSpecimen: "",
    siteOfSpecimen: "",
    numberOfSpecimens: "",
    Gender: "",
    Lab: [],
    ClinicalData: "",
    GrossPicture: "",
    MicroscopicPicture: "",
    Diagnosis: "",
    Comments: "",
    Recommendations: ""
  });

  const handleSpecimenChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSpecimens = [...specimens];
    updatedSpecimens[index][name] = value;
    setSpecimens(updatedSpecimens);
  };

  const addNewSpecimenGroup = () => {
    setSpecimens([
      ...specimens,
      {
        typeOfSpecimen: '',
        siteOfSpecimen: '',
        numberOfSpecimens: '',
        dateReceived: '',
        referringDoctor: '',
        isOpen: false,
      }
    ]);
  };

  const toggleGroup = (index) => {
    const updatedSpecimens = [...specimens];
    updatedSpecimens[index].isOpen = !updatedSpecimens[index].isOpen;
    setSpecimens(updatedSpecimens);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFormData({ ...formData, Gender: event.target.value as string });
  };

  const handleSelectChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFormData({ ...formData, Lab: event.target.value as [] });
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
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
          <Tab label="Patient ID" {...a11yProps(0)} />
          <Tab label="Specimen Data" {...a11yProps(1)} />
          <Tab label="Examination Data" {...a11yProps(2)} />
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
          <Select
            value={formData.Gender}
            className="col-6"
            displayEmpty
            onChange={handleSelectChange}
          >
            <MenuItem value="" disabled>
              Select Gender
            </MenuItem>
            <MenuItem value={1}>Male</MenuItem>
            <MenuItem value={2}>Female</MenuItem>
          </Select>
          <TextField
            id="outlined-basic"
            label="Date Created"
            variant="outlined"
            type="datetime-local"
            className="col-5"
            name="dateCreated"
            value={formData.dateCreated}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Select
            multiple
            value={formData.Lab || []}
            onChange={handleSelectChange2}
            name="LabID"
            renderValue={(selected) => selected.length === 0 ? 'Select Lab' : selected.join(', ')}
            variant="outlined"
            className="col-6"
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Lab
            </MenuItem>
            <MenuItem value="Lab1">Lab1</MenuItem>
            <MenuItem value="Lab2">Lab2</MenuItem>
          </Select>
        </CardBody>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly" style={{ maxHeight: "280px", overflowY: "auto" }}>
          {specimens.map((specimen, index) => (
            <div key={index} className="specimen-group col-12" style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '16px',
              width: '100%',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => toggleGroup(index)}>
                <IconButton size="small">
                  <ExpandMoreIcon style={{ transform: specimen.isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </IconButton>
                <Typography variant="h6">{`Specimen Group ${index + 1}`}</Typography>
              </div>
              {specimen.isOpen && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    name="typeOfSpecimen"
                    value={specimen.typeOfSpecimen}
                    onChange={(event) => handleSpecimenChange(index, event)}
                    label="Type of Specimen"
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={1}
                    className="col-6"
                    sx={{ mb: 2, mr: 2 }}
                  />
                  <TextField
                    name="siteOfSpecimen"
                    value={specimen.siteOfSpecimen}
                    onChange={(event) => handleSpecimenChange(index, event)}
                    label="Site of Specimen"
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={1}
                    className="col-5"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    name="numberOfSpecimens"
                    value={specimen.numberOfSpecimens}
                    onChange={(event) => handleSpecimenChange(index, event)}
                    label="Number of Specimens"
                    variant="outlined"
                    fullWidth
                    type="number"
                    className="col-6"
                    sx={{ mb: 2, mr: 2 }}
                  />
                  <TextField
                    name="dateReceived"
                    value={specimen.dateReceived}
                    onChange={(event) => handleSpecimenChange(index, event)}
                    label="Date Received"
                    variant="outlined"
                    type="datetime-local"
                    className="col-5"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    name="referringDoctor"
                    value={specimen.referringDoctor}
                    onChange={(event) => handleSpecimenChange(index, event)}
                    label="Referring Doctor"
                    variant="outlined"
                    fullWidth
                    className="col-6"
                    sx={{ mb: 2, mr: 2 }}
                  />
                </Box>
              )}
            </div>
          ))}
          <Button
            onClick={addNewSpecimenGroup}
            variant="outlined"
            color="primary"
            style={{ height: 'fit-content' }}
            sx={{ mb: 2 }}
          >
            Add Another Specimen Group
          </Button>
        </CardBody>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField
            id="outlined-basic"
            label="Clinical Data"
            variant="outlined"
            className="col-6"
            name="ClinicalData"
            value={formData.ClinicalData}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Gross Picture"
            variant="outlined"
            className="col-5"
            name="GrossPicture"
            value={formData.GrossPicture}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Microscopic Picture"
            variant="outlined"
            className="col-6"
            name="MicroscopicPicture"
            value={formData.MicroscopicPicture}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Diagnosis"
            variant="outlined"
            className="col-5"
            name="Diagnosis"
            value={formData.Diagnosis}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Comments"
            variant="outlined"
            className="col-6"
            name="Comments"
            value={formData.Comments}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Recommendations"
            variant="outlined"
            className="col-5"
            name="Recommendations"
            value={formData.Recommendations}
            onChange={handleInputChange}
          />
        </CardBody>
      </CustomTabPanel>

      {/* Button to open the dialog */}
      <Button
        onClick={handleDialogOpen}
        variant="contained"
        color="primary"
        sx={{ mt: 2, ml: 2 }}
      >
        Fill from Template
      </Button>

      {/* Dialog for filling in form details */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Fill Form Template</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="Patient Name"
            variant="outlined"
            className="col-12"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="Patient Age"
            variant="outlined"
            className="col-12"
            name="patientAge"
            value={formData.patientAge}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          {/* Add additional form fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
