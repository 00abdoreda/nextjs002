'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import Image from 'next/image';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { motion } from "framer-motion"
import RightSide01 from './RightSide01';
import FloatingButton01 from './FloadtingButton01';

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};
const fab =
{
  color: 'primary' as 'primary',
  sx: fabStyle as SxProps,
  icon: <AddIcon />,
  label: 'Add',
}; interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const RightSideTabs = () => {
  const [value, setValue] = React.useState(0);
  const [toggleLogo, settoggleLogo] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <RightSide01 />
      <div className='w-100 position-relative d-flex align-items-end justify-content-end' style={{ padding: '0 60px 50px 0' }}>
        {/* <motion.div style={{
          width: 'fit-content',
          height: 'fit-content', position: 'fixed', marginRight: '10px', marginBottom: '10px'
        }}
          initial={{ x: !toggleLogo ? '0' : '100000%', y: !toggleLogo ? '0' : '100000%' }}
          animate={{
            x: toggleLogo ? '0' : '100000%', y: toggleLogo ? '0' : '100000%'
            // transitionEnd: {
            //   display: toggleLogo ? 'block' : 'none',
            // },
          }}
          transition={{ ease: 'easeInOut', duration: 0 }}
        >
          <Tabs orientation='vertical'>
            <TabsList>
              <Tab >My account</Tab>
              <Tab >Profile</Tab>
              <Tab >Language</Tab>
            </TabsList>
          </Tabs>
        </motion.div> */}
        <FloatingButton01 right0='20px' bottom0='25px' icon0={<Image src="/assets/images/img2.png" alt="Logo001" width={45} height={45} style={{
          position: 'absolute',
          right: `-1px`,
          bottom: `-2px`,
        }} />} />
        {/* <Fab sx={fab.sx} aria-label={fab.label} onClick={() => { settoggleLogo(!toggleLogo) }}>
          <Image src="/assets/images/img2.png" alt="Logo001" width={57} height={57} />
        </Fab> */}
      </div>
    </>
  )
}




const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 100px;
  background-color: ${blue[400]};
  padding: 5px;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[400]};
  `,
); export default RightSideTabs