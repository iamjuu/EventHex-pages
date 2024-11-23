import styled from "styled-components";
export const Main = styled.div`
width: 50%;
justify-content: center;
padding: 10px;
display: flex;
flex-direction: column;
border-radius: 16px;

@media (max-width:768px) {
   width: 70%;
   
}



@media (max-width:525px) {
   width: 100%;
   
}

`