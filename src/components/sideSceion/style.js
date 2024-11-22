import styled from "styled-components";
export const Main = styled.div`
width: 80%;
/* background-color: green; */
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border-radius: 16px;
@media (max-width:425px) {
   width: 100%;
}
.first{
    display: flex;
    width: 100%;

   
.head{
 display:flex ;
 width: 100%;
 padding: 10px;
 justify-content: space-between;
 .clock{
    width: 50%;
    display: flex;
    font-family: sans-serif;
    gap: 10px;
    justify-content: start;
 }
 .btn{
    width: 50%;
    justify-content: end;
    display: flex;

 }
}

}
`