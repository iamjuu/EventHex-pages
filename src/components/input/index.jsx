import React from 'react';
import { Input } from './style';

const Index = ({ 
  padding,
  type, 
  bg, 
  width, 
  fontsize, 
  radius, 
  border, 
  placeholder, 
  borderTopRightradius, 
  borderBottomRightradius ,
  borderTopLeftradius,
  borderBottomLeftradius,
  borderRight,
  placeholderPadding
}) => {
  return (
    <>
      <Input
      placeholderPadding={placeholderPadding}
      padding={padding}
        type={type}
        placeholder={placeholder}
        borderRight={borderRight}
        bg={bg}
        width={width}
        border={border}
        fontsize={fontsize}
        radius={radius}
        borderTopRightradius={borderTopRightradius} 
        borderTopLeftradius={borderTopLeftradius}
        borderBottomRightradius={borderBottomRightradius}
        borderBottomLeftradius={borderBottomLeftradius}
      />
    </>
  );
}

export default Index;
