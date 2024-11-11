import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

interface NCardInfo {
    mainVideo: string;
    EpCount: string;
    Age: string;
    Resolution: string;
    audiotype: string;
    
}

const CardNetflix = ({ mainVideo, EpCount, Age, Resolution, audiotype }: NCardInfo) => {

    const [fadeIn, setFadeIn] = useState(false); // State to control fade-in effect

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true); // Trigger fade-in effect after slight delay
        }, 50); // 50ms delay for smoother appearance
        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        <Card sx={{
            position: 'absolute',
            top: '0%',
            left: 0,
            zIndex: 11,
            width: '370px',
            opacity: fadeIn ? 1 : 0, // Fade effect based on state
            visibility: fadeIn ? 'visible' : 'hidden', // Prevent interaction when invisible
            transition: 'opacity 0.5s ease-in-out, visibility 0s 0.5s',

        }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default CardNetflix;
