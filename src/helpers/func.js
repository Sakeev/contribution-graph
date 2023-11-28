const getDateXWeeksAgo = (weeks) => {
  const today = new Date();
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - weeks * 7
  );
  return date.toISOString().slice(0, 10);
};

const daysUntilEndOfWeek = (dayOfWeek, bool) => {
  if (bool) {
    if (dayOfWeek === 0) return 0;
    let countDays = 7 - dayOfWeek;
    return countDays;
  } else {
    if (dayOfWeek === 1) return 0;
    let countDays = dayOfWeek - 1;
    return countDays;
  }
};

const getRemainingDays = (untilDay, newDates, bool) => {
  const data = [];

  if (!untilDay) return data;

  if (bool) {
    for (let i = 1; i <= untilDay; i++) {
      const newDateTime = newDates.getTime() + i * 24 * 60 * 60 * 1000;
      const newDate = new Date(newDateTime).toISOString().slice(0, 10);
      data.unshift({ date: newDate, count: 0 });
    }
  } else {
    for (let i = 1; i <= untilDay; i++) {
      const newDateTime = newDates.getTime() - i * 24 * 60 * 60 * 1000;
      const newDate = new Date(newDateTime).toISOString().slice(0, 10);
      data.push({ date: newDate, count: 0 });
    }
  }

  return data;
};

export const generateCalendar = () => {
  const today = new Date();
  const fiftyWeeksAgo = getDateXWeeksAgo(50);

  let data = [];

  let currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  while (currentDate >= new Date(fiftyWeeksAgo)) {
    data.push({ date: currentDate.toISOString().slice(0, 10), count: 0 });
    currentDate.setDate(currentDate.getDate() - 1);
  }

  const lastDay = new Date(fiftyWeeksAgo).getDay();
  const oldDays = daysUntilEndOfWeek(lastDay, false);
  const oldCountDay = new Date(fiftyWeeksAgo);
  console.log(new Date(fiftyWeeksAgo));

  const nextDays = daysUntilEndOfWeek(today.getDay(), true);

  const prevDaysArr = getRemainingDays(oldDays, oldCountDay, false);
  const nextDaysArr = getRemainingDays(nextDays, today, true);

  data = data.concat(prevDaysArr);
  data = nextDaysArr.concat(data);

  return data;
};

export function formatDate(inputDate) {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const date = new Date(inputDate);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
}

export const contributionsFunc = (day) => {
  let contributions = 0;
  if (day.count >= 1 && day.count <= 9) {
    contributions = 1;
  } else if (day.count >= 10 && day.count <= 19) {
    contributions = 2;
  } else if (day.count >= 20 && day.count <= 29) {
    contributions = 3;
  } else if (day.count >= 30) {
    contributions = 4;
  }
  let countText = "No contributions";

  if (day.count >= 1 && day.count <= 9) {
    countText = "1-9 contributions";
  } else if (day.count >= 10 && day.count <= 19) {
    countText = "10-19 contributions";
  } else if (day.count >= 20 && day.count <= 29) {
    countText = "20-29 contributions";
  } else if (day.count >= 30) {
    countText = "30+ contributions";
  }
  return [countText, contributions];
};
