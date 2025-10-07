const now = new Date();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = dayNames[now.getDay()];
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
const amPm = hour >= 12 ? "PM" : "AM";
const displayHour = hour % 12 === 0 ? 12 : hour % 12;
console.log(`Today is: ${day}.`);
console.log(`Current Time: ${displayHour} ${amPm} : ${minute} : ${second}`);
