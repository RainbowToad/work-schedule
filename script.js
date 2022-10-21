//Finish document load before running code
$(document).ready(function() {
    // Set current date to jumbotron area
    var dayEl = $('#currentDay');
    dayEl.text(moment().format("dddd MMMM Do, YYYY"));
    
    //set local storage on button click
    $(".btn").click(function() {
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
    })

    
    var currentTime = moment().hour();
    

    //load saved data to appropriate hour
    var hourTime = 9
    $('.description').each(function() {
       var hourTimeEl = $("#hour" + hourTime)
       var hourTimetext = hourTimeEl.children().eq(1)

        var keyHour = localStorage.getItem("hour" + hourTime)
        hourTimetext.text(keyHour);
        console.log(hourTime + "====" + currentTime);    
// Make Previous time=grey, present=red, future=green
        if (currentTime<hourTime) {
            hourTimeEl.addClass("future");
        }else if(currentTime==hourTime) {
            hourTimeEl.addClass("present");
        }else{
            hourTimeEl.addClass("past");
        }

        hourTime++
    });















//refresh has events persist



});