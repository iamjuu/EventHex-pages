import React from "react";
import styled from "styled-components";
import {  ChevronDown } from "lucide-react";

// Styles (unchanged from your example)
const SelectBox = styled.div`
  width: 100%;
  /* background-color: aliceblue; */
  background-color: ${(props)=> props.bg||''};
  cursor: pointer;
  display: flex;
  min-height: 56px;

  &:hover {
    border-color: #d1d5db;
  }
`;

const ContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

const CheckIcon = styled.div`
  background: #4c6ef5;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  padding: 3px;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const Title = styled.div`
  font-weight: 500;
  color: #111827;
  font-size: 14px;
`;

const Subtitle = styled.div`
  color: #6b7280;
  font-size: 14px;
`;

const ListCard = ({ title, subtitle, bg, icon }) => {
  return (
    <SelectBox bg={bg}>
      <ContentWrapper>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "white",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckIcon>{icon}</CheckIcon>
        </div>
        <TextContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContent>
        <ChevronDown size={20} color="#6b7280" />
      </ContentWrapper>
    </SelectBox>
  );
};

export default ListCard;