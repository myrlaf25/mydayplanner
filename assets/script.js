var time=moment().format("dddd, MMMM Do YYYY, h:mm a");
console.log(typeof time)
var currentDay=document.querySelector("#currentDay");
currentDay.textContent=time

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
