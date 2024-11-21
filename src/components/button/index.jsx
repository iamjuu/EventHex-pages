import React from 'react';
import { Button } from './style';

const Index = ({ btnName,icon, bg, color, border, width, fontsize, radius }) => {
  return (
    <Button 
      fontsize={fontsize} 
      border={border} 
      color={color} 
      bg={bg} 
      width={width} 
      radius={radius}
    >
     {icon} {btnName}
    </Button>
  );
};

export default Index;
