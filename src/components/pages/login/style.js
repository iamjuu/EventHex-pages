import styled from "styled-components";
export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  align-items: center;
  flex-wrap: wrap;


  .left {
    width: 40%;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
  

    .first {

      display: flex;
      font-family: sans-serif;
      width: 100%;
      justify-content: space-between;
      .logo{
        padding: 10px;
        width: 10%;
        display: flex;
      }

      .register-div {
        padding: 10px;
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
      gap: 20px;
      flex-direction: column;
      .line{
        display: flex;
        justify-content: center;
      }
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
  
  
      @media (max-width:768px) {
        width: 90%;
        
      }
  }

  .right {
    width: 60%;
    display: flex;
    border-radius: 16px;
    background-color: rgba(246, 248, 250, 1);
    padding-top: 100px;
    gap: 10px;
    font-family: sans-serif;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .right-section-footer{
      padding: 10px;
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
    }
    @media (max-width:768px) {
      width: 100%;
      
    }

  }
`;