import styled from "styled-components";
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .left {
    background-color: aliceblue;
    width: 40%;
    display: flex;
    .first{
display: flex;
font-family: sans-serif;
width: 100%;
justify-content: center;
    
    .logo{
        width: 20%;
        display: flex;
        background-color: red;
        padding: 20px;
        /* justify-content: center; */
        img{
            width: 50%;
        }
    }
    .register-div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 80%;
    background-color: yellow;

    }
}
@media (max-width:768px) {
    width: 100%;
.first .logo{
img{
    width: 20%;
}
}
    
}
@media (max-width:768px) {
 .first .register-div{
    font-size: .8rem;
 }   
}
@media (max-width:320px) {
    .first .logo{
        img{
            width: 30%;
        }
    }
 .first .register-div{
    font-size: .7rem;
 }   
}
  }











  .right {
    width: 60%;
  }
`;
