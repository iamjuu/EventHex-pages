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
    align-items: center;
    padding: 0px 20px;
    box-sizing: border-box;

    .first {
      display: flex;
      font-family: sans-serif;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .logo {
        padding: 10px;
        width: 100px;
        display: flex;
        flex-direction: row;

      }

      .register-div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 14px;
      }
    }

    .second {
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 1024px) {
      width: 50%;
      padding: 0px 15px;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 10px;

      .first {
        flex-direction: column;
        gap: 15px;
        text-align: center;

        .logo {
          align-self: center;
        }

        .register-div {
          flex-direction: column;
        }
      }
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

    @media (max-width: 1024px) {
      width: 50%;
      padding-top: 50px;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding-top: 30px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;