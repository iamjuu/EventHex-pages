import React from 'react';
import {Input} from './style'
const index = ({type,bg,width,fontsize,radius,border,placeholder}) => {
  return (
<>
<Input type={type}  placeholder={placeholder} bg={bg}  width={width}  border={border}  fontsize={fontsize}  radius={radius}/>
</>
  );
}

export default index;
