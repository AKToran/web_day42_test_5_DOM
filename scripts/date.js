const fullDate = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = fullDate.getDay();
const date = fullDate.getDate();
const month = fullDate.getMonth();
const year = fullDate.getFullYear();

document.getElementById(
  "current-date"
).innerHTML = `${days[day]} <br> ${months[month]} ${date}, ${year},`;