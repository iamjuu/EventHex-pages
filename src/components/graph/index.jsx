import React from "react";
import styled from "styled-components";
import Btns from "../button";
import { CiClock2 } from "react-icons/ci";

import {
  BackgroundCircle,
  Card,
  ProgressSVG,
  ProgressSection,
  ProgressText,
  ProgressCircle,
  Header
} from "./style";



const ProgressCard = ({ radius = 70, usedDays = 10, totalDays = 20,data }) => {
  const circumference = 2 * Math.PI * radius; 
  const progress = (usedDays / totalDays) * circumference; 
  const strokeDasharray = `${progress} ${circumference - progress}`;

  return (
    <Card>
      <Header>
        <div className="header-left">
          <CiClock2 />
          <p>Time Off</p>
        </div>
        <div className="header-right">
          <Btns
            btnName={'See all'}
            border={'1px solid rgba(226, 228, 233, 1)'}
            radius={'8px'}
          />
        </div>
      </Header>

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
              <span  style={{fontSize:'14px'}}>{item.date}</span>
              <span  style={{fontSize:'12px', color:'rgba(134, 140, 152, 1)' }}>{item.label}</span>
            </div>
            <div className="btn">
            <Btns
              padding={"7px"}
              btnName={item.buttonState}
              fontsize={"12px"}
              bg={item.bgcolor}  
              radius={"50px"}
              />
              </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProgressCard;