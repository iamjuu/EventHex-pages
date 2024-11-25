import styled from "styled-components";
export const Logosection = styled.div`
  width: 100%;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    font-family: sans-serif;

    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
      color: rgba(82, 88, 102, 1);
    }
  }
`;
export const Footer = styled.div`
  padding: 10px;
  width: 100%;
  background-color: aliceblue;
`;

export const Main = styled.div`
  width: 100%;
  /* background-color: rebeccapurple; */
  display: flex;
  flex-wrap: wrap;
`;

export const Left = styled.div`
  margin-top: 50px;
  /* background-color: red; */
  width: 50%;

  .first {
    width: 100%;
    /* background-color: red; */
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      /* background-color: gray; */
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Right = styled.div`
font-family: sans-serif;
  background-color: red;
  width: 50%;
  .main {
    background-color: blue;

    width: 80%;
    .first {

        padding: 10px;
      h5 {
        font-size: 16px;
      }
      p{
        font-size: 14px;
        color: rgba(82, 88, 102, 1);
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
