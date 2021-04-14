const number = 1225454;
var hours = 0;
var min = 0;
var sec = 0;
if (number / 3600 >= 1) {
  hours = Math.trunc(number / 3600);
  var temp = number % 3600;
  if (temp >= 60) {
    min = temp / 60;
    sec = temp % 60;
  }
} else {
  var temp = number % 3600;
  if (temp >= 60) {
    min = temp / 60;
    sec = temp % 60;
  }
}

console.log("Hours = ", hours);
console.log("Minutes = ", Math.trunc(min));
console.log("Seconds = ", sec);
