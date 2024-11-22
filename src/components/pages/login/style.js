import styled from "styled-components";
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;


  .left {
    width: 40%;
    display: flex;
    gap: 40px;
    flex-direction: column;
  

    .first {
      display: flex;
      font-family: sans-serif;
/* padding: 10px; */
      width: 100%;
      justify-content: center;
      .logo{
        padding: 10px;
        width: 10%;
        display: flex;
      }

      .register-div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-size: 14px;
        width: 70%;
      }
    }
    .second {
      width: 100%;
justify-content: center;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-direction: column;
      .user-div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 8px;
          h1{
            font-family: sans-serif;
            font-size: 24px;
          }
          p{
            font-family: sans-serif;
            font-size: 16px;
            color: #525866;
          
          
        }
      }
    }
  
    /* @media (max-width: 768px) {
      width: 100%;
      .first .logo {
        img {
          width: 20%;
        }
      }
    }
    @media (max-width: 768px) {
      .first .logo{
        width: 20%;
      }
      .first .register-div {
        font-size: 0.8rem;
      }
    }
    @media (max-width: 320px) {
      .first .logo {
        img {
          width: 30%;
        }
      }
      .first .register-div {
        font-size: 0.7rem;
      }
    } */
      @media (max-width:768px) {
        width: 100%;
        
      }
  }

  .right {
    width: 60%;
    display: flex;
    background-color: green;
    justify-content: center;
    align-items: center;
    @media (max-width:768px) {
      width: 100%;
      
    }

  }
`;