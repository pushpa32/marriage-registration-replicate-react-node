import React, { useState, useEffect } from 'react'
import { Box, Grid, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PendingList from './tabs/PendingList';
import QueryList from './tabs/QueryList';
import RejectedList from './tabs/RejectedList';

const ApplicantList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m="20px">
      <Header title="APPLICANT" subtitle="List of Applicants" />

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Tabs">
              <Tab label="Pending" value="1" />
              <Tab label="Send for Query" value="2" />
              <Tab label="Rejected" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PendingList />
          </TabPanel>
          <TabPanel value="2">
            <QueryList />
          </TabPanel>
          <TabPanel value="3">
            <RejectedList />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  )
}

export default ApplicantList