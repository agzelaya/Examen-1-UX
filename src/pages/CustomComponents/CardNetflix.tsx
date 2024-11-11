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
                sx={{ height: 220 }}
                component="iframe"
                height="360"
                src="https://www.youtube.com/embed/a4na2opArGY?controls=0&modestbranding=1&autoplay=1&loop=1&playlist=a4na2opArGY" // Replace VIDEO_ID with the actual video ID
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
                        16+
                    </Box>
                    <Box
                        sx={{
                            color: 'grey',
                            margin: '12px',
                            marginLeft: '0',
                            marginRight: '10px'
                        }}>
                        6 Episodes
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

            </CardContent>

        </Card>
    );
};

export default CardNetflix;
