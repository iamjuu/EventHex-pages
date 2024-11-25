import styled from "styled-components";
export const Main = styled.div`
width: 50%;
justify-content: center;
/* padding: 10px; */
display: flex;
flex-direction: column;
gap: 50px;
border-radius: 16px;
.right-section-footer{
   display: flex;
   background-color: yellow;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-family: sans-serif;
   text-align: center;
}
@media (max-width:768px) {
   width: 70%;
   
}



@media (max-width:525px) {
   width: 100%;
   
}

`