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


const SeriesScrollable = ({ title, sName }: SectionInfo) => {
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
      maxWidth: { xs: '100%', sm: '95%', md: 'calc(100% - 1vw)' },
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      bottom: { xs: 100, sm: 200, md: 300 }, // Responsive bottom position
      margin: "20px",
      fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
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

        <ScrollableSeriesItem imagenBtn='/DandadanCardBtn.png'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/ArcaneS2SSCITEM.jpg'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/DandadanCardBtn.png'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/ArcaneS2SSCITEM.jpg'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/DandadanCardBtn.png'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/ArcaneS2SSCITEM.jpg'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/DandadanCardBtn.png'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/ArcaneS2SSCITEM.jpg'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/DandadanCardBtn.png'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/ArcaneS2SSCITEM.jpg'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/DandadanCardBtn.png'></ScrollableSeriesItem>
        <ScrollableSeriesItem imagenBtn='/ArcaneS2SSCITEM.jpg'></ScrollableSeriesItem>


      </Box>
      <Button
        onClick={() => handleScrollRight(400, sName)}
        sx={{
          display: 'flex',
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          position: 'absolute',
          top: '19.8%',
          right: '-1.1%',
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
          fontSize: 40


        }}></ArrowForwardIosIcon></Button>

      <Button
        onClick={() => handleScrollLeft(400, sName)}
        sx={{
          display: 'flex',
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          position: 'absolute',
          top: '19.8%',
          left: '0%',
          height: '80%',
          maxHeight: '192px',
          zIndex: 65,
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.6)',
          },
        }}>
        <ArrowBackIosIcon sx={{
          color: 'white',
          fontSize: 40,
          md: {
            color: 'white'
          },


        }}></ArrowBackIosIcon></Button>


    </Box>

  );
};

export default SeriesScrollable;