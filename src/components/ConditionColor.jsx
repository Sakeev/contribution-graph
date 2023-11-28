import React, { useState } from "react";
import { contributionsFunc } from "../helpers/func";

const ConditionColor = ({ color, index }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };
  const [countText] = contributionsFunc({ count: color });
  return (
    <div className="day-container">
      <div
        className={`day color-level-${index}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isTooltipVisible && (
        <div className="tooltip-content">
          <p>{countText}</p>
        </div>
      )}
    </div>
  );
};

export default ConditionColor;
