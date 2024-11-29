import React, { useState } from "react";
import { Container, ContainerWrap } from "../style";
import { Logo } from "../../../assets";
import {
  Main,
  Left,
  Right,
  Header,
  Section,
  Footer,
  CardDetails,
} from "./style";
import PaymentCard from "../../paymentCard";
import ListCard from "../../addressForm";
import { Check } from "lucide-react";
import FormFooter from "../../form/formFooter";
import Label from "../../label";
import Input from "../../input";
import Btn from "../../button";
const Index = () => {
  const listCardData = [
    { title: "Signed in as", subtitle: "Amjadali123@gmail.com" },
    { title: "Selected plan", subtitle: "Basic Plan" },
    { title: "Enter Billing your Info" },
  ];
  const billingInfo = [{ title: "Enter Billing your Info" }];

  return (
    <Container>
      <ContainerWrap>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Main>
            <Header>
              <div className="logo-div">
                <img src={Logo} alt="" />
              </div>
              <div className="header-content">
                <h3>Let's complete your purchase.</h3>
                <p>Review your account info and enter your billing info.</p>
              </div>
            </Header>
            <Section>
              <Left>
                <div className="form-title">
                  {listCardData.map((item, index) => (
                    <ListCard
                      icon={<Check />}
                      bg={"aliceblue"}
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                    />
                  ))}
                  <div>
                    <ListCard title={billingInfo[0].title} />
                  </div>
                  <CardDetails className="card-details">
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        border: "1px solid  #e2e4e9",
                        borderRadius: "10px",
                        flexDirection: "column",
                        padding: "10px",
                      }}
                    >
                      <div className="first">
                        <div style={{ padding: "10px" }}></div>{" "}
                        <p>Credit Card</p>
                        <div></div>
                      </div>
                      <div className="second">
                        <div
                          style={{
                            width: "48%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Label Name={"Card Number "} />
                          <Input
                            placeholder={"0000 0000 0000 0000"}
                            borderTopLeftradius={"10px"}
                            borderTopRightradius={"10px"}
                            borderBottomLeftradius={"10px"}
                            borderBottomRightradius={"10px"}
                            border={"1px solid #e2e4e9"}
                          />
                        </div>
                        <div
                          style={{
                            width: "48%",
                            display: "flex",
                          }}
                        >
                          <div style={{ width: "50%" }}>
                            <Label Name={"Expire date "} />
                            <Input
                              width={"80%"}
                              placeholder={"MM/YY"}
                              borderTopLeftradius={"10px"}
                              borderTopRightradius={"10px"}
                              borderBottomLeftradius={"10px"}
                              borderBottomRightradius={"10px"}
                              border={"1px solid #e2e4e9"}
                            />
                          </div>
                          <div style={{ width: "50%" }}>
                            <Label Name={"CVC "} />
                            <Input
                              placeholder={"CVC"}
                              width={"80%"}
                              borderTopLeftradius={"10px"}
                              borderTopRightradius={"10px"}
                              borderBottomLeftradius={"10px"}
                              borderBottomRightradius={"10px"}
                              border={"1px solid #e2e4e9"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="third">
                      <div
                        style={{
                          padding: "10px",
                          display: "flex",
                          width: "50%",
                        }}
                      >
                        <Input width={"20%"} type={"checkbox"} />
                        <h5>razor pay</h5>
                      </div>
                      <div style={{ padding: "10px" }}>
                        <h5>razor pay</h5>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <Btn
                        btnName={"Continue"}
                        color={"#7b7c7f"}
                        padding={"8px"}
                        radius={"10px"}
                        bg={" #e2e4e9"}
                      />
                    </div>
                  </CardDetails>
                </div>
              </Left>
              <Right>
                <PaymentCard />
              </Right>
            </Section>
          </Main>

          <Footer>
            <FormFooter />
          </Footer>
        </div>
      </ContainerWrap>
    </Container>
  );
};

export default Index;
