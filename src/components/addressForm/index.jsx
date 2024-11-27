// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FormContainer = styled.div`
//   max-width: 600px;
//   padding: 20px;
// `;

// const FormSection = styled.div`
//   background: white;
//   border-radius: 8px;
//   padding: 16px;
//   margin-bottom: 16px;
//   border: 1px solid #eaeaea;

//   &.completed {
//     background: #f8f9ff;
//   }
// `;

// const SectionHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;

// const SectionNumber = styled.div`
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   background: #4c6ef5;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
// `;

// const SectionTitle = styled.h3`
//   margin: 0;
//   font-size: 16px;
//   font-weight: 500;
// `;

// const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 16px;
//   margin-top: 20px;
// `;

// const FormField = styled.div`
//   grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
// `;

// const Label = styled.label`
//   display: block;
//   font-size: 14px;
//   color: #555;
//   margin-bottom: 8px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 6px;
//   font-size: 14px;

//   &:focus {
//     outline: none;
//     border-color: #4c6ef5;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 6px;
//   font-size: 14px;
//   background: white;

//   &:focus {
//     outline: none;
//     border-color: #4c6ef5;
//   }
// `;

// const Button = styled.button`
//   background: #4c6ef5;
//   color: white;
//   border: none;
//   padding: 12px 24px;
//   border-radius: 6px;
//   font-size: 14px;
//   cursor: pointer;
//   width: 100%;
//   margin-top: 16px;

//   &:hover {
//     background: #4263eb;
//   }
// `;

// const CountrySelect = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 6px;
//   cursor: pointer;

//   img {
//     width: 20px;
//     height: 20px;
//   }
// `;

// const BillingForm = () => {
//   return (
//     <FormContainer>
//       <FormSection>


        
//         <SectionHeader>
//           <SectionNumber>03</SectionNumber>
//           <SectionTitle>Enter your billing info</SectionTitle>
//         </SectionHeader>
        
//         <FormGrid>
//           <FormField>
//             <Label>First Name *</Label>
//             <Input type="text" placeholder="hello@figma.com" />
//           </FormField>
          
//           <FormField>
//             <Label>Last Name *</Label>
//             <Input type="text" placeholder="hello@figma.com" />
//           </FormField>
          
//           <FormField fullWidth>
//             <Label>Email to receive invoice *</Label>
//             <Input type="email" placeholder="hello@figma.com" />
//           </FormField>
          
//           <FormField fullWidth>
//             <Label>Country/Region *</Label>
//             <CountrySelect>
//               <img src="/api/placeholder/20/20" alt="India flag" />
//               <span>India</span>
//             </CountrySelect>
//           </FormField>
          
//           <FormField fullWidth>
//             <Label>Address</Label>
//             <Input type="text" placeholder="House number and street name" />
//           </FormField>
          
//           <FormField>
//             <Label>City</Label>
//             <Input type="text" />
//           </FormField>
          
//           <FormField>
//             <Label>State</Label>
//             <Select>
//               <option value="">Select an option</option>
//             </Select>
//           </FormField>
          
//           <FormField>
//             <Label>Pincode</Label>
//             <Input type="text" />
//           </FormField>
//         </FormGrid>

//         <Button>Continue</Button>
//       </FormSection>

//       <FormSection>
//         <SectionHeader>
//           <SectionNumber>04</SectionNumber>
//           <SectionTitle>Choose a payment method</SectionTitle>
//         </SectionHeader>
//       </FormSection>
//     </FormContainer>
//   );
// };

// export default BillingForm;

import React from 'react';
import styled from 'styled-components';
import { Check, ChevronDown } from 'lucide-react';

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 16px;
  background: #f5f7ff;
  border-radius: 12px;
`;

const SelectBox = styled.div`
  width: 100%;
  /* background-color: #dc8a8a; */
  /* border-bottom: 1px  solid #e5e7eb; */
  /* border-radius: 8px; */
  cursor: pointer;
  display: flex;
  min-height: 56px;

  &:hover {
    border-color: #d1d5db;
  }
`;

const ContentWrapper = styled.div`

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

const ChevronWrapper = styled.div`
  flex-shrink: 0;
`;

const InfoBox = ({ title, subtitle }) => {
  return (
    <SelectBox>      
      <ContentWrapper>
        <CheckIcon>
          <Check size={12} />
        </CheckIcon>
        <TextContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContent>
        <ChevronDown size={20} color="#6b7280" />
      </ContentWrapper>
    </SelectBox>
  );
};

const FullWidthDemo = () => {
  return (
    <Container>
      <InfoBox 
        title="Signed in as"
        subtitle="Amydal123@gmail.com"
      />
      <InfoBox 
        title="Selected plan"
        subtitle="Basic Plan"
      />
    </Container>
  );
};

export default FullWidthDemo;