import styled from "styled-components";

export const PaymentContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding: 20px;
  border: 1px solid #e2e4e9;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h5`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px;
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0 0 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CouponInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #e2e4e9;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 14px;
`;

export const ApplyButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const PlanDetails = styled.div`
  margin-bottom: 20px;
`;

export const PlanTitle = styled.h5`
  font-size: 16px;
  margin: 0 0 10px;
`;

export const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid rgba(226, 228, 233, 1);

  li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    svg {
      margin-right: 8px;
      color: #63e6be;
    }

    span {
      font-size: 14px;
      color: #374151;
    }
  }
`;

export const PriceBreakdown = styled.div`
  /* margin-bottom: 20px; */
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 5px;

    &.total {
      font-size: 16px;
      display: flex;
      /* flex-direction: column; */
      
      font-weight: bold;
    }

    span {
      color: #6b7280;
    }

    strong {
      color: #111827;
    }
  }
`;

export const PayNowButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #f9fafb;
  color: #d1d5db;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: not-allowed;
`;

export const SecureText = styled.div`
  margin-top: 10px;
  background-color: rgba(239, 250, 246, 1);
  display: flex;
  padding: 10px;
  border-radius: 10px;
  width: 60%;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #6b7280;

  svg {
    margin-right: 5px;
    color: #10b981;
  }
`;