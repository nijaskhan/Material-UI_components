import { InputAdornment, Stack, TextField, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const MuiText = () => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility=()=>{
        setShowPassword(!showPassword);
    }
    return (
        <>
            <Stack direction='row' spacing={3} justifyContent={'center'} paddingTop={5}>
                <TextField label="Name" variant="outlined" size="small" color="secondary" required />
                <TextField label="email" variant="outlined" size="small" />
                <TextField label="age" variant="standard" size="small" color="success" />
            </Stack>
            <Stack direction='row' spacing={3} justifyContent={'center'} paddingTop={2}>
                <TextField label="username" variant="outlined" size="small" color="secondary" required />
                <TextField label="password" variant="outlined" size="small" type={!showPassword? "password" : "text"}
                    color="secondary"
                    value={value}
                    error={!value}
                    helperText={value ? "do not share your password with others" : 'required'}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton onClick={handlePasswordVisibility}>
                                {showPassword? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </Stack>
            <Stack direction='row' spacing={3} justifyContent={'center'} paddingTop={2}>
                <TextField label="kilometer" variant="outlined" size="small" type="number" color="secondary" InputProps={{
                    startAdornment: < InputAdornment position="start" >Rs</InputAdornment>
                }}
                />
                <TextField label="kilogram" size="small" type="number" color="success" InputProps={{
                    endAdornment: < InputAdornment position="end" >Km</InputAdornment>
                }}/>
            </Stack >
        </>
    )
}

export default MuiText;