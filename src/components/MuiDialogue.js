import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Button } from '@mui/material'
import React,{useState} from 'react'

const MuiDialogue = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Stack direction={'row'} justifyContent={'center'} p={2}>
            <Button variant='outlined' color='primary' onClick={() => setOpen(true)}>show Dialog</Button>
            <Dialog 
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle >
                    Are you sure ?
                </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Do you want to delete this user ? 
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="secondary" onClick={handleClose}>
                            cancel
                        </Button>
                        <Button variant="outlined" autoFocus color="error" onClick={handleClose}>
                            Delete
                        </Button>
                    </DialogActions>
            </Dialog>
        </Stack>
    )
}

export default MuiDialogue