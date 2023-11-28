import React from "react";
import ContributionGraph from "./components/ContributionGraph";
import github from "./assets/github-icon.png";
import ConditionColor from "./components/ConditionColor";
import Months from "./components/Months";

const App = () => {
  return (
    <div className="App">
      <img src={github} alt="github-icon" className="logo" />
      <Months />
      <ContributionGraph />
      <div className="colors">
        <span>Меньше</span>
        <div>
          {[0, 5, 15, 25, 35].map((color, index) => (
            <ConditionColor key={color} index={index} color={color} />
          ))}
        </div>
        <span>Больше</span>
      </div>
    </div>
  );
};

export default App;
