import { MenuItem, TextField, Stack } from '@mui/material';
import React from 'react';

const DropDown = () => {
    const currencies = [
        {
            value: 'EUR',
            label: 'EUR',
        },
        {
            value: 'USD',
            label: 'USD',
        },
        {
            value: 'GBP',
            label: 'GBP',
        },
    ]
    return (
        <>
            <Stack direction={'row'} paddingTop={5} justifyContent={'center'}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    size='small'
                    color='secondary'
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Stack>
        </>
    )
}

export default DropDown;