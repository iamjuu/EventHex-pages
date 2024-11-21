import styled from "styled-components";
export const Button = styled.button`
  padding: 5px;
  background-color: ${(props) => props.bg || "transparent"};
  color: ${(props) => props.color || "inherit"};
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.width || "auto"};
  font-size: ${(props) => props.fontsize || "inherit"};
  border-radius: ${(props) => props.radius || "0"};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
