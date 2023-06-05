import { Box, Container, Grid, Paper } from '@mui/material';
import React from 'react';

const MuiLayout = () => {
    return (
        <Paper sx={{padding: '32px', backgroundColor: 'grey'}} elevation={5}>
            <Box component={Container} display={'flex'} justifyContent={'center'} p={2}>
                <Grid container justifyContent={'center'} rowGap={1} columnGap={1}>
                    <Grid item xs={12} md={5} sx={{
                        backgroundColor: 'primary.light'
                    }}>
                        <Box bgcolor={'primary.light'} p={2}>Grid 1</Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{
                        backgroundColor: 'primary.light'
                    }}>
                        <Box bgcolor={'primary.light'} p={2}>Grid 2</Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{
                        backgroundColor: 'primary.light'
                    }}>
                        <Box bgcolor={'primary.light'} p={2}>Grid 3</Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{
                        backgroundColor: 'primary.light'
                    }}>
                        <Box bgcolor={'primary.light'} p={2}>Grid 4</Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default MuiLayout;