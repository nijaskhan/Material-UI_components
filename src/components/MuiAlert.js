import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

const MuiAlert = () => {
    return (
        <Stack p={3} spacing={2}>
            <Alert severity='error' variant='filled' onClose={()=> alert('Error alert clicked')}>
                <AlertTitle>Error</AlertTitle>
                This is an error alert message
            </Alert>
            <Alert severity='success' variant='outlined' action={
                <Button size='small'>
                    undo
                </Button>
            }>
                <AlertTitle>Success</AlertTitle>
                This is an Success message
            </Alert>
            <Alert severity='info' action={
                <Button size='small'>
                    <InfoIcon />
                </Button>
            }>
                <AlertTitle>Info</AlertTitle>
                This is an Info message
            </Alert>
        </Stack>
    )
}

export default MuiAlert