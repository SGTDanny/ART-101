//Lab 11: JavaScript Events and Forms
//Daniel Gallegos
//20 May 2024

function sortString(inputString){
    return inputString.split('').sort().join('');
}

$("#submit").click(function() {
    const userName = $("#user-name").val();
    const userNameSorted = sortString(userName);
    console.log("Button Clicked");
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
})

