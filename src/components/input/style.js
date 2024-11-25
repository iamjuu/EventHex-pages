import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${(props) => props.bg || 'transparent'};
  width: ${(props) => props.width || 'auto'};
  border: ${(props) => props.border || 'none'};
  font-size: ${(props) => props.fontsize || '16px'};
  border-radius: ${(props) => props.radius || '0'};
  border-top-right-radius: ${(props) => props.borderTopRightradius || '0'};
  border-top-left-radius: ${(props) => props.borderTopLeftradius || '0'};
  border-bottom-right-radius: ${(props) => props.borderBottomRightradius || '0'};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftradius || '0'};
  border-right:${(props)=>props.borderRight||''} ;
`;
