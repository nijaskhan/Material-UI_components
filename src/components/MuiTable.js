import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import users from '../constant/userData';
import React from 'react';

const MuiTable = () => {
    return (
        <Box justifyContent={'center'} py={3} display={'flex'}>
            <TableContainer component={Paper} sx={{maxWidth: '80vw', maxHeight: '40vh'}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: 'bolder'}} >Name</TableCell>
                            <TableCell style={{fontWeight: 'bolder'}}>Email</TableCell>
                            <TableCell style={{fontWeight: 'bolder'}}>Gender</TableCell>
                            <TableCell style={{fontWeight: 'bolder'}}>Ip address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>{user.last_name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.gender}</TableCell>
                                    <TableCell>{user.ip_address}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default MuiTable