import axios from "axios";
import React, { useEffect, useState } from "react";
import { generateCalendar } from "../helpers/func";
import RenderGraph from "./RenderGraph";

const ContributionGraph = () => {
  const calendarData = generateCalendar();

  return (
    <div className="graph">
      <RenderGraph graphArr={calendarData} />
      <ul className="weeks">
        <li>Пн</li>
        <li></li>
        <li>Ср</li>
        <li></li>
        <li>Пт</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default ContributionGraph;
