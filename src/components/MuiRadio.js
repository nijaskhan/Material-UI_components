import React, { useState } from "react";
import { Box, FormControl, FormLabel, FormHelperText, RadioGroup, Radio, FormControlLabel } from "@mui/material";

const MuiRadio = () => {
    const [value, setValue] = useState(null);
    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };
    return (
        <Box display={"flex"} justifyContent={"center"} paddingTop={3}>
            <FormControl error={value===null} sx={{paddingBottom: '2rem'}}>
                <FormLabel id="experienceFormLabel">
                    Years of Experience
                </FormLabel>
                <RadioGroup
                    name="job-experiencep-group"
                    aria-label="experienceFormLabel"
                    row
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        control={<Radio color={'secondary'} />}
                        value="0-2"
                        label="0-2 years"
                    />
                    <FormControlLabel
                        control={<Radio color={'secondary'} />}
                        value="3-5"
                        label="3-5 years"
                    />
                    <FormControlLabel
                        control={<Radio color={'secondary'} />}
                        value="6-10"
                        label="6-10 years"
                    />
                </RadioGroup>
                {
                    value===null && <FormHelperText style={{color: 'red'}}>please select your experience</FormHelperText>
                }
            </FormControl>
        </Box>
    );
};

export default MuiRadio;
