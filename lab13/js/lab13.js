//Lab 13: Loops
//Daniel Gallegos
//27 May 2024

function fizzBuzzBoom (maxNums, factorObj) {
    for (var num=0; num<maxNums; num++) {
        var outputStr = "";
        for (var factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}
function outputToPage(output) {
$("#output").append("<p>" + output + "</p>");
}

$(document).ready(function() {
    var factors = {
        3: "Fizz",
        5: "Buzz",
        7: "Boom"
    };
    fizzBuzzBoom(200, factors)
});