import React from 'react';
import {Main} from './style'
import { Logo, User } from "../../assets";

const index = () => {
  return (
    <Main>
<div className='user-div'>
  <div className='logo'>
<img src={User} alt="" />
  </div>
</div>
    </Main>
  );
}

export default index;
