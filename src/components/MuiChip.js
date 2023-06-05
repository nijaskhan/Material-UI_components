import { Avatar, Chip, Stack, Tooltip } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import React from 'react';

const MuiChip = () => {
    return (
        <Stack direction={'row'} justifyContent={'center'} spacing={2}>
            <Chip label='chip' color='secondary' variant='outlined' onDelete={() => alert('delete pressed')} />
            <Tooltip title="chip" placement='top' arrow enterDelay={200} leaveDelay={100}>
                <Chip
                    label='chip'
                    color='secondary'
                    variant='outlined'
                    avatar={<Avatar>V</Avatar>}
                    onClick={() => alert('onclick pressed')}
                />
            </Tooltip>
            <Tooltip title="Profile Chip" placement='top' arrow  enterDelay={300} leaveDelay={100}>
                <Chip
                    label='profile chip'
                    color='success'
                    variant='outlined'
                    avatar={
                        <Avatar>
                            <FaceIcon />
                        </Avatar>
                    }
                    onDelete={() => alert('delete pressed !!!')}
                />
            </Tooltip>
        </Stack>
    )
}

export default MuiChip;
