//Lab 16: JSON and API
//Daniel Gallegos
// 07 May 2024

const URL = "https://xkcd.com/614/info.0.json";

const comicObj = {
    url: URL,
    type: "GET",
    dataType: "json",
    success: ajaxSuccess,
    error: ajaxError
}

function ajaxSuccess (data) {
    console.log("Results:", data);
    //parse json
    const title = data.title;
    const image = data.img;
    const alt = data.alt;
    //output
    $("#output").html("<h3>" + title + "</h3>");
    $("#output").append("<img src ='" + image + "'/>")
    $("#output").append("<p>" + alt + "</p>")
}

function ajaxError (request, error) {
    console.log("It Broke", request, error);
}

$.ajax(comicObj);


