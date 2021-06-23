
//=====Current Day==============
// Question: What is the point of .lead? 
// currentDay: day displayed at the top 
var today = $( "#currentDay" ).text( moment().format('dddd, MMMM Do')) 

// handle displaying the day
function displayDay() {
    var todayFormat = moment().format('dddd, MMMM Do');
    today.text(todayFormat);
}
// display the day 
displayDay(); 

//====Time blocks============== 
// TODO: perhaps create e for loop
// Append the middle bar to the time block. 
// Then append the save button block to the middle block, 
// then append the entire thing to the container.

// use .timeblock, .row? 



var row = $(".row"); 
var currentHour = moment().hours()
// 24 hours, use military time. 
for(var i = 9; i < 18; i++)
{
    // split the id on the character and access the data from the id 
    var retriveplan = localStorage.getItem(i); 
    $(`#${i}-data`).val(retriveplan)
     if(i<currentHour) {
         $(`#${i}-data`).addClass("past")
     }
}

// setting 
$(".saveplan").on("click",function(){
    var time = $(this).attr("id").split("-")[0]
    var userplan = $("#"+time+"-data").val()
    console.log(time); 
    console.log(userplan);
    localStorage.setItem(time,userplan)
})

// TODO: html --> create divs from 9 am to 5pm
// use this method for local storage 
// html have it assigned to the same class 

$(".saveplan2").on("click",function(){
    var userplan = $(this).siblings("textarea").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time,userplan)
    console.log(time); 
    console.log(userplan); 
})