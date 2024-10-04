"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { CardBody } from "react-bootstrap";
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
      {...other}>
      {value === index && (
        <Box sx={{ width: "100%", height: "100%" }}>{children}</Box>
      )}
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", py: 0 }}>
        <Tabs
          style={{ overflow: "auto" }}
          value={value}
          orientation="horizontal"
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="horizontal scrollable prevent tabs example">
          <Tab label="Patient Data" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
        </CardBody>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
        </CardBody>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CardBody className="d-flex py-3 gap-3 flex-wrap justify-content-evenly">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-6" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" className="col-5" style={{ boxShadow: "inset 0px 0px 400px 0px rgba(162,162,162,0.1), 0px 0px 5px 0px rgba(0,0,0,0.4)", }} />
        </CardBody>
      </CustomTabPanel>
    </>
  );
}
