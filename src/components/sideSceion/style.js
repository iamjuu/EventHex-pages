import styled from "styled-components";
export const Main = styled.div`
width: 50%;
border-radius: 16px;
background-color: red;
.first{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    &:nth-child(1){
        display: flex;
        width: 50%;
     align-items: center;
    }
    &:nth-child(){
 
        width: 50%;
background-color: yellow;
     
    }
}
`