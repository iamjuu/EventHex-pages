import React from 'react';
import { MdCopyright } from "react-icons/md";
import {Container,ContainerWrap} from '../pages/style'
import {Main} from './style'
const formFooter = () => {
  return (
    <Container>
      <ContainerWrap>
<Main>

<span><MdCopyright  style={{fontSize:'14px'}}/></span>
 <span>2024EventHex</span>
</Main>
 </ContainerWrap>
    </Container>
  );
}

export default formFooter;
