import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormHelperText, Switch, Stack, Rating } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import React, { useState } from "react";

// rating and switch tags are also implemented here

const MuiCheckbox = () => {
    const [acptTnc, setAcptTnc] = useState(false);
    const handleTnc = (event) => {
        console.log("TnC", event.target.checked);
        setAcptTnc(event.target.checked);
    }

    const [skills, setSkills] = useState([]);
    const handleSkills = (event) => {
        console.log(event.target.value);
        const index = skills.indexOf(event.target.value);
        if (index === -1) setSkills([...skills, event.target.value]);
        else setSkills(skills.filter((item) => item !== event.target.value))
    }
    console.log(skills);

    const [checked, setChecked] = useState(false);
    const handleSwitchDarkMode = (event) => {
        console.log("dark mode : ", event.target.checked);
        setChecked(event.target.checked);
    }

    const [ratingValue, setRatingValue] = useState(null);
    const handleRating = (event, newValue) => {
        setRatingValue(newValue);
        console.log(newValue);
    }
    const [redRatingValue, setRedRatingValue] = useState(null);
    const handleRedRating=(event, newRedValue)=>{
        setRedRatingValue(newRedValue);
        console.log(newRedValue);
    }
    return (
        <Box paddingBottom={4}>
            <Box display={'flex'} justifyContent={'center'}>
                <FormControlLabel
                    label="Accept the terms and conditions"
                    control={<Checkbox checked={acptTnc} onChange={handleTnc} />}
                />
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkAddedIcon />} />
                {/* switch */}
                <FormControlLabel control={<Switch checked={checked} onChange={handleSwitchDarkMode} color={'secondary'} />} />
            </Box>
            {/* rating */}
            <Stack direction={'row'} paddingTop={3} justifyContent={'center'}>
                <Rating
                    precision={0.5}
                    value={ratingValue}
                    onChange={handleRating}
                />
            </Stack>
            <Stack direction={'row'} justifyContent={'center'} paddingTop={2}>
                <Rating
                    icon={<FavoriteIcon color="error" />}
                    emptyIcon={<FavoriteBorderIcon color="error" />}
                    precision={0.5}
                    value={redRatingValue}
                    onChange={handleRedRating}
                />
            </Stack>
            <Box paddingTop={3} display={'flex'} justifyContent={'center'} >
                <FormControl>
                    <FormLabel>
                        Skills
                    </FormLabel>
                    <FormControlLabel
                        label="HTML"
                        value={'html'}
                        control={<Checkbox onChange={handleSkills} />}
                    />
                    <FormControlLabel
                        label="CSS"
                        value={'css'}
                        control={<Checkbox onChange={handleSkills} />}
                    />
                    <FormControlLabel
                        label="JAVASCRIPT"
                        value={'javascript'}
                        control={<Checkbox onChange={handleSkills} />}
                    />
                    {
                        skills.length < 1 && <FormHelperText style={{ color: 'red' }}>Invalid Selection</FormHelperText>
                    }
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckbox;