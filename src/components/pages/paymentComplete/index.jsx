import React, { useState } from "react";
import { Container, ContainerWrap } from "../style";
import { Logo } from "../../../assets";
import { Main, Left, Right, Header, Section } from "./style";
import PaymentCard from "../../paymentCard";
import ListCard from "../../addressForm";
const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  const options = [
    { value: "", label: "Signed in as\nAmjadali123@gmail.com" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Selected Option:", event.target.value);
  };

  return (
    <Container>
      <ContainerWrap>
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
              <ListCard />
            </Left>

            <Right>
              <PaymentCard />
            </Right>
          </Section>
        </Main>
      </ContainerWrap>
    </Container>
  );
};

export default index;
