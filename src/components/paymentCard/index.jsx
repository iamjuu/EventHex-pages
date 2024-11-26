import {
  ApplyButton,
  BenefitList,
  CouponInput,
  InputGroup,
  PayNowButton,
  PaymentContainer,
  PlanDetails,
  PlanTitle,
  PriceBreakdown,
  SecureText,
  Subtitle,
  Title,
} from "./style";
import Paybtn from '../../components/button'
const PaymentSummary = () => {
  return (
    <PaymentContainer>
      <Title>Payment Summary</Title>
      <Subtitle>Review your payment details</Subtitle>
      <InputGroup>
        <CouponInput placeholder="Enter Code" />
        <ApplyButton>Apply</ApplyButton>
      </InputGroup>
      <PlanDetails>
        <PlanTitle>EventHex - Basic Plan</PlanTitle>
        <BenefitList>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                fill="currentColor"
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
              />
            </svg>
            <span>Benefit 1</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                fill="currentColor"
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
              />
            </svg>
            <span>Benefit 2</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                fill="currentColor"
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
              />
            </svg>
            <span>Benefit 3</span>
          </li>
        </BenefitList>
      </PlanDetails>
      <PriceBreakdown>
        <div>
          <span>Subtotal</span>
          <strong>$129.88</strong>
        </div>
        <div>
          <span>Discount</span>
          <strong>-$10.00</strong>
        </div>
        <div className="total">
          <span>Total</span>
          <strong>$119.88</strong>
        </div>
      </PriceBreakdown>
      <Paybtn btnName={'PayNow'}  width={'100%'}  radius={'10px'} color={'rgba(205, 208, 213, 1)'} fontsize={'14px'} bg={'rgba(246, 248, 250, 1)'}/>
<div style={{  display:'flex',  justifyContent:'center'}}>


      <SecureText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path
            fill="currentColor"
            d="M12 0C8.69 0 6 2.69 6 6v3H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V11c0-1.11-.89-2-2-2h-2V6c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4v3H8V6c0-2.21 1.79-4 4-4zm-6 9h12v11H6V11z"
          />
        </svg>
        Secure SSL encrypted payment
      </SecureText>
      </div>
    </PaymentContainer>
  );
};

export default PaymentSummary;
