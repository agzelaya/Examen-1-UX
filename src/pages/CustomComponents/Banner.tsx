import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import { AutocompleteClasses } from '@mui/material';

interface BannerInfo{
    mainImg: string;
    logo: string;
    description: string;
}

const Banner =({mainImg, logo, description}:BannerInfo) => {
    return (
        <Box sx={{
            backgroundImage: `linear-gradient(to bottom, transparent 60%, #141414), url(${mainImg})`,
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            aspectRatio: '16 / 9',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'flex-start', 
        
            //pantalla de laptop
            '@media (min-width: 1000px)': {
                justifyContent: 'flex-start',
                paddingTop: '16vh', 
                alignItems: 'flex-start',
            },
        }}>
            
            <Box
                sx={{
                    //cajita de opacidad
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    zIndex: 0,
                }}
            />

            <Box id="leftBox" sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative', 
                left: '5%',  
                zIndex: 1,
                width:'fit-content',
                '@media (max-width: 1150px)': {
                    left: '4%',
                },
            }}>
                <img src={logo} alt="Series logo" style={{ maxWidth: '17vw', height: 'auto'}}/>

                <Box sx={{
                        display:'flex',
                        flexDirection:'row', textTransform:'none', 
                        width:'40vw', 
                        my:3,
                        fontWeight: '500',
                    fontSize: 'calc(4px + 1vw)', 
                    '@media (max-width: 768px)': {
                        fontSize: 'calc(4px + 1vw)',
                    },
                    '@media (max-width: 450px)': {
                        my:1
                    }
                        }}>
                    {description}
                </Box>

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
                        justifyContent: 'center', 
                        gap: 0.5,
                        fontSize: '17px',
                        py: 0.25,
                        '@media (max-width: 768px)': {
                            fontSize: 'calc(4px + 1vw)',
                        },
                    }}>
                        <PlayArrowIcon sx={{
                            fontSize: 40, m: '0 0 0 -8px', p: 0, '@media (max-width: 768px)': {
                                fontSize: 'calc(8px + 1vw)',
                            },
                        }} />
                        Play
                    </Button>
                    <Button variant="contained" 
                        sx={{
                            backgroundColor: 'rgba(112,109,90,0.5)',
                            color: 'white', textTransform: 'none',
                            ml: 1,
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: 'center', 
                            gap: 1,
                            fontSize: '17px',
                            py: 0.25,
                            '@media (max-width: 768px)': {
                            fontSize: 'calc(4px + 1vw)',
                        },
                        }}>
                        <InfoOutlinedIcon sx={{ fontSize: 35, '@media (max-width: 768px)': {
                            fontSize: 'calc(8px + 1vw)',
                        },
                         }}/>
                        More Info
                    </Button>
                </Box>
                
            </Box>

            <Box id= "rightBox" sx={{
                position: 'absolute',
                display: 'flex',
                top: '77%',
                right: 0,

                '@media (min-width: 1000px)': {
                    top: '52%'
                },
                
            }}>
                {
                        //cajita de la derecha
                    }
                <Box sx={{
                    border: '1px solid white', borderRadius: '50%', mr: 1.5, display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '2.75vw',
                    height: '2.75vw', 
                    '@media (max-width: 768px)': {
                        width: '2vw', 
                        height: '2vw',
                        mr: '1vw',
                    },
                    '@media (max-width: 480px)': {
                        width: '2vw', 
                        height: '2vw',
                        mr: '0.5vw', 
                    },
                }}>
                    <ReplayIcon sx={{
                        my:0,
                        fontSize: 'calc(3px + 2vw)', 
                        '@media (max-width: 768px)': {
                            fontSize: 'calc(1px + 2vw)', 
                        },
                        '@media (max-width: 480px)': {
                            fontSize: 'calc(1px + 1vw)',
                        },
                        }}/>
                </Box>
                <Box sx={{
                    backgroundColor: 'rgba(20,20,20,0.5)',
                    borderLeft: '2px solid white',
                    width: 'auto',
                    height: 'auto',
                    alignContent: 'center',
                }}>
                    <Box sx={{ mr: '4vw',  ml: '1vw',
                        '@media (max-width: 768px)': {
                            my: '0vh',
                            p: 0,
                            fontSize: 'calc(4px + 1vw)',
                        },
                     }}>16+</Box>

                </Box>
            </Box>
            
        </Box>

    );
}

export default Banner;
