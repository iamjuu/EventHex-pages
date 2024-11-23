import styled from "styled-components";
export const Card = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  .btn-section {
    padding: 16px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .first {
      width: 100%;
      display: flex;
      border-top: 1px solid #DADCE0 ;
padding-top: 10px;
      justify-content: space-between;
      .clock {
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
export const Header = styled.div`
width: 100%;
display: flex;
font-family: sans-serif;
.header-left{
padding: 10px;
  display: flex;
  font-size: 16px;
  gap: 10px;
align-items: center;
width: 50%;
}

.header-right{
  padding: 10px;
  display: flex;
align-items: center;
justify-content: end;
  width: 50%;
}
`

export const ProgressSection = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 32px;
`;

export const ProgressSVG = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

export const Circle = styled.circle`
  fill: none;
  stroke-width: 12;
  stroke-linecap: round;
`;

export const BackgroundCircle = styled(Circle)`
  stroke: #f3f4f6;
`;

export const ProgressCircle = styled(Circle)`
  stroke: #4f46e5;
  transition: stroke-dasharray 0.5s ease;
`;

export const ProgressText = styled.div`
  position: absolute;
  font-family: sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .value {
    font-size: 48px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 4px;
  }

  .label {
    font-size: 14px;
    color: #6b7280;
  }
`;
