import React from 'react';
import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiListing = () => {
    return (
        <Box m={3} sx={{
            width: '30rem',
            backgroundColor: 'white'
        }}>
            <ListItem disablePadding>
                <ListItemButton >
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar >
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='Listing Item 1' secondary='secodary text is a long decriptive text' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton >
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar >
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='Listing Item 1' secondary='secodary text is a long decriptive text' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton >
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar >
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='Listing Item 1' secondary='secodary text is a long decriptive text' />
                </ListItemButton>
            </ListItem>
        </Box>
    )
}

export default MuiListing
