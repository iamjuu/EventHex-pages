import styled from "styled-components";

export const Header = styled.div`
width: 100%;
font-family: sans-serif;
/* background-color: blue; */
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
background-color: red;
display: flex;

`

export const Left = styled.div`
width: 50%;
background-color: blue;
display: flex;
/* justify-content: center; */
/* align-items: center; */
.form{
  background-color: yellow;
  width: 80%;
}
@media (max-width: 768px) {
  width: 100%;
  
}
`

export const Right = styled.div`
font-family: sans-serif;
width: 50%;

`