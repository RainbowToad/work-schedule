//Finish document load before running code
$(document).ready(function() {
    //set local storage on button click
    $(".btn").click(function() {
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
    })


// Set current date to jumbotron area
    var dayEl = $('#currentDay');
    dayEl.text(moment().format("dddd MMMM Do, YYYY"));

//Make previous times=grey, present=red, future=green
    var currentTime = moment().calendar();
    console.log(currentTime);









//save to local storage

//refresh has events persist



});