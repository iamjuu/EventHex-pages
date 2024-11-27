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
    gap: 40px;
    justify-content: center;
    flex-direction: column;

    .first {
      display: flex;
      font-family: sans-serif;
      width: 100%;
      justify-content: space-between;
      .logo {
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
      .line {
        display: flex;
        justify-content: center;
      }
      .user-div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        h1 {
          font-family: sans-serif;
          font-size: 24px;
        }
        p {
          font-family: sans-serif;
          font-size: 16px;
          color: #525866;
        }
      }
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .right {
    width: 60%;
    display: flex;
    border-radius: 16px;
    background-color: rgba(246, 248, 250, 1);
    padding-top: 100px;
    gap: 40px;
    font-family: sans-serif;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .right-section-footer {
      padding: 10px;
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  .first {
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .logo {
      padding: 10px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }

    .register-div {
      display: flex;
      padding: 10px;
      align-items: center;
      gap: 10px;
    }
  }
`;
export const FormContainer = styled.div`
  width: 40%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormFooterContianer = styled.div`
  width: 100%;
`;
