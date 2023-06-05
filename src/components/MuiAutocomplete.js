import { Autocomplete, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const MuiAutocomplete = () => {
    const skills = ["nodejs", "expressjs", "mongodb", "reactjs", "nextjs", "bootstrap"];

    const [value, setValue] = useState(null);
    const handleSkills = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <Stack direction={'row'} justifyContent={'center'} paddingY={3}>
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label='skills' sx={{ width: '200px' }} color='secondary' />}
                value={value}
                onChange={handleSkills}
                // freeSolo   //for adding the words in text field other than the given one
            />
        </Stack>
    )
}

export default MuiAutocomplete