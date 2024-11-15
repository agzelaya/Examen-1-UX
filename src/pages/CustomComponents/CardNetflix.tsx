import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { grey } from '@mui/material/colors';


interface NCardInfo {
    mainVideo: string;
    EpCount: string;
    Age: string;
    g1: string;
    g2?: string;
    g3?: string;
}

const CardNetflix = ({ mainVideo, EpCount, Age, g1, g2, g3 }: NCardInfo) => {

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
                sx={{ height: 220 }}
                component="iframe"
                height="360"
                src={`https://www.youtube.com/embed/${mainVideo}?controls=0&modestbranding=1&autoplay=1&loop=1&playlist=${mainVideo}`} // Replace VIDEO_ID with the actual video ID
                title="Embedded Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen


            />

            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '0vh'
                    }}>
                    <PlayCircleFilledWhiteRoundedIcon
                        sx={{
                            color: grey[300],
                            fontSize: '8vh'
                        }}>

                    </PlayCircleFilledWhiteRoundedIcon>
                    <AddCircleOutlineRoundedIcon
                        sx={{
                            color: grey[300],
                            fontSize: '8vh'
                        }}>

                    </AddCircleOutlineRoundedIcon>
                    <RecommendRoundedIcon
                        sx={{
                            color: grey[300],
                            fontSize: '8vh'
                        }}>

                    </RecommendRoundedIcon>
                    <ExpandCircleDownOutlinedIcon
                        sx={{
                            color: grey[300],
                            fontSize: '8vh',
                            position: 'absolute',
                            right: '5%',
                        }}>

                    </ExpandCircleDownOutlinedIcon>


                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '10px',
                            border: '1px solid',
                            borderColor: grey[500],
                            color: grey[500],
                            padding: '2px 6px',  
                            borderRadius: '2px'

                        }}>
                        {Age}+
                    </Box>
                    <Box
                        sx={{
                            color: 'grey',
                            margin: '12px',
                            marginLeft: '0',
                            marginRight: '10px'
                        }}>
                        {EpCount} Episodes
                    </Box>
                    <Box
                        sx={{
                            color: grey[400],
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '12px',
                            marginLeft: 0,
                            border: '1px solid',
                            borderColor: grey[500],
                            padding: '1px 6px',  
                            borderRadius: '2px',
                            fontSize: '1.3vh',
                            height: '2.2vh'
                        }}>
                        HD
                    </Box>
                </Box>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '10px',
                }}>
                    <Typography 
                    sx={{
                        color: 'white', 
                    }}>
                        {g1}
                    </Typography>
                    

                    <Typography
                    sx={{
                        color: grey[600],
                        marginLeft: '10px',
                        marginRight: '10px'
                    }}>
                        ●
                    </Typography>


                    <Typography 
                    sx={{
                        color: 'white' ,
                    }}>
                        {g2}
                    </Typography>
                    
                    
                    <Typography
                    sx={{
                        color: grey[600],
                        marginLeft: '10px',
                        marginRight: '10px'
                    }}>
                        ●
                    </Typography>
                    
                    
                    <Typography 
                    sx={{
                        color: 'white' ,
                    }}>
                        {g3}
                    </Typography>

                </Box>

            </CardContent>

        </Card>
    );
};

export default CardNetflix;
