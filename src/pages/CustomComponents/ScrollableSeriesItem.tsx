import * as React from 'react';
import { Button, Card } from '@mui/material';

interface SSItemProperties{
    imagenBtn: string
}

const ScrollableSeriesItem = ({imagenBtn}:SSItemProperties) =>{
    return (
        <Button sx={{
            minWidth : "340px",
            margin : '5px',
            z: 1
        }}>
            <img src = {imagenBtn} ></img>
        </Button>
    );
}

export default ScrollableSeriesItem