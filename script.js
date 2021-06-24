
//=====Current Day==============
// today: displays the current day and month 
var today = $( "#currentDay" ).text( moment().format('dddd, MMMM Do')) 


//====Time blocks============== 
    // current Hour: holds the current hour
    var currentHour = moment().hours()
    console.log('current Hour', currentHour); 

    //=======About the for loop=============================================================== 
        // Retrieves the data from local storage. 
        // data is associated with a #. 
        // Each # represents time in military time (9:00 - 18:00 hours)
        // Then, we can access the value associated with each id 
        // recall (refer to index.html), the id's for each time block are formatted as #-data 
    //======================================================================================== 
    for(var i = 9; i < 24; i++)
    {
        // split the id on the character and access the data from the id 
        var retriveplan = localStorage.getItem(i); 
        $(`#${i}-data`).val(retriveplan)
        // check if each time block is the current, past, or future time. 
        // the colors associated with each class is displayed 
        if(i<currentHour) {
            $(`#${i}-data`).addClass("past"); 
        }
        else if (i == currentHour)
        {
            $(`#${i}-data`).addClass("present"); 
        }
        else if (i > currentHour)
        {
            $(`#${i}-data`).addClass("future"); 
        }
    }

    // once the user clicks save plan, it stores the edits to local storage. 
    $(".saveplan").on("click",function(){
        var time = $(this).attr("id").split("-")[0]
        var userplan = $("#"+time+"-data").val()
        console.log(time); 
        console.log(userplan);
        localStorage.setItem(time,userplan); 
    })