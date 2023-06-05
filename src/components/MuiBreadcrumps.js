import { Box, Breadcrumbs, Typography, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react';

const MuiBreadcrumps = () => {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" p={2} separator={<NavigateNextIcon />} maxItems={2} itemsAfterCollapse={2}>
                <Link underline='hover' color='secondary' href='#'>Home</Link>
                <Link underline='hover' color='secondary' href="#">Products</Link>
                <Link underline='hover' color='secondary' href="#">Shirts</Link>
                <Typography variant="body1" color="initial">
                    allen-solly
                </Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default MuiBreadcrumps;