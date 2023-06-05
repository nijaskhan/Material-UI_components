import React, { useState } from 'react';
import { Button, Typography, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

const MuiButtons=()=> {
    const [formats, setFormats] = useState(null);

    const handleChange = (changeEvent, value) => {
        setFormats(value);
    };
    console.log(formats);    //we gill get the value from the button toggle group, we will get single value because of exclusive attribute

    return (
        <>
            <Stack direction='row' display={'block'} >
                <Stack direction={'row'} justifyContent={'center'} p={6}>
                    <Typography variant='h2' gutterBottom sx={{textDecorationLine: 'underline'}}>
                        Testing Material UI
                    </Typography>
                    <IconButton aria-label="send" onClick={() => alert('clicked on matrial UI Testing')} color={'success'} style={{ paddingLeft: '1rem' }}>
                        <SendIcon />
                    </IconButton>
                </Stack>
                <Stack direction='row' spacing={2} justifyContent={'center'}>
                    <Button variant="contained" color="primary" size='medium' endIcon={<SendIcon />} onClick={() => alert('you clicked on click me')}>
                        click me
                    </Button>
                    <Button variant="outlined" color="error" size='small'>
                        don't click me
                    </Button>
                </Stack>
                <Stack direction='row' justifyContent={'center'}>
                    <ButtonGroup
                        variant="outlined"
                        color="secondary"
                        orientation="vertical"
                        aria-label="btnGroup"
                        style={{ paddingTop: '2rem' }}
                    >
                        <Button >left</Button>
                        <Button>center</Button>
                        <Button>right</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} style={{ paddingTop: '2rem' }}>
                    <ToggleButtonGroup
                        aria-label='text format'
                        value={formats}
                        color='success'
                        onChange={handleChange}
                        exclusive                       //for exlusive value instead of array of values
                    >
                        <ToggleButton value="bold" aria-label='bold'>
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label='italic'>
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton value="underlined" aria-label='underlined'>
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </>
    )
}

export default MuiButtons;