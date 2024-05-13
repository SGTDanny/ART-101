// Lab 9: Libraries & jQuery
// Author: Daniel Gallegos
// 12 May 2024

//add button to challenge section
$("#challenge").append("<button id='button-challenge'>Press Me Sempie</button>");

$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
    $("#problems").toggleClass("special");
    $("#results").toggleClass("special");
});
