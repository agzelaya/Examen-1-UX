import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

interface NCardInfo {
    mainVideo: string;
    EpCount: string;
    Age: string;
    Resolution: string;
    audiotype: string;
}

const CardNetflix = ({ mainVideo, EpCount, Age, Resolution, audiotype }: NCardInfo) => {
    return (
        <Card sx={{
            maxWidth: 345,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'flex-start',
            bottom: 195,
            margin :'3px',
            minWidth: 300,
            
            

            
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
