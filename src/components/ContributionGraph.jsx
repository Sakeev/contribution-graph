import axios from "axios";
import React, { useEffect, useState } from "react";
import { generateCalendar } from "../helpers/func";
import RenderGraph from "./RenderGraph";

const ContributionGraph = () => {
  const [realData, setRealData] = useState({});

  const dataFetchFunc = async () => {
    const dataApi = await axios("https://dpg.gg/test/calendar.json");
    setRealData(dataApi.data);
  };

  useEffect(() => {
    dataFetchFunc();
  }, []);

  const calendarData = generateCalendar();
  const mergedData = calendarData.map(({ date, count }) => ({
    date,
    count: realData[date] !== undefined ? realData[date] : count,
  }));

  return (
    <div className="graph">
      <RenderGraph graphArr={mergedData} />
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
