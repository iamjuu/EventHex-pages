import React from "react";
import { Button, Container, DiscountBadge, FeatureItem, Features, HeaderTop, Plan, PlanBadge, PlanDescription, PlanHeader, Price, PriceFrequency, PriceSection } from './style';
import PlanBtn from '../../components/button';

// React Component
const PricingTable = () => {
  const plans = [
    {
      name: "BASIC",
      price: "$99",
      discount: "20% Off",
      description: "For all individuals and starters who want to start with domaining.",
      features: [
        "Access to All Features",
        "1k lookups / per month",
        "10 Monitoring Quota",
        "30K API Credits / month",
        "60 minutes Monitoring interval",
        "20% discount on backorders",
        "Domain Name Appraisal",
        "IP Monitoring",
        "Backlink Monitoring",
      ],
      highlight: false,
      btnName: 'Choose Plan'
    },
    {
      name: "PROFESSIONAL",
      price: "$149",
      discount: "15% Off",
      description: "Advanced features for professional domain investors.",
      features: [
        "Access to All Features",
        "1k lookups / per month",
        "10 Monitoring Quota",
        "30K API Credits / month",
        "60 minutes Monitoring interval",
        "20% discount on backorders",
        "Domain Name Appraisal",
        "IP Monitoring",
        "Backlink Monitoring",
      ],
      highlight: true,
      btnName: 'Choose Plan'
    },
    {
      name: "ENTERPRISE",
      price: "$119",
      discount: "15% Off",
      description: "Limited features for budget-conscious users.",
      features: [
        "Access to All Features",
        "1k lookups / per month",
        "10 Monitoring Quota",
        "30K API Credits / month",
        "60 minutes Monitoring interval",
        "20% discount on backorders",
        "Domain Name Appraisal",
        "IP Monitoring",
        "Backlink Monitoring",
      ],
      highlight: false,
      btnName: 'Choose Plan'
    },
  ];

  return (
    <Container>
      {plans.map((plan, index) => (
        <Plan key={index} isHighlighted={plan.highlight} index={index}>
          <PlanHeader>
            <HeaderTop>
              <PlanBadge>{plan.name}</PlanBadge>
              <DiscountBadge>{plan.discount}</DiscountBadge>
            </HeaderTop>
            <PlanDescription>{plan.description}</PlanDescription>
          </PlanHeader>

          <PriceSection>
            <Price>{plan.price}</Price>
            <PriceFrequency>Per Month</PriceFrequency>
          </PriceSection>

          <Features>
            {plan.features.map((feature, idx) => (
              <FeatureItem key={idx}>
                {typeof feature === "string" ? (
                  <>
                    <span className={idx < 6 ? "check" : "cross"}>
                      {idx < 6 ? "✔" : "✖"}
                    </span>
                    <span>{feature}</span>
                  </>
                ) : (
                  feature
                )}
              </FeatureItem>
            ))}
          </Features>

          <PlanBtn
            width={"80%"}
            btnName={plan.btnName}
            border={"1px solid rgba(226, 228, 233, 1)"}
            radius={"10px"}
          />
        </Plan>
      ))}
    </Container>
  );
};

export default PricingTable;
