import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Avatar, Badge } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React from 'react';

const MuiNavbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton aria-label="logo" color='inherit'>
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component={'div'} color="inherit" sx={{ flexGrow: 1 }}>
                    POKEMONAPP
                </Typography>
                <Stack direction={'row'} spacing={2} sx={{
                    display: { xs: 'none', sm: 'none', md: 'block' },
                }}>
                    <Button variant="text" color="inherit">Home</Button>
                    <Button variant="text" color="inherit">Features</Button>
                    <Button variant="text" color="inherit">About us</Button>
                    <Button variant="text" color="inherit">Login</Button>
                </Stack>
                <Stack direction={'row'} spacing={2} pl={3} pt={1}>
                    <Badge badgeContent={4} color={'error'}>
                        <Avatar variant='circle' src={'https://randomuser.me/api/portraits/men/42.jpg'} alt={'proPic'} />
                    </Badge>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar;