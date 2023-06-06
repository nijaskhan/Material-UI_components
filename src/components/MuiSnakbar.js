import { Button, Snackbar, Stack } from '@mui/material';
import React, { useState } from 'react';

const MuiSnakbar = () => {
    const [openSnack, setOpenSnack] = useState(false);
    const handleSnackbar = () => {
        setOpenSnack(false);
    }
    return (
        <Stack direction={'row'} justifyContent={'center'}>
            <Button variant='outlined' onClick={() => setOpenSnack(true)}>Submit</Button>
            <Snackbar
                message='snakbar clicked successfully'
                autoHideDuration={1000}
                open={openSnack}
                onClose={handleSnackbar}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            />
        </Stack>
    )
}

export default MuiSnakbar;