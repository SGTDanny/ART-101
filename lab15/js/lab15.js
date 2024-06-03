//Lab 15: AJAX
//Daniel Gallegos
//03 June 2024

const URL = "https://swapi.dev/api/people/1";

//button listener
$("#activate").click(function() {
    console.log("Button Clicked");
    //call ajax
    $.ajax(ajaxObj);
});

// cosntruct ajax object
const ajaxObj = {
    url: URL,
    type: "GET",
    dataType: "json",
    success: ajaxSuccess,
    error: ajaxError
};

//create ajax success callback
function ajaxSuccess(data) {
    console.log ("Results: ", data);
    //parse json
    const characterName = data.name;
    const characterHeight = data.height;
    const characterGender = data.gender;
    $("#output").html(`
    <p>Name: ${characterName}</p>
    <p>Height: ${characterHeight}</p>
    <p>Gender: ${characterGender}</p>
`);
}

function fetchCharacter(charactersURLs) {
    charactersURLs.forEach(function(characterURL) {
        $.ajax({
            url: characterURL,
            type: "GET",
            dataType: "json",
            success: function(characterData) {
                console.log("Character:", characterData);
            },
            error: function(request, error) {
                console.log("Error fetching character data:", request, error);
            }
        });
    });
}

function ajaxError(request, error) {
    console.log("Ooops:", request, error);
}









