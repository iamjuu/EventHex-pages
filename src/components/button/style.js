import styled from "styled-components";

export const Button = styled.button`
  padding: ${(props) => props.padding || "5px"};
  background-color: ${(props) => props.bg || "transparent"};
  color: ${(props) => props.color || ""};
  border: ${(props) => props.border || "none"};
  border-top-right-radius: ${(props) => props.borderTopRightradius || "0"};
  border-top-left-radius: ${(props) => props.borderTopLeftradius || "0"};
  border-bottom-right-radius: ${(props) => props.borderBottomRightradius || "0"};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftradius || "0"};
  ${(props) =>
    !props.borderTopRightradius &&
    !props.borderTopLeftradius &&
    !props.borderBottomRightradius &&
    !props.borderBottomLeftradius &&
    `border-radius: ${props.radius || "0"};`}

  width: ${(props) => props.width || "auto"};
  font-size: ${(props) => props.fontsize || "inherit"};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
