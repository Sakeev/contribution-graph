import React from "react";

const Months = () => {
  function getShortMonthName() {
    const months = [
      "Янв.",
      "Фев.",
      "Март",
      "Апр.",
      "Май",
      "Июнь",
      "Июль",
      "Авг.",
      "Сент.",
      "Окт.",
      "Нояб.",
      "Дек.",
    ];

    const returnedArr = [];

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();

    for (let i = 0; i <= currentMonthIndex; i++) {
      returnedArr.push(months[i]);
    }

    for (let i = months.length; i > currentMonthIndex + 1; i--) {
      returnedArr.unshift(months[i - 1]);
    }
    return returnedArr;
  }

  return (
    <ul className="mounths">
      {getShortMonthName().map((month, index) => (
        <li key={index}>{month}</li>
      ))}
    </ul>
  );
};

export default Months;
