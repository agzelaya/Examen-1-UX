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
        ref={buttonRef} // Attach the ref to the button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          minWidth: "340px",
          margin: '5px',
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'relative',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
        }}
      >
        <img src={imagenBtn} alt="series thumbnail" />
        {hovered && 
        ReactDOM.createPortal(
          <div
          style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: 50, 
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