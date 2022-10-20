//Finish document load before running code
$(document).ready(function() {
    //set local storage on button click
    $(".btn").click(function() {
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load saved date to appropriate hour
    $('.description').each(function() {
       console.log(this);

       $(this).val(localStorage.getItem("hour4"))
    });

   

    


// Set current date to jumbotron area
    var dayEl = $('#currentDay');
    dayEl.text(moment().format("dddd MMMM Do, YYYY"));

//Make previous times=grey, present=red, future=green
    var currentTime = moment().hour();
    console.log(currentTime);











//refresh has events persist



});