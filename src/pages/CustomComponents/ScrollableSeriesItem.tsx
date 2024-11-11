import * as React from 'react';
import { useState, useRef } from 'react';
import { Button, Box } from '@mui/material'; 
import CardNetflix from './CardNetflix'; 
import ReactDOM from 'react-dom';

interface SSItemProperties {
  imagenBtn: string;
}

const ScrollableSeriesItem = ({ imagenBtn }: SSItemProperties) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Ref to the button element

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect(); // Get the position of the button
      setPosition({
        top: rect.top + window.scrollY, // Adjust for scroll position
        left: rect.left + window.scrollX, // Adjust for scroll position
      });
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
    <>
      <Button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          flexGrow: 1,
          width: '20vw',  // Adjust width based on viewport
          height: 'calc(11vw)',  // Adjust height responsively
          flexShrink: 0,
          margin: '-3px',
          overflow: 'hidden',
          position: 'relative',
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
          '@media (max-width: 768px)': {
            width: '25vw',
            height: 'calc(12vh)',
          },
          '@media (max-width: 480px)': {
            width: '30vw',
            height: 'calc(15vw)',
          },
        }}
      >
        <img src={imagenBtn} alt="series thumbnail" />
        {hovered && 
        ReactDOM.createPortal(
          <div
          style={{
            position: 'absolute',
            top: `${position.top-20}px`,
            left: `${position.left-10}px`,
            zIndex: 500, 
            opacity: hovered ? 1 : 0, 
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <CardNetflix mainVideo='' EpCount='' Age='' Resolution='' audiotype='' />
        </div>
          ,
          document.body 
        )
      }
      </Button>
    </>
  );
};

export default ScrollableSeriesItem;