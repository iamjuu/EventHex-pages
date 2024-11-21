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
      width: 100%;
      justify-content: center;

      .logo {
        width: 20%;
        display: flex;
        padding: 10px;
        img {
          width: 30%;
        }
      }
      .register-div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-size: 14px;
        width: 80%;
      }
    }
    .second {
      width: 100%;
justify-content: center;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-direction: column;
      .user-div {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    .user{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
                background: linear-gradient(10deg, rgba(255,255,255,1) 31%, rgba(192,192,192,1) 100%);
        width: 88px;
        height: 88px;
        &> :nth-child(1){
            width: 70px;
            height: 70px;
            border: 1px solid #E2E4E9;
            display: flex;
            background-color: white;
            border-radius: 50%;
        justify-content: center;
        align-items: center;
        }
    }
    &>:nth-child(2){
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        p{
            font-size: 16px;
            color: #525866;
        }
        h1{
            font-size: 24px;
        }
    }
      }
  
    }
    @media (max-width: 768px) {
      width: 100%;
      .first .logo {
        img {
          width: 20%;
        }
      }
    }
    @media (max-width: 768px) {
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
    }
  }

  .right {
    width: 60%;
  }
`;