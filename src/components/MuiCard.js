import React from 'react';
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';

const MuiCard = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.secondary', width: '16rem' }} p={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="180"
                    title="title"
                    image="https://source.unsplash.com/random"
                />
                <CardContent>
                    <Typography variant="h4" component={'div'} color="initial" gutterBottom>
                        React
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae laboriosam eligendi quisquam facilis laudantium ex corporis
                        velit officia, alias omnis, quos numquam vel voluptate nihil error. Quis, iure eveniet.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined'>share</Button>
                    <Button variant='text' >Take a Tour</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard;