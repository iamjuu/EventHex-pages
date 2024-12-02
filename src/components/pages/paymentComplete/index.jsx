import React, { useState } from "react";
import { Container, ContainerWrap } from "../style";
import { Logo } from "../../../assets";
import { Main, Left, Right, Header, Section,Footer } from "./style";
import PaymentCard from "../../paymentCard";
import ListCard from "../../addressForm";
import { Check } from "lucide-react";
import Label from "../../label";
import Input from "../../input";
import SubBtn from "../../button";
import FormFooter from '../../form/formFooter'


const Index = () => {
  const listCardData = [
    { title: "Signed in as", subtitle: "Amjadali123@gmail.com" },
    { title: "Selected plan", subtitle: "Basic Plan" },
  ];
  const billingInfo = [{ title: "Enter Billing your Info" }];

  return (
    <Container>
      <ContainerWrap>
        <div  style={{display:'flex',flexDirection:'column', width:'100%'}}>

        
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
                  <div className="form-content">
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "space-around",
                      }}
                    >
                      <div
                        style={{
                          width: "45%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Label Name={"First name*"} />
                        <Input
                          borderBottomLeftradius={"5px"}
                          borderBottomRightradius={"5px"}
                          borderTopLeftradius={"5px"}
                          borderTopRightradius={"5px"}
                          border={"1px solid rgba(226, 228, 233, 1)"}
                        />
                      </div>
                      <div
                        style={{
                          width: "45%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Label Name={"Last Name*"} />
                        <Input
                          borderBottomLeftradius={"5px"}
                          borderBottomRightradius={"5px"}
                          borderTopLeftradius={"5px"}
                          borderTopRightradius={"5px"}
                          border={"1px solid rgba(226, 228, 233, 1)"}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <Label Name={"Email to recieve invoice *"} />
                      <Input
                        borderBottomLeftradius={"5px"}
                        borderBottomRightradius={"5px"}
                        borderTopLeftradius={"5px"}
                        borderTopRightradius={"5px"}
                        border={"1px solid rgba(226, 228, 233, 1)"}
                        placeholder={"hello@alignui.com"}
                      />
                    </div>

                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <Label Name={"Country/Region *"} />
                      <Input
                        borderBottomLeftradius={"5px"}
                        borderBottomRightradius={"5px"}
                        borderTopLeftradius={"5px"}
                        borderTopRightradius={"5px"}
                        border={"1px solid rgba(226, 228, 233, 1)"}
                        placeholder={"Country/Region"}
                      />
                    </div>

                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <Label Name={"Address *"} />
                      <Input
                        borderBottomLeftradius={"5px"}
                        borderBottomRightradius={"5px"}
                        borderTopLeftradius={"5px"}
                        borderTopRightradius={"5px"}
                        border={"1px solid rgba(226, 228, 233, 1)"}
                        placeholder={"Address"}
                      />
                    </div>

                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <Label Name={"City *"} />
                      <Input
                        borderBottomLeftradius={"5px"}
                        borderBottomRightradius={"5px"}
                        borderTopLeftradius={"5px"}
                        borderTopRightradius={"5px"}
                        border={"1px solid rgba(226, 228, 233, 1)"}
                        placeholder={"City"}
                      />
                    </div>

                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <Label Name={"State *"} />
                      <Input
                        borderBottomLeftradius={"5px"}
                        borderBottomRightradius={"5px"}
                        borderTopLeftradius={"5px"}
                        borderTopRightradius={"5px"}
                        border={"1px solid rgba(226, 228, 233, 1)"}
                        placeholder={"State"}
                      />
                    </div>

                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <Label Name={"Pincode *"} />
                      <Input
                        borderBottomLeftradius={"5px"}
                        borderBottomRightradius={"5px"}
                        borderTopLeftradius={"5px"}
                        borderTopRightradius={"5px"}
                        border={"1px solid rgba(226, 228, 233, 1)"}
                        placeholder={"Pincode"}
                      />
                    </div>
                    <div
                      style={{
                        padding: "10px",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <SubBtn
                        btnName={"Continue"}
                        bg={" rgba(226, 228, 233, 1)"}
                        width={"25%"}
                        radius={"8px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Left>
            <Right>
              <PaymentCard />
            </Right>
          </Section>

        </Main>

        <Footer>
<FormFooter/>
      </Footer>
      </div>
      </ContainerWrap>
    </Container>
  );
};

export default Index;
