import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface BannerInfo{
    mainImg: string;
    logo: string;
}

const Banner =({mainImg,logo}:BannerInfo) => {
    return (
        <Box sx={{
            backgroundImage: `url(${mainImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
            position: 'relative'
        }}>

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    zIndex: 0,
                }}
            />

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '50%', 
                left: '0', 
                transform: 'translateY(-50%)', 
                zIndex: 1, 
                ml:6
            }}>
                <img src={logo} alt="Series logo" style={{ maxWidth: '300px', height: 'auto', marginBottom:'24px'}}/>

                <Box sx={{display:'flex',
                    flexDirection:'row'
                }}>
                    <Button variant="contained" 
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        display: 'flex', 
                        alignItems: 'center',
                        gap: 1,
                    }}>
                        <PlayArrowIcon sx={{ fontSize: 30 }}/>
                        Play
                    </Button>
                    <Button variant="contained" 
                        sx={{
                            backgroundColor: 'rgba(112,109,100,0.8)',
                            color: 'white', textTransform: 'none',
                            ml: 1,
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1
                        }}>
                        <InfoOutlinedIcon sx={{ fontSize: 30 }}/>
                        More Info
                    </Button>
                </Box>
            </Box>
        </Box>

    );
}

export default Banner;
