import React from "react";
import { Container, ContainerWrap, FreeContainer } from "../style";
import { Logosection, Footer, Main, Left, Right } from "./style";
import { Logo } from "../../../assets";
import Formfooter from "../../form/formFooter";
import  CouponInput  from "../../input";
import CouponBtn from '../../button'
import Form from "../../form";
const LoginPurchase = () => {
  const fields = [
    { label: "New Password*", type: "password", placeholder: "password" },
    {
      label: "Confirm New Password*",
      type: "password",
      placeholder: "password",
    },
  ];
  const btnName = "login";

  const header = [
    {
      title: "Login to your account",
      p: "Enter your details to login.",
      span:`Don't have an account?`,
      link:'Register'
    },
  ];
  return (
    <Container>
      <ContainerWrap style={{ flexDirection: "column" }}>
        <Logosection>
          <div >
          <img src={Logo} alt="" />
          </div>
          <div className="content">
<h1>Let's complete your purchase.</h1>
<p>Review your account info and enter your billing info.</p>
          </div>
        </Logosection>

        <Main>
          <Left>
            <div className="first">
              <div className="title">
                <h1>{header[0].title}</h1>
                <p>{header[0].p}</p>
              </div>
              <div>
                <span>{header[0].span}</span>
                <span>{header[0].link}</span>
              </div>
            </div>
            <Form fields={fields} btnName={btnName} />
          </Left>

          <Right>
            <div className="main">
<div className="first">
<div style={{display:'flex'
    ,flexDirection:'column'
}}>
    <h5>Payment Summary</h5>
    <p>Review your payment details</p>
</div>

<div style={{display:'flex'}}> <CouponInput borderRight={'none'} borderTopLeftradius={'10px'}  borderBottomLeftradius={'10px'} width={'100%'}   border={' 1px solid rgba(226, 228, 233, 1)'}/>  <CouponBtn  padding={'7px'}   borderBottomRightradius={'10px'} borderTopRightradius={'10px'}  bg={'black'} color={'white'} btnName={'Apply'}/> </div>
<div></div>

</div>
            </div>
          </Right>
        </Main>
        {/* <Footer>
<Formfooter/>
      </Footer> */}
      </ContainerWrap>
    </Container>
  );
};

export default LoginPurchase;
