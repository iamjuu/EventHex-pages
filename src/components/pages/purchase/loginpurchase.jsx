import React from "react";
import { Container, ContainerWrap, FreeContainer } from "../style";
import { Logosection, Footer, Main, Left, Right } from "./style";
import { Logo } from "../../../assets";
import Formfooter from "../../form/formFooter";
import  CouponInput  from "../../input";
import CouponBtn from '../../button'
import Form from "../../form";
import PaymentSection from '../../paymentCard'
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
          <div  style={{padding:'10px'}}>
          <img src={Logo} alt="" />
          </div>
          <div className="content">
<h1>Let's complete your purchase.</h1>
<p>Review your account info and enter your billing info.</p>
          </div>
        </Logosection>

        <Main>
          <Left>
            <div style={{    width:'90%'}}>

           
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
            </div>
          </Left>

          <Right>


<PaymentSection/>
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
