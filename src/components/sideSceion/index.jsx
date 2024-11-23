import React from "react";
import { CiClock2 } from "react-icons/ci";
import SeeBtn from "../button";
import { Main } from "./style";
import Graph from "../../components/graph";
const index = () => {
  const data = [
    {
      date: "July 15, 2019",
      label: "Caroseal",
      bgcolor: "rgba(251, 223, 177, 1)",
      buttonState: "pending",
    },
    {
      date: "July 15, 2019",
      label: "Caroseal",
      bgcolor: "rgba(203, 245, 229, 1)",
      buttonState: "confirmed",
    },
    {
      date: "July 15, 2019",
      label: "Caroseal",
      bgcolor: "rgba(248, 201, 210, 1)",
      buttonState: "Rejected",
    },
  ];


  return (
    <Main>
      <div>
        <Graph data={data} />
      </div>
   
    </Main>
  );
};

export default index;
