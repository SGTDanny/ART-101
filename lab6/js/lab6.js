// Lab 6: JavaScript Arrays and Objects
// Author: Daniel Gallegos
// Date: 29 May 2024


//Array
const myTransport = [" walking", " Honda Accord", " TAPS Bus", " Metro Bus", " Uber"];

//Object
const myMainRide = {
  make: "Honda",
  model: "Accord",
  color: "Blue",
  year: 2021,
  age: function() {
    return 2024 - this.year;
  }
};

//Output
document.writeln ("How I get around town:" + myTransport + "<br>");

//Object Output
document.writeln ("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");