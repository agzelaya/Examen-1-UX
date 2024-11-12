import * as React from 'react';

import Box from '@mui/material/Box';
import CardNetflix from './CardNetflix';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Card, IconButton, snackbarClasses } from '@mui/material';
import KWItem from './KWItem';

import ScrollableSeriesItem from './ScrollableSeriesItem';
interface SectionInfo {
  title: string;
  sName: string;
}

const handleScrollRight = (distance: number, sName: string) => {
  const scrollContainer = document.getElementById(sName);
  if (scrollContainer) {
    scrollContainer.scrollBy({
      left: distance, behavior: 'smooth'
    });
    if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
      scrollContainer.scrollLeft = 0;
    }
  }
};

const handleScrollLeft = (distance: number, sName: string) => {
  const scrollContainer = document.getElementById(sName);
  if (scrollContainer) {
    scrollContainer.scrollBy({
      left: -distance, behavior: 'smooth'
    });
    if (scrollContainer.scrollLeft <= 0) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  }
};


const KWScroll = ({ title, sName }: SectionInfo) => {
  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault(); // Prevent the default scroll behavior
  };
  

  return (
    //Cuerpo completo del Carousel
    <Box sx={{
      left: '0%',
      overflow: 'visible',
      position: 'relative',
      display: 'flex',
      maxWidth: { xs: '50%', sm: '80%', md: 'calc(100% - 1vw)' },
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      bottom: {xs: 150, sm: 250, md: 400  , lg: 450}, // Responsive bottom position
      margin: "40px",
      fontSize: { xs: '0.5rem', sm: '1rem', md: '1.2rem' },
      height: { xs: 'auto', md: '300' }, // Adjust as needed
      
      
    }}>

      <Box sx={{
          
      }}>
        <h1>{title}</h1>
      </Box>


      <Box id={sName}
        onWheel={handleWheel}
        sx={
          {
            position: 'relative',
            display: 'flex',
            overflowY: 'hidden',
            overflowX: 'auto',
            flexDirection: 'row',

            '&::-webkit-scrollbar': {
              display: 'none'
            },
            width: '100%'


          }
        }>

        <KWItem imagenBtn='/DandadanCardBtn.png' mVid='a4na2opArGY'></KWItem>
        <KWItem imagenBtn='/spyxfamily.jpeg' mVid='U_rWZK_8vUY'></KWItem>
        


      </Box>
      

    </Box>

  );
};

export default KWScroll;