import React from "react";
import { CiClock2 } from "react-icons/ci";
import SeeBtn from "../button";
import { Main } from "./style";
import Gauge from "react-gauge-chart";

const index = () => {
  return (
    <Main>
      <div className="first">
        <div>
          <CiClock2 />
          <span>Time Off</span>
        </div>
        <div>
          <SeeBtn border={"1px solid #525866"} btnName={"See all"} />
        </div>
      </div>

      
      <div>
        <Gauge
          width={100}
          height={100}
          value={60}
          startAngle={-90}
          endAngle={90}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div>
            <span>
              <CiClock2 />
            </span>
            <span> july 15,2019</span>
          </div>
          <span>(Casual)</span>
          <SeeBtn btnName={"pending"} />
        </div>
      </div>
    </Main>
  );
};

export default index;
