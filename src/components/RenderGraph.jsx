import React, { useState } from "react";
import { contributionsFunc, formatDate } from "../helpers/func";

const RenderGraph = ({ graphArr }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return graphArr.map((day, index) => {
    const [countText, contributions] = contributionsFunc(day);
    const formattedDate = formatDate(day.date);

    return (
      <div key={index} className="day-container">
        <div
          className={`day color-level-${contributions}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {isTooltipVisible && (
          <div className="tooltip-content">
            <p>{countText}</p>
            <span>{formattedDate}</span>
          </div>
        )}
      </div>
    );
  });
};
export default RenderGraph;
