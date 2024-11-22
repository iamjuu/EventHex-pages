import React from 'react';
import {Main} from './style'
const index = ({img}) => {
  return (
    <Main>
<div className='user-div'>
  <div className='logo'>
<img src={img} alt="" />
  </div>
</div>
    </Main>
  );
}

export default index;
