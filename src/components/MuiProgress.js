import { CircularProgress, LinearProgress, Stack } from '@mui/material';
import React from 'react';

const MuiProgress = () => {
    return (
        <Stack spacing={4} p={3}>
            <LinearProgress color='info' />
            <Stack direction={'row'} justifyContent={'center'}>
                <CircularProgress color='secondary' />
            </Stack>
            <LinearProgress variant='determinate' value={55} />
        </Stack>
    )
}

export default MuiProgress;