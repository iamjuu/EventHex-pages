import React from "react";
import { CiClock2 } from "react-icons/ci";
import SeeBtn from "../button";
import { Main } from "./style";
import Graph from '../../components/graph'
const index = () => {
  return (
    <Main>
      <div className="first">
        <div className="head">
          <div className="clock">
          <CiClock2 />
           <span>Time Off</span>
          </div>
        <div className="btn">
          <SeeBtn border={"1px solid rgba(226, 228, 233, 1)"} btnName={"See all"}  radius={'8px'}/>
        </div>
        </div>
      </div>
<Graph/>
      
    </Main>
  );
};

export default index;
