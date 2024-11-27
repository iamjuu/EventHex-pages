import React from 'react';
import {Main} from './style'
const index = ({img,span,p}) => {
  return (
    <Main>
      <div>

<div className='user-div'>
  <div className='logo'>
<img src={img} alt="" />
  </div>
</div>
      </div>
      <div className='content'>
      <span>{span}</span>
      <p>{p}</p>
      </div>
    </Main>
  );
}

export default index;
