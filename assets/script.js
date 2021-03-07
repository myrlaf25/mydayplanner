var time=moment().format("dddd, MMMM Do YYYY, h:mm a");
console.log(typeof time)
var currentDay=document.querySelector("#currentDay");
currentDay.textContent=time

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

for(let hour = 8; hour<=17; hour++){
    let index=hour-8;
}

let lineBlock = $('<div>');
lineBlock.addClass('rowPlanner');
lineBlock.addClass('index');

let saveBtn = $('<i>');
    saveBtn.attr('id',`saveid-[0]`);
    saveBtn.attr('save-id',[0]);
    saveBtn.attr('class',"fas fa-save saveIcon");


    





//asking browser to go to localStorage and retrieve the data label as planList
var planList= JSON.parse(localStorage.getItem("planList"));
console.log(planList);

$(document).on('click','i', function(event) {
    event.preventDefault();  

})


// if(planList !==null){
//     planTextArray= planList;
// }else {
//     planTextArray=newArray(7);
// planTextArray[4]= "Hello";
// }






