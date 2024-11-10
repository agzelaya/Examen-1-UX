import * as React from 'react';
import { useState, useRef } from 'react';
import { Button, Box } from '@mui/material'; // Ensure Box is imported
import CardNetflix from './CardNetflix'; // Assuming you have CardNetflix component as described earlier

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
        top: rect.top-50, // Y position of the button
        left: rect.left-50, // X position of the button
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
          zIndex: 1
        }}
      >
        <img src={imagenBtn} alt="series thumbnail" />
      </Button>

      {hovered && (
        <Box
          sx={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            zIndex: 10,
            transition: 'opacity 0.3s ease', // Smooth transition
            width: 345, // Width of the card (you can adjust this)
            height: 500, // Height of the card (you can adjust this)
          }}
        >
          <CardNetflix
            mainVideo="/static/images/cards/contemplative-reptile.jpg"
            EpCount="12"
            Age="PG-13"
            Resolution="1080p"
            audiotype="Stereo"
          />
        </Box>
      )}
    </>
  );
};

export default ScrollableSeriesItem;