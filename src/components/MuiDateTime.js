import { Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const MuiDateTime = () => {
    const [date, setDate] = useState(null);
    console.log("date", date);

    const [time, setTime] = useState(null);
    console.log("time", time);
    return (
        <Stack direction={'row'} justifyContent={'center'} p={3} spacing={3}>
            <TextField
                id="date"
                variant='outlined'
                value={ date || '' }
                onChange={(e) => setDate(e.target.value)}
                type='date'
                helperText={'pick the date'}
            />
            <TextField
                id="time"
                variant='outlined'
                value={ time || '' }
                onChange={(e) => setTime(e.target.value)}
                type='time'
                helperText={'pick the Time'}
            />
        </Stack>
    )
}

export default MuiDateTime;