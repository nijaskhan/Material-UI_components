import { Box, Drawer, Typography } from '@mui/material';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import React, { useState } from 'react';

const MuiDrawer = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    return (
        <>
            <Box pt={3} pl={3} sx={{cursor: 'pointer'}}>
                <ViewSidebarIcon onClick={() => setDrawerOpen(true)} />
                <Drawer anchor='left' open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                    <Box p={2} width={'250px'} textAlign={'center'} role='presentation'>
                        <Typography variant="h6" fontWeight={'bolder'} component={'div'} color="initial">
                            Side Panel
                        </Typography>
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default MuiDrawer;