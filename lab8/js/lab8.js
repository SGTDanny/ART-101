// Lab 8: Anon Functions and Callbacks
// Author: Daniel Gallegos
// Date: 06 May 2024

//Function
function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
console.log ("Test of evennes of arrays:", result);

var result = array.map(function(x){
    return x ** 0.5;
});

console.log("Squareroot of array:", result);

//Map reslut data
var mapResults = "Original array: [100, 81, 4, 16, 42, 144, 10000]<br> Evenness of array:[true, false, true, true, true, true, true] <br> Squareroots of array:[10, 9, 2, 4, 6.48074069840786, 12, 100] ";

//Set HTML content
$("#output").html(mapResults);
