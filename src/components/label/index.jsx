import React from 'react';
import {Label} from './style'
const index = ({ Name='label', bg, border, radius,fontSize }) => {
  return (
   <>
   <Label 
   fontSize={fontSize}
   bg={bg}
   border={border}
   radius={radius}
   />
   {Name}
   </>
  );
}

export default index;
