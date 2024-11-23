import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  padding: 8px;
  background-color: ${(props) => props.bg || "transparent"};
  color: ${(props) => props.color || ""};
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.width || ""};
  font-size: ${(props) => props.fontsize || ""};
  border-radius: ${(props) => props.radius || "0"};
  position: relative;
  padding-left: ${(props) => (props.icon ? "35px" : "8px")}; 

  &::placeholder {
    color: #dcdcdc; 
    padding-left: ${(props) => (props.icon ? "35px" : "15px")}; 
  }
`;
