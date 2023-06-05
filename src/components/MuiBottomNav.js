import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MuiBottomNav = () => {
    const [navValue, setValue] = useState(null);
    const handleChange = (event, newValue) =>{
        setValue(newValue);
        console.log(newValue);
    }
    return (
        <BottomNavigation
            sx={{
                width: '100%',
                display: {
                    xs: 'flex',
                    sm: 'flex',
                    md: 'none',
                    lg: 'none',
                    xl: 'none',
                }
            }}
            value={navValue}
            onChange={(event, newValue) => handleChange(event, newValue)}
            showLabels
        >
            <BottomNavigationAction label="Home" value={'home'} icon={<HomeIcon />} />
            <BottomNavigationAction label="favourite" value={'Favourites'} icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="profile" value={'Profile'} icon={<FavoriteIcon />} />
        </BottomNavigation>
    )
}

export default MuiBottomNav