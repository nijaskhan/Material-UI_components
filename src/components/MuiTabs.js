import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Stack, Tab } from '@mui/material';
import React, { useState } from 'react';

const MuiTabs = () => {
    const [selectedTab, setSelectedTab] = useState('1');
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        console.log(newValue);
    };
    return (
        <Box>
            <TabContext value={selectedTab}>
                <Box
                    sx={{
                        borderColor: 'divider',
                        borderBottom: '1px solid',
                    }}
                >
                    <Stack direction="row" justifyContent="center">
                        <TabList
                            aria-label="tab"
                            centered
                            onChange={handleChange}
                        >
                            <Tab label="Tab 1" value="1" />
                            <Tab label="Tab 2" value="2" />
                            <Tab label="Tab 3" value="3" />
                        </TabList>
                    </Stack>
                </Box>
                <Stack direction="row" justifyContent="center">
                    <TabPanel value="1">Tab 1 content</TabPanel>
                    <TabPanel value="2">Tab 2 content</TabPanel>
                    <TabPanel value="3">Tab 3 content</TabPanel>
                </Stack>
            </TabContext>
        </Box>
    );
};

export default MuiTabs;
