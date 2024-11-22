import React from 'react';
import { Button } from './style';

const Index = ({ btnName,icon, bg, color, padding,border, width, fontsize, radius }) => {
  return (
    <Button 
    padding={padding}
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
