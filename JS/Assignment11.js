/*
Write a function getWeekDay(date) to show the weekday in short format: ‘Mon’, ‘Tue’, ‘Wed’, ‘Thurs’,
‘Fri’, ‘Sat’, ‘Sun’.
Eg : let date = new Date(2012, 0, 3); // 3 Jan 2012
alert( getWeekDay(date) );
should output "Tue"
*/
const d = [ "Sun","Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]

let year, month, day;
year = parseInt(prompt("Enter Year:"))
month = parseInt(prompt("Enter Month:")) - 1
day = parseInt(prompt("Enter Day:"))
let date = new Date(year, month, day)
console.log(date.getDay())
console.log(d[date.getDay()])

  //wrong