import React from "react";
import styled from "styled-components";
import Btns from "../button";
// import {Clock} from '../../assets'
import { CiClock2 } from "react-icons/ci";

import {
  BackgroundCircle,
  Card,
  ProgressSVG,
  ProgressSection,
  ProgressText,
  ProgressCircle,
} from "./style";

const data = [
    { 
      date: "July 15, 2019", 
      label: "Caroseal", 
      buttonState: "pending" 
    },
    { 
        date: "July 15, 2019", 
        label: "Caroseal", 
        buttonState: "pending" 
      }
  ];
  
const ProgressCard = ({ radius = 70, usedDays = 10, totalDays = 30 }) => {
  // Calculate progress stroke-dasharray
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = (usedDays / totalDays) * circumference; // Progress proportion
  const strokeDasharray = `${progress} ${circumference - progress}`;

  return (
    <Card>
      <ProgressSection>
        <ProgressSVG viewBox="0 0 160 160">
          <BackgroundCircle cx="80" cy="80" r={radius} />
          <ProgressCircle
            cx="80"
            cy="80"
            r={radius}
            strokeDasharray={strokeDasharray}
          />
        </ProgressSVG>
        <ProgressText>
          <div className="value">{usedDays}</div>
          <div className="label">OUT OF {totalDays}</div>
        </ProgressText>
      </ProgressSection>
      <div className="btn-section">
  {data.map((item, index) => (
    <div key={index} className="first">
      <div className="clock">
        <CiClock2 />
        <span>{item.date}</span> <span>{item.label}</span>
      </div>
      <Btns
      
        padding={"7px"}
        btnName={item.buttonState} 
        fontsize={"16px"}
        bg={"rgba(251, 223, 177, 1)"}
        radius={"50px"}
      />
    </div>
  ))}
</div>
    </Card>
  );
};

export default ProgressCard;
