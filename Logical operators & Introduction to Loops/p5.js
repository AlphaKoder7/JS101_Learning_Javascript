const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const longDays = {
  "Sun": "Sunday",
  "Mon": "Monday",
  "Tue": "Tuesday",
  "Wed": "Wednesday",
  "Thu": "Thursday",
  "Fri": "Friday",
  "Sat": "Saturday"
};

const shortDay = "Mon"; 
const longDay = longDays[shortDay];

if (longDay) {
  console.log(longDay);
} else {
  console.log("Invalid day name");
}
