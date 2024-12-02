import styled from "styled-components";

// Responsive Container
export const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Responsive Plan Card
export const Plan = styled.div`
  background-color: ${({ isHighlighted }) => isHighlighted ? "#f0f8ff" : "#fff"};
  border: 1px solid ${({ isHighlighted }) => isHighlighted ? "#007bff" : "#ddd"};
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  text-align: center;
  box-shadow: ${({ isHighlighted }) => 
    isHighlighted ? "0 5px 15px rgba(0, 123, 255, 0.3)" : "none"};
  transition: all 0.3s ease;
  transform: ${({ isHighlighted }) => isHighlighted ? 'scale(1.05)' : 'scale(1)'};

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
    transform: scale(1);
    margin-bottom: 20px;
  }

  /* Add the hover effect directly here for index 1 */
  &:hover {
    background-color: ${({ index }) => index === 1 ? "#007bff" : "transparent"};
    color: ${({ index }) => index === 1 ? "white" : "black"};
  }
`;

// Header Section
export const PlanHeader = styled.div`
  border-bottom: 1px solid rgba(226, 228, 233, 1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlanBadge = styled.div`
  padding: 6px;
  font-size: 14px;
  border-radius: 5px;
  background-color: rgba(241, 241, 241, 1);
`;

export const DiscountBadge = styled.div`
  padding: 4px;
  font-size: 12px;
  border-radius: 10px;
  background-color: rgba(45, 159, 117, 1);
  color: white;
`;

export const PlanDescription = styled.p`
  line-height: 25px;
  color: #666;
  font-size: 14px;
`;

// Price Section
export const PriceSection = styled.div`
  border-bottom: 1px solid rgba(226, 228, 233, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const Price = styled.h1`
  font-size: 48px;
  color: #333;
  margin: 0;
`;

export const PriceFrequency = styled.p`
  color: #666;
  margin: 0;
`;

// Features Section
export const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
  font-size: 14px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin: 8px 0;

  span {
    margin-left: 8px;
  }

  .check {
    color: green;
    font-weight: bold;
  }

  .cross {
    color: red;
    text-decoration: line-through;
  }
`;

// Button 
export const Button = styled.button`
  background-color: ${({ isHighlighted }) => isHighlighted ? "#007bff" : "#333"};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isHighlighted }) => 
      isHighlighted ? "#0056b3" : "#555"};
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 18px;
  }
`;
