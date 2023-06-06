import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

const MuiLoadingBtn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleIsLoading = () => {
        setIsLoading(true);
        setInterval(() => {
            setIsLoading(false);
        }, 5000);
    }
    return (
        <Stack direction={'row'} justifyContent={'center'}>
            <LoadingButton
                loading={isLoading}
                variant='outlined'
                color='secondary'
                loadingPosition='start'
                startIcon={<SaveIcon />}
                onClick={handleIsLoading}
            >
                save
            </LoadingButton>
        </Stack>
    )
}

export default MuiLoadingBtn;