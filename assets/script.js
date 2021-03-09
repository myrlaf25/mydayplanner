var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
//use moment.js to get the time to display on my webpage
var time = moment();
var timer=moment().format("dddd, MMMM Do YYYY, h:mm a");
console.log(typeof timer)
var currentDay=document.querySelector("#currentDay");
currentDay.textContent=timer

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
function setPlanner() {

  //function to save text input into localStorage  
    $(".contentBlock").each(function () {
        var id = $(this).attr("id");
        var dailyActivity = localStorage.getItem(id);

        if (dailyActivity !== null) {
            $(this).children(".dailyActivity").val(dailyActivity);
        }
    });
}

setPlanner();
var saveBtn = $(".saveBtn");
//create event to save info onto localStorage once btn is clicked
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var dailyActivity = $(this).siblings(".dailyActivity").val();

    localStorage.setItem(time, dailyActivity);
});
//fucntion to color code time frames as to past, presnet, and future
function timeColor (){
    var future=newTime(hour[i++]);
    var past =oldTime(hour[i--]);
    for (let i=0; i<hour.length; i++)
    {if(future>currentDay){document.getElementsByClassName("hourBox").style.backgroundColor="green";
    if(past<currentDay){document.getElementsByClassName("hourBox").style.backgroundColor="gray";
}else{document.getElementsByClassName("hourBox").style.backgroundColor="red";
}return currentDay.getTime()<=future.getTime();}}


