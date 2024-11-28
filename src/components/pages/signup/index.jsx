import React from "react";
import { Container, ContainerWrap } from "../style";
import { Main } from "./style";
import { Logo, User } from "../../../assets";
import RegisterBtn from "../../../components/button";
import Input from "../../../components/input";
import Badge from "../../badge";
import FormFooter from "../../form/formFooter";
import RightSide from "../../sideSceion";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Label from "../../../components/label";

const Signup = () => {
  const footerData = {
    h1: "Stay in Control of Your Time Off",
    p: "Track your time off balance and manage requests with the Time Off widget, ensuring a stress-free experience.",
  };

  const inputFields = [
    {
      label: "Your Name*",
      type: "text",
      placeholder: "Enter your name",
      icon: (
        <AiOutlineMail
          style={{
            position: "absolute",
            left: "2px",
            color: "#DADCE0",
          }}
        />
      ),
    },
    {
      label: "Email Address*",
      type: "text",
      placeholder: "Enter your email",
      icon: (
        <AiOutlineMail
          style={{
            position: "absolute",
            left: "2px",
            color: "#DADCE0",
          }}
        />
      ),
    },
    {
      label: "Password*",
      type: "password",
      placeholder: "password",
      icon: (
        <FaLock
          style={{
            position: "absolute",
            left: "2px",
            color: "#DADCE0",
          }}
        />
      ),
    },
    {
      label: "Confirm Password*",
      type: "password",
      placeholder: "password",
      icon: (
        <FaLock
          style={{
            position: "absolute",
            left: "2px",
            color: "#DADCE0",
          }}
        />
      ),
    },
  ];

  return (
    <Container>
      <ContainerWrap>
        <Main>
          <div className="left">
            <div className="first">
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="register-div">
                <p>Already have an account?</p>
                <RegisterBtn
                  btnName="Log in"
                  color="black"
                  padding="5px 10px"
                  border="1px solid #DADCE0"
                  fontsize="14px"
                  radius="5px"
                />
              </div>
            </div>

            <div className="second">
              <Badge
                img={User}
                span={"Sign Up your account"}
                p={"Enter your details to Sign up."}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              />
              <div className="form">
                {inputFields.map((field, index) => (
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    <Label Name={field.label} />
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {field.icon}
                      <Input
                        iconPadding="45px"
                        borderTopLeftradius="10px"
                        borderTopRightradius="10px"
                        borderBottomLeftradius="10px"
                        borderBottomRightradius="10px"
                        type={field.type}
                        placeholder={field.placeholder}
                        width="100%"
                        fontsize="14px"
                        border="1px solid #DADCE0"
                        radius="10px"
                      />
                    </div>
                  </div>
                ))}
                <RegisterBtn
                  btnName="Sign Up"
                  bg="#375DFB"
                  radius="8px"
                  width="100%"
                  color="white"
                  padding="10px"
                  fontsize="14px"
                />
                <div style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  width: '100%', 
                  margin: '15px 0'
                }}>
                  <hr style={{ 
                    flexGrow: 1, 
                    borderTop: '1px solid #E2E4E9', 
                    marginRight: '10px' 
                  }} />
                  <span style={{ 
                    color: 'rgba(82, 88, 102, 1)', 
                    fontSize: '14px' 
                  }}>OR</span>
                  <hr style={{ 
                    flexGrow: 1, 
                    borderTop: '1px solid #E2E4E9', 
                    marginLeft: '10px' 
                  }} />
                </div>
                <RegisterBtn
                  icon={<FcGoogle style={{ marginRight: '10px' }} />}
                  btnName="Sign in with Google"
                  bg="white"
                  border="1px solid #E2E4E9"
                  radius="8px"
                  width="100%"
                  color="black"
                  padding="10px"
                  fontsize="14px"
                />
              </div>
            </div>

            <div className="third">
              <FormFooter />
            </div>
          </div>

          <div className="right">
            <RightSide />
            <div className="right-section-footer">
              <span style={{ fontSize: "24px" }}>{footerData.h1}</span>
              <p style={{ color: "rgba(82, 88, 102, 1)", fontSize: "16px" }}>
                {footerData.p}
              </p>
            </div>
          </div>
        </Main>
      </ContainerWrap>
    </Container>
  );
};

export default Signup;