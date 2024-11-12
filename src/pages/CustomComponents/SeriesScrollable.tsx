import * as React from 'react';

import Box from '@mui/material/Box';
import CardNetflix from './CardNetflix';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Card, IconButton, snackbarClasses } from '@mui/material';
import ScrollableSeriesItem from './ScrollableSeriesItem';

interface SectionInfo {
  title: string;
  sName: string;
}

interface Series {
  imagenBtn: string;
  mainVideo: string;
  EpCount: string;
  Age: string;
  g1: string;
  g2?: string;
  g3?: string;
}

interface SeriesListProps {
  series: Series[];
  setSeries: React.Dispatch<React.SetStateAction<Series[]>>;
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


const SeriesScrollable = ({ title, sName, series, setSeries }: SectionInfo & SeriesListProps) => {
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
      bottom: { xs: 150, sm: 250, md: 400  , lg: 450}, // Responsive bottom position
      margin: "40px",
      fontSize: { xs: '0.5rem', sm: '1rem', md: '1.1rem' },
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

        {series.map((serie, index) => (
          <ScrollableSeriesItem
            key={index}
            imagenBtn={serie.imagenBtn}
            mainVideo={serie.mainVideo}
            EpCount={serie.EpCount}
            Age={serie.Age}
            g1={serie.g1}
            g2={serie.g2}
            g3={serie.g3}
          />
        ))}


      </Box>
      <Button
        onClick={() => handleScrollRight(400, sName)}
        sx={{
          display: 'flex',
          bgcolor: 'rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          top: '19%',
          right: '0%',
          height: '80%',
          zIndex: 65,
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.6)',
          },
        }}>
        <ArrowForwardIosIcon sx={{
          color: 'white',
          md: {
            color: 'white'
          },
          fontSize: 'calc(40px + 1vh)'


        }}></ArrowForwardIosIcon></Button>

      <Button
        onClick={() => handleScrollLeft(400, sName)}
        sx={{
          display: 'flex',
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          position: 'absolute',
          top: '17.9%',
          left: '0%',
          height: '90%',
          maxHeight: '194px',
          zIndex: 65,
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.6)',
          },
        }}>
          
        <ArrowBackIosIcon sx={{
          color: 'white',
          fontSize: 'calc(40px + 1vh)',
          md: {
            color: 'white'
          },


        }}></ArrowBackIosIcon></Button>


    </Box>

  );
};

export default SeriesScrollable;