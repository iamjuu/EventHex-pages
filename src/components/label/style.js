import styled from "styled-components";
export const Label = styled.label`
  border-radius: ${(props) => props.radius || "0"};
  border: ${(props) => props.border || "none"};
  background-color: ${(props) => props.bg || "transparent"};
  font-size: ${(props) => props.fontSize || "1rem"};

`