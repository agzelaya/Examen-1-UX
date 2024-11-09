import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ReplayIcon from '@mui/icons-material/Replay';

interface BannerInfo{
    mainImg: string;
    logo: string;
    description: string;
}

const Banner =({mainImg,logo, description}:BannerInfo) => {
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
                <img src={logo} alt="Series logo" style={{ maxWidth: '250px', height: 'auto'}}/>

                <Box sx={{
                        display:'flex',
                        flexDirection:'row', textTransform:'none', 
                        width:'550px', 
                        my:3,
                        fontWeight: '530'
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
                        my: 1
                    }}>
                        <PlayArrowIcon sx={{ fontSize: 40 , m: '0 0 0 -8px', p:0}}/>
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
                            my: 1
                        }}>
                        <InfoOutlinedIcon sx={{ fontSize: 35 }}/>
                        More Info
                    </Button>
                </Box>
                
            </Box>

            <Box sx={{
                position: 'fixed',
                display: 'flex',
                top: '77%',
                right: 0,
            }}>
                {
                        //cajita de la derecha
                    }
                <Box sx={{
                    border: '1px solid white', borderRadius: '50%', mr: 1, display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 35, 
                    height: 35,
                }}>
                    <ReplayIcon sx={{my:0}}/>
                </Box>
                <Box sx={{
                    backgroundColor: 'rgba(112,109,80,0.5)',
                    borderLeft: '3px solid white'
                }}>
                    <Box sx={{ mr: 6, my: 1, ml: 1 }}>16+</Box>

                </Box>
            </Box>
            
        </Box>

    );
}

export default Banner;
