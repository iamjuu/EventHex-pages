import React from "react";
import { Container, ContainerWrap } from "../../pages/style";
import {  FormContainer } from "./style";
import { Logo, User } from "../../../assets";
import RegisterBtn from "../../button";
import { Header ,FormFooterContianer} from "./style";
import Badge from "../../badge";
import Form from "../../form";
import FormFooter from '../../form/formFooter'
const login = () => {
  const fields = [
    { label: "Email Address*", type: "text", placeholder: "hello@alignui.com" },
    { label: "Password*", type: "password", placeholder: "password" },

    {
      type: "checkbox",
      label: "Keep me logged in",
      additionalElement: {
        type: "link",
        label: "Forgot password?",
        link: "/reset-password",
      },
    },
  ];
  const btnName = "login";
  return (
    <Container>
      <ContainerWrap style={{ flexDirection: "column",  gap:'80px'}}>
        <Header>
          <div className="first">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="register-div">
              <p>Don't have an account?</p>
              <RegisterBtn
                btnName="Register"
                color="black"
                border="1px solid #DADCE0"
                fontsize="14px"
                radius="5px"
              />
            </div>
          </div>{" "}
        </Header>
        <FormContainer>
          <Badge
            img={User}
            span={"Login in your account"}
            p={"Enter your details to login."}
          />
          <Form fields={fields} btnName={btnName} />
          {/* <FormFooter  /> */}

        </FormContainer>
        <FormFooterContianer>
        <FormFooter/>
        </FormFooterContianer>
      </ContainerWrap>
    </Container>
  );
};

export default login;
