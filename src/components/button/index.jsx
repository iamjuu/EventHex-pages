import React from 'react';
import { Button } from './style';

const Index = ({ btnName,icon, bg, color, padding,border, width, fontsize, radius ,
    borderTopRightradius, 
  borderBottomRightradius ,
  borderTopLeftradius,
  borderBottomLeftradius
}) => {
  return (
    <Button 
    borderBottomLeftradius={borderBottomLeftradius}
    borderTopLeftradius={borderTopLeftradius}
    borderBottomRightradius={borderBottomRightradius}
    borderTopRightradius={borderTopRightradius}
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
