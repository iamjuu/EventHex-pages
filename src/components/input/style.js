import styled from 'styled-components';

export const Input = styled.input`
height: ${(props)=>props.height||''};
  padding: ${(props) => props.padding || '5px'};
  /* padding-left: ${(props) => props.iconPadding || '10px'};  */
  background-color: ${(props) => props.bg || 'transparent'};
  width: ${(props) => props.width || 'auto'};
  border: ${(props) => props.border || 'none'};
  font-size: ${(props) => props.fontsize || '16px'};
  border-radius: ${(props) => props.radius || '0'};
  border-top-right-radius: ${(props) => props.borderTopRightradius || '0'};
  border-top-left-radius: ${(props) => props.borderTopLeftradius || '0'};
  border-bottom-right-radius: ${(props) => props.borderBottomRightradius || '0'};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftradius || '0'};
  border-right: ${(props) => props.borderRight || ''};

  /* Optional placeholder color customization */
  ::placeholder {
    color: ${(props) => props.placeholderColor || '#DADCE0'};
  }
`;
