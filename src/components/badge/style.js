import styled from "styled-components";
export const Main = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
.user-div {
    
        width: 100px;
        border-radius: 50%;
        background: linear-gradient(180deg, rgba(228, 229, 231, 0.48) 0%, rgba(247, 248, 248, 0) 100%, rgba(228, 229, 231, 0) 100%);
        ;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
.logo{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E2E4E9;
}
   
      }
      .content{
        /* background-color: red; */
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        span{
            font-weight: none;
            font-size: 24px;

      }
P{
    font-size: 16px;
    color: rgba(82, 88, 102, 1);
}
      }
`