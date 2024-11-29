import styled from "styled-components";

export const Header = styled.div`
width: 100%;
font-family: sans-serif;
.logo-div{
  padding: 10px;
}
.header-content{
  width: 100%;
  display:flex;
  flex-direction: column;
justify-content  :center ;
align-items: center;
gap: 10px;
h3{
  font-size: 24px;
}
p{
  color: rgba(82, 88, 102, 1);
  font-size: 16px;
}
}
`
export const Main = styled.div`
width: 100%;


`

export const Section = styled.div`
width: 100%;
flex-wrap: wrap;
margin-top: 30px;
/* background-color: red; */

display: flex;

`

export const Left = styled.div`
width: 48%;
font-family: sans-serif;
padding: 10px;
justify-content: center;
display: flex;
;
border-radius: 10px;

.form-title{
  border: 1px solid rgba(226, 228, 233, 1);
padding: 15px;
  width: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width:500px){
    width: 100%;
    
  }
}
@media (max-width: 768px) {
  width: 100%;
  
}
.form-content{
  width: 100%;
}
`

export const Right = styled.div`
font-family: sans-serif;
width: 48%;
@media (max-width:768px) {
  width: 100%;
  
}
`

export const Footer = styled.div`
  padding: 10px;
  width: 100%;
`;