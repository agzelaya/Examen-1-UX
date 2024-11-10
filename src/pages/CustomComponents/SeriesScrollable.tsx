import * as React from 'react';

import Box from '@mui/material/Box';
import CardNetflix from './CardNetflix';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Card, IconButton, snackbarClasses } from '@mui/material';

import ScrollableSeriesItem from './ScrollableSeriesItem';
interface SectionInfo {
  title: string;
  sName: string;
}

const handleScrollRight = (distance: number, sName:string) => {
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

const handleScrollLeft = (distance: number, sName:string) => {
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


const SeriesScrollable = ({ title,sName }: SectionInfo) => {
  return (
    //Cuerpo completo del Carousel
    <Box sx={{
      left: '0%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'flex-start',
      bottom: 300,
      
    }}> 
      <Box sx = {{
        
       

        
      }}>
        <h1>{title}</h1>
      </Box>


      <Box id = {sName} sx ={
        {
          
          display: 'flex',
          overflowY: 'auto',
          flexDirection:'row',
          maxWidth: '1980px',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          
          
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

        </Box>
        <Button
        onClick={() => handleScrollRight(400, sName)}
        sx={{
          display: 'flex',
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          position: 'absolute',
          top: '19%',
          right: '0%',
          height: '80%',
          maxHeight: '192px',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.6)',
          },
        }}>
        <ArrowForwardIosIcon sx={{
          color: 'white',
          fontSize: 40,
          md: {
            color: 'white'
          },


        }}></ArrowForwardIosIcon></Button>
        
        <Button 
        onClick={() => handleScrollLeft(400,sName)}
        sx={{
          display: 'flex',
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          position: 'absolute',
          top: '19%',
          left: '0%',
          height: '80%',
          maxHeight: '192px',
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